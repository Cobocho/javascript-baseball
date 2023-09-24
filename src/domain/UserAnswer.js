const { ERROR_MESSAGE } = require('../constants/error');
const { Answer } = require('./Answer');
const { TargetNumber } = require('./TargetNumber');

class UserAnswer {
	#answer;

	constructor(numbers) {
		this.#validate(numbers);
		this.#answer = new Answer(numbers);
	}

	#validate(numbers) {
		if (!Array.isArray(numbers)) {
			throw new Error(ERROR_MESSAGE.INVALID_TYPE('정답', '배열'));
		}
		if (numbers.length !== Answer.SIZE) {
			throw new Error(ERROR_MESSAGE.INVALID_QUANTITY(3, '정답'));
		}
		if (new Set(numbers).size !== Answer.SIZE) {
			throw new Error(ERROR_MESSAGE.DUPLICATED_NUMBER);
		}
		if (numbers.some((v) => typeof v !== 'number')) {
			throw new Error(ERROR_MESSAGE.NOT_NUMBER('정답'));
		}
	}

	get answer() {
		return this.#answer;
	}
}

module.exports = {
	UserAnswer,
};
