const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constants/messages');

class OutputView {
	start() {
		Console.print(MESSAGES.START);
	}

	printResult(strike, ball) {
		if (!strike && !ball) {
			Console.print('낫싱');
			return;
		}
		Console.print(MESSAGES.RESULT(strike, ball));
	}

	printEnd() {
		Console.print(MESSAGES.END);
	}

	printError(errorMessage) {
		Console.print(errorMessage);
	}
}

module.exports = OutputView;
