const ERROR_MESSAGE = Object.freeze({
	COMMON: {
		NOT_NUMBER: '숫자를 입력해주세요!',

		// 🛠️ 개발용 디버깅 에러코드
		MISSING_INSTANCE: '존재하지 않는 인스턴스입니다!',
	},

	TARGET_NUMBER: {
		OUT_OF_RANGE: '1에서 9 사이의 숫자를 입력해주세요!',
	},

	ANSWER: {
		INVALID_QUANTITY: '3개의 숫자를 입력해주세요!',
		DUPLICATED_NUMBER: '중복된 숫자가 존재합니다!',

		// 🛠️ 개발용 디버깅 에러코드
		NO_ARRAY_INPUT: 'Answer는 배열로 생성되어야합니다!',
		NOT_TARGET_NUMBER_INSTANCE: 'TargetNumber 인스턴스를 입력해주세요!',
		INVALID_INDEX: 'index에 숫자를 입력해주세요!',
	},
});

module.exports = {
	ERROR_MESSAGE,
};
