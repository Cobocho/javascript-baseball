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

describe('타켓 넘버 예외 처리 테스트', () => {
	it.each([
		{ input: '1, 2, 3' },
		{ input: '[1, 2, 3]' },
		{ input: undefined },
		{ input: null },
		{ input: true },
		{ input: {} },
	])('입력받은 숫자가 배열이 아닐 시 에러가 발생한다.', ({ input }) => {
		expect(() => {
			new UserAnswer(input);
		}).toThrow(ERROR_MESSAGE.INVALID_TYPE('정답', '배열'));
	});

	it.each([{ input: [] }, { input: [1] }, { input: [1, 2] }, { input: [1, 2, 3, 4] }])(
		'입력받은 숫자가 3개가 아닐 시 에러가 발생한다.',
		({ input }) => {
			expect(() => {
				new UserAnswer(input);
			}).toThrow(ERROR_MESSAGE.INVALID_QUANTITY(3, '정답'));
		}
	);

	it.each([
		{ input: [1, undefined, 3] },
		{ input: [null, undefined, 3] },
		{ input: ['1', 2, 3] },
		{ input: [1, 2, {}] },
		{ input: [1, [2], 3] },
		{ input: [1, {}, 3] },
	])('입력 받은 값 중에 숫자가 아닌 값이 존재할 시 에러가 발생한다.', ({ input }) => {
		expect(() => {
			new UserAnswer(input);
		}).toThrow(ERROR_MESSAGE.NOT_NUMBER('정답'));
	});

	it.each([{ input: [1, 2, 2] }, { input: [3, 9, 3] }, { input: [7, 7, 7] }])(
		'동일한 숫자가 존재할 시 에러가 발생한다.',
		({ input }) => {
			expect(() => {
				new UserAnswer(input);
			}).toThrow(ERROR_MESSAGE.DUPLICATED_NUMBER);
		}
	);
});
