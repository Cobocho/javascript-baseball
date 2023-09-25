const { isOutOfRange } = require('../utils/validator');
const { ERROR_MESSAGE } = require('../constants/error');

class TargetNumber {
	static MIN = 1;

	static MAX = 9;

	static #TARGET_NUMBERS = Object.fromEntries(
		Array.from({ length: TargetNumber.MAX }, (_, i) => [i + 1, new TargetNumber(i + 1)])
	);

	#value;

	constructor(value) {
		this.#value = value;
	}

	static valueOf(value) {
		this.#validate(value);
		const targetNumber = TargetNumber.#TARGET_NUMBERS[value];
		if (!targetNumber) {
			throw new Error(ERROR_MESSAGE.COMMON.MISSING_INSTANCE);
		}
		return targetNumber;
	}

	static #validate(value) {
		if (typeof value !== 'number') {
			throw new Error(ERROR_MESSAGE.COMMON.NO_ARRAY_INPUT);
		}
		const min = TargetNumber.MIN;
		const max = TargetNumber.MAX;
		if (isOutOfRange(value, min, max)) {
			throw new Error(ERROR_MESSAGE.TARGET_NUMBER.OUT_OF_RANGE);
		}
	}

	get value() {
		return this.#value;
	}
}

module.exports = {
	TargetNumber,
};
