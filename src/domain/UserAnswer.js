const { ERROR_MESSAGE } = require('../constants/error');
const { Answer } = require('./Answer');

class UserAnswer {
	#answer;

	#strike = 0;

	#ball = 0;

	constructor(numbers) {
		this.#answer = new Answer(numbers);
	}

	get answer() {
		return this.#answer;
	}

	computeResult(answer) {
		this.#answer.numbers.forEach((targetNumber, index) => {
			if (answer.contains(targetNumber, index)) {
				this.#strike += 1;
				return;
			}
			if (answer.contains(targetNumber)) {
				this.#ball += 1;
			}
		});
	}
}

module.exports = {
	UserAnswer,
};
