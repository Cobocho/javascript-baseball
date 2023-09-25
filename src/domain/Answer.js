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

	get numbers() {
		return this.#numbers;
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

	contains(targetNumber) {
		this.#validateContains(targetNumber);
		return this.#numbers.some((v) => v === targetNumber);
	}

	#validateContains(targetNumber) {
		if (!(targetNumber instanceof TargetNumber)) {
			throw new Error(ERROR_MESSAGE.ANSWER.NOT_TARGET_NUMBER_INSTANCE);
		}
	}

	match(targetNumber, index) {
		this.#validateMatch(targetNumber, index);
		return this.#numbers[index] === targetNumber;
	}

	#validateMatch(targetNumber, index) {
		if (!(targetNumber instanceof TargetNumber)) {
			throw new Error(ERROR_MESSAGE.ANSWER.NOT_TARGET_NUMBER_INSTANCE);
		}
		if (typeof index !== 'number') {
			throw new Error(ERROR_MESSAGE.ANSWER.INVALID_INDEX);
		}
	}
}

module.exports = {
	Answer,
};
