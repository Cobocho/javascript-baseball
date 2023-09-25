- [x] TargetNumber 도메인 구현

  - [x] 기능 구현
    - [x] TargetNumber는 인자로 1~9 사이의 값을 입력받는다.
    - [x] valueOf() 정적 메서드 사용시 미리 생성한 인스턴스를 반환받는다.
  - [x] 예외 사항
    - [x] 생성시 숫자가 아닌 값이 들어올 시 에러가 발생한다.
    - [x] 생성시 1 ~ 9 사이가 아닌 값이 들어올 시 에러가 발생한다.
    - [x] valueOf 사용시 생성하지 않은 인스턴스 입력시 에러가 발생한다.

- [x] Answer 도메인 구현

  - [x] 기능 구현
    - [x] Answer는 생성시 인자가 없으면 랜덤 TargetNumber 3개를 소유한다.
    - [x] Answer는 생성시 인자가 있으면 해당 TargetNumber 3개를 소유한다.
      - [ ] 입력 받은 배열이 아닐 시 에러가 발생한다.
      - [ ] 입력 받은 숫자가 3개가 아닐 시 에러가 발생한다.
      - [ ] 입력 받은 값 중에 숫자가 아닌 값이 존재할 시 에러가 발생한다.
      - [ ] 동일한 숫자가 존재할 시 에러가 발생한다.
    - [x] contains 메서드는 입력받은 TargetNumber 인스턴스가 포함되었는지 확인한다.
      - [x] 인자가 TargetNumber 아닐 시 에러가 발생한다.
    - [x] match 메서드는 입력받은 TargetNumber 인스턴스가 입력받은 index에 위치하는지 확인한다.
      - [x] 인자가 TargetNumber 인스턴스가 아닐 시 에러가 발생한다.
      - [x] index가 숫자가 아닐 시 에러가 발생한다.

- [x] UserAnswer 도메인 구현
  - [x] 기능 구현
    - [x] UserAnswer는 인자로 숫자 3개를 입력받는다.
    - [x] UserAnswer는 입력 받은 숫자로 생성된 Answer를 가진다.
  - [ ] computeResult 메서드는 strike와 ball을 계산한다.
    - [ ] 인자가 Answer 인스턴스가 아닐 시 에러가 발생한다.
