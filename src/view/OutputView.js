const { Console } = require('@woowacourse/mission-utils');

class OutputView {
	start() {
		Console.print('숫자 야구 게임을 시작합니다.');
	}

	printResult(strike, ball) {
		if (!strike && !ball) {
			Console.print('낫싱');
			return;
		}
		Console.print(`${ball ? `${ball}볼` : ''} ${strike ? `${strike}스트라이크` : ''}`);
	}

	printEnd() {
		Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
	}

	printError(errorMessage) {
		Console.print(errorMessage);
	}
}

module.exports = OutputView;
