const { Random } = require('@woowacourse/mission-utils');
const { UserAnswer, TargetNumber } = require('../../src/domain');
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
});
