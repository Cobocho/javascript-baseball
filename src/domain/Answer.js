const { Random } = require('@woowacourse/mission-utils');
const { TargetNumber } = require('./TargetNumber');
const { ERROR_MESSAGE } = require('../constants/error');

class Answer {
	static SIZE = 3;

	#numbers = [];

	constructor(numbers) {
		if (numbers) {
			this.#addNumbers(numbers);
			return;
		}
		this.#setAnswer();
	}

	#addNumbers(numbers) {
		this.#numbers = numbers.map((v) => TargetNumber.valueOf(v));
	}

	#setAnswer() {
		Random.pickUniqueNumbersInRange(Answer.SIZE, TargetNumber.MIN, TargetNumber.MAX).forEach(
			(v) => {
				this.#numbers.push(TargetNumber.valueOf(v));
			}
		);
	}

	get numbers() {
		return this.#numbers;
	}
}

module.exports = {
	Answer,
};
