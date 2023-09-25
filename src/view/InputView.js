const { Console } = require('@woowacourse/mission-utils');
const { MESSAGES } = require('../constants/messages');

class InputView {
	getUserAnswer(cb) {
		Console.readLine(MESSAGES.ENTER_NUMBERS, cb);
	}

	getRestartCommand(cb) {
		Console.readLine(MESSAGES.ENTER_RESTART_COMMAND, cb);
	}
}

module.exports = InputView;
