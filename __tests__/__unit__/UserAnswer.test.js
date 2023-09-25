const { Random } = require('@woowacourse/mission-utils');
const { UserAnswer, TargetNumber, Answer } = require('../../src/domain');
const { ERROR_MESSAGE } = require('../../src/constants/error');

describe('유저 정답 테스트', () => {
	it.each([{ input: [1, 2, 3] }, { input: [3, 9, 8] }, { input: [9, 4, 5] }, { input: [4, 2, 7] }])(
		'유저 정답은 TargetNumber 3개를 소유한다.',
		({ input }) => {
			const userAnswer = new UserAnswer(input);

			expect(userAnswer.answer.numbers).toHaveLength(3);
			userAnswer.answer.numbers.forEach((number, idx) => {
				expect(number).toEqual(TargetNumber.valueOf(input[idx]));
			});
		}
	);

	it.each([
		{ numbers: [1, 2, 3], strike: 3, ball: 0 },
		{ numbers: [2, 3, 1], strike: 0, ball: 3 },
		{ numbers: [1, 3, 5], strike: 1, ball: 1 },
		{ numbers: [4, 5, 6], strike: 0, ball: 0 },
	])(
		'computeResult 메서드는 strike와 ball을 계산한다. (유저 정답: [1, 2, 3] 정답: $numbers strike: $strike ball: $ball)',
		({ numbers, strike, ball }) => {
			const answer = new Answer(numbers);
			const userAnswer = new UserAnswer([1, 2, 3]);
			userAnswer.computeResult(answer);

			expect(userAnswer.strike).toBe(strike);
			expect(userAnswer.ball).toBe(ball);
		}
	);

	it.each([{ answer: [1, 2, 3] }, { answer: '[2, 3, 1]' }, { answer: undefined }, { answer: 1 }])(
		'computeResult 메서드는 인자가 Answer 인스턴스가 아닐 시 에러가 발생한다.',
		({ answer }) => {
			const userAnswer = new UserAnswer([1, 2, 3]);

			expect(() => {
				userAnswer.computeResult(answer);
			}).toThrow(ERROR_MESSAGE.USER_ANSWER.INVALID_ANSWER);
		}
	);
});
