const { Random } = require('@woowacourse/mission-utils');
const { Answer, TargetNumber } = require('../../src/domain');

describe('정답 테스트', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it.each([
		{ numbers: [1, 2, 3] },
		{ numbers: [3, 9, 8] },
		{ numbers: [9, 4, 5] },
		{ numbers: [4, 2, 7] },
	])('정답은 TargetNumber 3개를 소유한다.', ({ numbers }) => {
		jest.spyOn(Random, 'pickUniqueNumbersInRange').mockReturnValueOnce(numbers);
		const answer = new Answer();

		expect(answer.numbers).toHaveLength(3);
		answer.numbers.forEach((number, idx) => {
			expect(number).toEqual(TargetNumber.valueOf(numbers[idx]));
		});
	});
});
