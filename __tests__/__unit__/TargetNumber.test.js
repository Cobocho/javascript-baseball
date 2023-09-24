const { ERROR_MESSAGE } = require('../../src/constants/error');
const { TargetNumber } = require('../../src/domain');

const TARGET_NUMBERS = Object.freeze([
	{ number: 1 },
	{ number: 2 },
	{ number: 3 },
	{ number: 4 },
	{ number: 5 },
	{ number: 6 },
	{ number: 7 },
	{ number: 8 },
	{ number: 9 },
]);

describe('타켓 넘버 테스트', () => {
	it.each(TARGET_NUMBERS)('타켓 넘버는 property로 1에서 9 사이의 숫자를 가진다.', ({ number }) => {
		const targetNumber = new TargetNumber(number);
		expect(targetNumber.value).toBe(number);
	});

	it.each(TARGET_NUMBERS)(
		'valueOf() 정적 메서드 사용시 미리 생성한 인스턴스를 반환받는다.',
		({ number }) => {
			const targetNumber = TargetNumber.valueOf(number);
			expect(targetNumber.value).toBe(number);
		}
	);
});

describe('타켓 넘버 예외 처리 테스트', () => {
	it.each([
		{ input: undefined },
		{ input: null },
		{ input: true },
		{ input: '글자' },
		{ input: '10' },
	])('생성시 숫자가 아닌 $input이(가) 들어올 시 에러가 발생한다.', ({ input }) => {
		expect(() => {
			new TargetNumber(input);
		}).toThrow(ERROR_MESSAGE.NOT_NUMBER('TargetNumber'));
	});

	it.each([{ input: 0 }, { input: 10 }, { input: 9999 }, { input: -3 }, { input: -10 }])(
		'생성시 1 ~ 9 사이가 아닌 $input이 들어올 시 에러가 발생한다.',
		({ input }) => {
			expect(() => {
				new TargetNumber(input);
			}).toThrow(ERROR_MESSAGE.OUT_OF_RANGE({ target: 'TargetNumber', min: 1, max: 9 }));
		}
	);

	it.each([{ input: undefined }, { input: null }, { input: 10 }, { input: -3 }, { input: -10 }])(
		'valueOf 사용시 생성하지 않은 인스턴스 입력시 에러가 발생한다.',
		({ input }) => {
			expect(() => {
				TargetNumber.valueOf(input);
			}).toThrow(ERROR_MESSAGE.MISSING_INSTANCE);
		}
	);
});
