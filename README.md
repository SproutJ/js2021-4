# 최주선 [202030135]

## [03월 23일]
> 59페이지~

3. 기본 자료형
- 문자 선택 연산자
    - 연산자 : 문자열[숫자]
    - 예 : console.log("안녕하세요"[0]);    ->  '안'이 출력된다.
- 템플릿 문자열[ECMAScript6] ( ` )
- 불
    - true와 false
    - 비교연산자 : 같다는 ==, 다르다는 !=, 나머지는 c와 동일.
    - "하마" < "가방"은 false. why? utf코드에 있는 key 값의 대소 비교!
- 논리 연산자
    - !(논리 부정 연산자 not), ||(논리합 연산자 or), &&(논리곱 연산자 and)
    - 단항 연산자와 이항 연산자 구분
    - 논리 연산자는 '범위 판단(또는 비교 판단)'에 많이 사용된다.
    - 현재 시간을 구하는 방법
        let hours = (new Date()).getHours();
        console.log( hours<3 || hours>8)
        console.log( 3<=hours && 8<=hours)
- 변수 : 값을 저장할 때 사용하는 식별자, 변수 선언 후 변수에 값을 할당
    - 변수 선언(let 식별자;)
    - 변수 pi를 선언    ->  let pi;
      변수 pi에 값을 할당   ->  pi = 3.14159265;
      변수 초기화   ->  let pi = 3.14159265;
- 복합 대입 연산자
    - 숫자에 적용 : +=, -=, *=, /=
    - 문자열에 적용 : +=

## [03월 16일]
> 오늘 배운 내용 요약 <br />
요약

[실습 파일] <br />
hello.js : 출력 메소드 실습 <br />
hello.html : html과 console

[1장. 자바스크립트 첫걸음]

1. 자바스크립트의 발전
- 세계에서 가장 오해를 많이 받는 프로그래밍 언어
- 그러나 자바스크립트로만 만든 웹 페이지가 데스크톱에서 제공하는 애플리케이션의 형태를 가졌으며 기존의 지도에 비해 강력한 지도 제공. (ex) 구글 지도
- 동기 방식과 비동기 방식
- Thread : 효율적인 비동기 방식으로 장보기를 프로그래밍 언어로 구현하는 방법
- Node.js : 모든 모듈(라이브러리)이 처음부터 비동기 기반의 프로그램을 만들 수 있도록 설계되어 초보자도 쉽게 프로그램을 만들 수 있다.

2. 자바스크립트로 할 수 있는 일
- 웹 클라이언트 애플리케이션 개발
    * 웹 브라우저에서 실행할 수 있는 유일한 프로그래밍 언어
- 웹 서버 개발 : 기존 웹 개발은 두 가지 이상의 프로그래밍 언어가 필요(웹 클라이언트, 웹 서버를 다른 언어로 개발). Node.js가 등장하면서 웹 서버도 자바스크립트로 개발 가능.
    * Node.js는 웹 개발과 관련해서 간단한 모듈들만 제공해서 데이터 처리와 예외 처리 등이 복잡하지만, 빠르다는 것이 장점이 있다.
- 모바일 애플리케이션 개발
    -네이티브 애플리케이션 (ex) 페이스북의 React Native
- 데스크톱 애플리케이션 개발
    - 일렉트론 모듈 : 자바스크립트로 개발 전용 텍스트 에디터를 만들어 배포, 본격적으로 데스크톱 애플리케이션 개발
- 게임 개발
    - 원래 게임은 서버와 클라이언트 모두 C++로 제작했다(속도가 빠르다).
    - 하지만, 스마트폰이 활성화되면서 '한 번에 여러 스마트폰 운영체제에서 실행할 수 있는 애플리케이션을 개발하는 것'이 경제적 이득이 된다.
    - 자바스크립트 기반인 '유니티 게임 엔진' 등장.
- 데이터베이스 관리
    - NoSQL : 기존의 SQL은 단점이 많아 사용하기 쉬운 데이터베이스 등장.
    - MongoDB : 데이터베이스 관리 시 자바스크립트를 활용하는 NoSQL.

***

[2장. 자바스크립트 기본]

1. 기본 용어
- 표현식과 문장
    - 표현식 : 하나하나의 문장.
    - 문장 : 표현식이 하나 이상 모일 경우, 마지막에 종결 의미로 세미콜론.
    - 프로그램 : 문장이 모이면 프로그램이 된다.
- 키워드 : 자바스크립트에서 특별한 의미가 부여된 단어.
- 식별자 : 이름을 붙일 때 사용하는 단어, 변수와 함수 이름 등으로 사용.
    * 키워드 사용 불가.
    * 특수 문자는 _와 $만 허용.
    * 숫자로 시작 불가.
    * 공백 입력 불가.
- 식별자 사용 규칙
    * 생성자 함수의 이름은 항상 대문자로 시작.
    * 변수, 함수, 속성, 메소드의 이름은 항상 소문자로 시작.
    * 여러 단어로 된 식별자는 각 단어의 첫 글자를 대문자로 함.
- 주석 : C언어와 사용방식 동일.

2. 출력
- 출력 메소드
    - console 객체의 log() 메소드 사용 : console.log() 메소드
    * 사용 예 : console.log("문자열")

3. 기본 자료형
- 숫자
    - 가장 기본적인 자료형
    - 사칙연산 가능.
    - 연산자 우선순위
    - 나머지 연산자 사용 가능.
- 문자열
    - 문자의 집합
    - 문자열 생성 시 큰따옴표나 작은따옴표를 사용.
    - 이스케이프 문자
        - 따옴표를 문자 그대로 사용 가능. (ex) \"
        - 문자열 줄바꿈 할 경우 사용. (ex) \n
            - \t(수평 탭), \n(줄바꿈), \'(작음따옴표), \"(큰따옴표), 역슬래시 2개 연속 입력(역슬래시)
    - 문자열 합하기(+ 문자열 연결 연산자)