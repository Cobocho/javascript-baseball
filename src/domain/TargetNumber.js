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
		this.#validate(value);
		this.#value = value;
	}

	static valueOf(value) {
		const targetNumber = TargetNumber.#TARGET_NUMBERS[value];
		if (!targetNumber) {
			throw new Error(ERROR_MESSAGE.MISSING_INSTANCE);
		}
		return targetNumber;
	}

	#validate(value) {
		if (typeof value !== 'number') {
			throw new Error(ERROR_MESSAGE.NOT_NUMBER('Target Number'));
		}
		const min = TargetNumber.MIN;
		const max = TargetNumber.MAX;
		if (isOutOfRange(value, min, max)) {
			throw new Error(ERROR_MESSAGE.OUT_OF_RANGE({ target: 'Target Number', min, max }));
		}
	}

	get value() {
		return this.#value;
	}
}

module.exports = {
	TargetNumber,
};
