const { ERROR_MESSAGE } = require('../constants/error');
const { Answer } = require('./Answer');

class UserAnswer {
	#answer;

	constructor(numbers) {
		this.#validate(numbers);
		this.#answer = new Answer(numbers);
	}

	#validate(numbers) {
		if (!Array.isArray(numbers)) {
			throw new Error(ERROR_MESSAGE.ANSWER.NO_ARRAY_INPUT);
		}
		if (numbers.length !== Answer.SIZE) {
			throw new Error(ERROR_MESSAGE.ANSWER.INVALID_QUANTITY);
		}
		if (new Set(numbers).size !== Answer.SIZE) {
			throw new Error(ERROR_MESSAGE.ANSWER.DUPLICATED_NUMBER);
		}
		if (numbers.some((v) => typeof v !== 'number')) {
			throw new Error(ERROR_MESSAGE.COMMON.NOT_NUMBER);
		}
	}

	get answer() {
		return this.#answer;
	}
}

module.exports = {
	UserAnswer,
};
