const { Console } = require('@woowacourse/mission-utils');

class InputView {
	getUserAnswer(cb) {
		Console.readLine('숫자를 입력해주세요 : ', cb);
	}

	getRestartCommand(cb) {
		Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', cb);
	}
}

module.exports = InputView;
