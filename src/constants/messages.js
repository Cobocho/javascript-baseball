const { GAME_CONFIG } = require('./game-config');

const MESSAGES = Object.freeze({
	START: '숫자 야구 게임을 시작합니다.',
	RESULT: (strike, ball) => `${ball ? `${ball}볼` : ''} ${strike ? `${strike}스트라이크` : ''}`,
	END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료.',

	ENTER_NUMBERS: '숫자를 입력해주세요 : ',
	ENTER_RESTART_COMMAND: `게임을 새로 시작하려면 ${GAME_CONFIG.RESTART_COMMANDS.RESTART}, 종료하려면 ${GAME_CONFIG.RESTART_COMMANDS.END}를 입력하세요.`,
});

module.exports = { MESSAGES };
