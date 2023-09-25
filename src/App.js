const { ERROR_MESSAGE } = require('./constants/error');
const { Answer, UserAnswer } = require('./domain');
const { InputView, OutputView } = require('./view');
const { Console } = require('@woowacourse/mission-utils');

class App {
	#answer;

	#view = {
		input: new InputView(),
		output: new OutputView(),
	};

	constructor() {
		this.#init();
	}

	#init() {
		this.#answer = new Answer();
	}

	play() {
		this.#view.output.start();
		this.processTurn();
	}

	processTurn() {
		this.#view.input.getUserAnswer((input) => {
			const userAnswer = this.getGradedUserAnswer(input);
			const { strike, ball, isCorrectAnswer } = userAnswer;

			this.#view.output.printResult(strike, ball);

			this.checkGameEnded(isCorrectAnswer);
		});
	}

	getGradedUserAnswer(input) {
		const parsedNumbers = input.split('').filter(Boolean).map(Number);
		const userAnswer = new UserAnswer(parsedNumbers);
		userAnswer.computeResult(this.#answer);

		return userAnswer;
	}

	checkGameEnded(isCorrectAnswer) {
		if (isCorrectAnswer) {
			this.gameEnd();
			return;
		}
		this.processTurn();
	}

	gameEnd() {
		this.#view.output.printEnd();
		this.#view.input.getRestartCommand((input) => this.checkRestart(input));
	}

	#validateRetryCommand(retryCommand) {
		if (![1, 2].includes(retryCommand)) {
			throw new Error(ERROR_MESSAGE.RETRY_COMMAND.INVALID_COMMAND);
		}
	}

	checkRestart(input) {
		const retryCommand = Number(input.trim());
		this.#validateRetryCommand(retryCommand);

		if (retryCommand === 1) {
			this.restartGame();
			return;
		}
		this.processEnd();
	}

	restartGame() {
		this.#init();
		this.processTurn();
	}

	processEnd() {
		Console.close();
	}
}

module.exports = App;
