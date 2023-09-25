const { Random } = require('@woowacourse/mission-utils');
const { Answer, TargetNumber } = require('../../src/domain');
const { ERROR_MESSAGE } = require('../../src/constants/error');

describe('정답 테스트', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it.each([
		{ numbers: [1, 2, 3] },
		{ numbers: [3, 9, 8] },
		{ numbers: [9, 4, 5] },
		{ numbers: [4, 2, 7] },
	])('Answer는 인자가 없을시 랜덤한 TargetNumber 3개를 소유한다.', ({ numbers }) => {
		numbers.forEach((v) => {
			jest.spyOn(Random, 'pickNumberInRange').mockReturnValueOnce(v);
		});
		const answer = new Answer();

		expect(answer.numbers).toHaveLength(3);
		answer.numbers.forEach((number, idx) => {
			expect(number).toEqual(TargetNumber.valueOf(numbers[idx]));
		});
	});

	it.each([
		{ numbers: [1, 2, 3] },
		{ numbers: [3, 9, 8] },
		{ numbers: [9, 4, 5] },
		{ numbers: [4, 2, 7] },
	])('Answer는 인자가 존재할시 입력받은 TargetNumber 3개를 소유한다.', ({ numbers }) => {
		const answer = new Answer(numbers);

		expect(answer.numbers).toHaveLength(3);
		answer.numbers.forEach((number, idx) => {
			expect(number).toEqual(TargetNumber.valueOf(numbers[idx]));
		});
	});

	it.each([
		{ numbers: [1, 2, 3], target: 1, result: true },
		{ numbers: [3, 9, 8], target: 3, result: true },
		{ numbers: [9, 4, 5], target: 3, result: false },
		{ numbers: [4, 2, 7], target: 5, result: false },
	])(
		'contains 메서드는 입력받은 $target이 $numbers에 포함되었는지 확인한다.',
		({ numbers, target, result }) => {
			const answer = new Answer(numbers);
			const targetNumber = TargetNumber.valueOf(target);

			expect(answer.contains(targetNumber)).toBe(result);
		}
	);

	it.each([{ target: 1 }, { target: '1' }, { target: [1] }, { target: undefined }])(
		'contains 메서드는 인자가 TargetNumber 아닐 시 에러가 발생한다.',
		({ target }) => {
			const answer = new Answer([1, 2, 3]);

			expect(() => {
				answer.contains(target);
			}).toThrow(ERROR_MESSAGE.ANSWER.NOT_TARGET_NUMBER_INSTANCE);
		}
	);

	it.each([
		{ numbers: [1, 2, 3], target: 1, index: 0, result: true },
		{ numbers: [3, 9, 8], target: 9, index: 1, result: true },
		{ numbers: [9, 4, 5], target: 5, index: 2, result: true },
		{ numbers: [4, 2, 7], target: 4, index: 3, result: false },
	])(
		'match 메서드는 입력받은 $target이 $index에 위치하는지 확인한다.',
		({ numbers, target, index, result }) => {
			const answer = new Answer(numbers);
			const targetNumber = TargetNumber.valueOf(target);

			expect(answer.match(targetNumber, index)).toBe(result);
		}
	);

	it.each([{ target: 1 }, { target: '1' }, { target: [1] }, { target: undefined }])(
		'match 메서드는 인자가 TargetNumber 인스턴스 아닐 시 에러가 발생한다.',
		({ target }) => {
			const answer = new Answer([1, 2, 3]);

			expect(() => {
				answer.match(target);
			}).toThrow(ERROR_MESSAGE.ANSWER.NOT_TARGET_NUMBER_INSTANCE);
		}
	);

	it.each([{ index: '1' }, { index: [1] }, { index: undefined }])(
		'match 메서드는 index가 숫자가 아닐 시 에러가 발생한다.',
		({ index }) => {
			const answer = new Answer([1, 2, 3]);
			const target = TargetNumber.valueOf(1);

			expect(() => {
				answer.match(target, index);
			}).toThrow(ERROR_MESSAGE.ANSWER.INVALID_INDEX);
		}
	);
});

describe('Answer 예외 처리 테스트', () => {
	it.each([
		{ input: '1, 2, 3' },
		{ input: '[1, 2, 3]' },
		{ input: null },
		{ input: true },
		{ input: {} },
	])('입력받은 값이 배열이 아닌 $input일 시 에러가 발생한다.', ({ input }) => {
		expect(() => {
			new Answer(input);
		}).toThrow(ERROR_MESSAGE.ANSWER.NO_ARRAY_INPUT);
	});

	it.each([{ input: [] }, { input: [1] }, { input: [1, 2] }, { input: [1, 2, 3, 4] }])(
		'입력받은 숫자가 3개가 아닐 시 에러가 발생한다.',
		({ input }) => {
			expect(() => {
				new Answer(input);
			}).toThrow(ERROR_MESSAGE.ANSWER.INVALID_QUANTITY);
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
			new Answer(input);
		}).toThrow(ERROR_MESSAGE.COMMON.NOT_NUMBER);
	});

	it.each([{ input: [1, 2, 2] }, { input: [3, 9, 3] }, { input: [7, 7, 7] }])(
		'동일한 숫자가 존재할 시 에러가 발생한다.',
		({ input }) => {
			expect(() => {
				new Answer(input);
			}).toThrow(ERROR_MESSAGE.ANSWER.DUPLICATED_NUMBER);
		}
	);
});
