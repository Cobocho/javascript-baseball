const { Random } = require('@woowacourse/mission-utils');
const { TargetNumber } = require('./TargetNumber');
const { ERROR_MESSAGE } = require('../constants/error');

class Answer {
	static SIZE = 3;

	#numbers = [];

	constructor(numbers) {
		if (typeof numbers !== 'undefined') {
			this.#validate(numbers);
			this.#addNumbers(numbers);
			return;
		}
		this.#setAnswer();
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

	get numbers() {
		return this.#numbers;
	}

	#addNumbers(numbers) {
		this.#numbers = numbers.map((v) => TargetNumber.valueOf(v));
	}

	#setAnswer() {
		this.#addRandomNumber();
		if (this.#numbers.length !== Answer.SIZE) {
			this.#setAnswer();
		}
	}

	#addRandomNumber() {
		const randomNumber = Random.pickNumberInRange(TargetNumber.MIN, TargetNumber.MAX);
		const targetNumber = TargetNumber.valueOf(randomNumber);
		if (this.#numbers.includes(targetNumber)) return;
		this.#numbers.push(targetNumber);
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
