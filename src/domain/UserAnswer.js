const { ERROR_MESSAGE } = require('../constants/error');
const { Answer } = require('./Answer');

class UserAnswer {
	#answer;

	#strike = 0;

	#ball = 0;

	#isCorrectAnswer = false;

	constructor(numbers) {
		this.#answer = new Answer(numbers);
	}

	get answer() {
		return this.#answer;
	}

	get strike() {
		return this.#strike;
	}

	get ball() {
		return this.#ball;
	}

	get isCorrectAnswer() {
		return this.#isCorrectAnswer;
	}

	computeResult(answer) {
		this.#validateComputeResult(answer);
		this.#answer.numbers.forEach((targetNumber, index) => {
			if (answer.match(targetNumber, index)) {
				this.#strike += 1;
				return;
			}
			if (answer.contains(targetNumber)) {
				this.#ball += 1;
			}
		});
		this.setIsCorrectAnswer();
	}

	setIsCorrectAnswer() {
		if (this.#strike === Answer.SIZE) {
			this.#isCorrectAnswer = true;
		}
	}

	#validateComputeResult(answer) {
		if (!(answer instanceof Answer)) {
			throw new Error(ERROR_MESSAGE.USER_ANSWER.INVALID_ANSWER);
		}
	}
}

module.exports = {
	UserAnswer,
};
