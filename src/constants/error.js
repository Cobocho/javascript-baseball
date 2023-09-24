const ERROR_MESSAGE = Object.freeze({
  OUT_OF_RANGE: ({ target, min, max }, unit = '') =>
    `${min}~${max}${unit} 사이의 ${target}을 입력해주세요!`,
  NOT_NUMBER: (target) => `${target}에 숫자를 입력해주세요!`,
  MISSING_INSTANCE: '존재하지 않는 인스턴스입니다!',
});

module.exports = {
  ERROR_MESSAGE,
};
