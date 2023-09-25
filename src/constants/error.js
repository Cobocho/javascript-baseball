const ERROR_MESSAGE = Object.freeze({
	COMMON: { NOT_NUMBER: '숫자를 입력해주세요!', MISSING_INSTANCE: '존재하지 않는 인스턴스입니다!' },

	TARGET_NUMBER: {
		OUT_OF_RANGE: '1에서 9 사이의 숫자를 입력해주세요!',
	},

	ANSWER: {
		INVALID_QUANTITY: '3개의 숫자를 입력해주세요!',
		DUPLICATED_NUMBER: '중복된 숫자가 존재합니다!',
		NO_ARRAY_INPUT: 'ANSWER는 배열로 생성되어야합니다!',
	},
});

module.exports = {
	ERROR_MESSAGE,
};
