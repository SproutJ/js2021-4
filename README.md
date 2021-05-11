# 최주선 [202030135]

## [05월 11일]
>실습파일 <br>
ch7.js<br>
ch7.html

4. Date 객체
- 주의점: '월'은 0부터 시작. (사용 시 +1을 하면 우리가 아는 월이 된다.)

5. Array 객체
- 대부분의 메소드가 자기 자신을 변경한다.
- 이러한 배열 형식에 익숙해지기
```
let foo = [
    {
        name: '감자',
        price: 500
    },
    {
        name: '당근',
        price: 750
    }
];
```
- ECMAScript5에서 추가된 메소드
    - toEach() : 배열의 요소를 하나씩 뽑아서 반복을 돌림.
    - map() : 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 생성.
    - filter() : 콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 생성해서 리턴.

6. 참고
- 프로토타입에 메소드를 추가하면 해당 자료형 전체에 추가 가능.
- 배열을 다루기 위해서 쓰는 underscore.js 라이브러리.
- JSON 객체: 자바스크립트 객체를 사용한 데이터 표현 방법.
    - 제약 사항
    >문자열은 큰따옴표로 만든다.
    모든 키는 큰따옴표로 감싸야 한다.<br>
    숫자, 문자열, 불 자료형만 사용 가능하다.<br>

## [05월 04일]
>실습파일 <br>
ch7.js

4. 생성자 함수와 프로토타입
- 프로토타입: 생성자 함수로 만든 객체는 프로토타입 공간에 메소드를 지정해서 모든 객체가 공유하도록 함, 해당 함수를 생성자 함수로 사용했을 때만 의미가 있다.

5. 참고
- null의 값과 자료형: console.log()와 typeof()를 이용해서 알아보면 null과 object가 출력된다.

[7장. 표준 내장 객체]
1. 기본 자료형과 객체 자료형의 차이
- 통합 개발 환경에서 '자동 완성 기능'
- 기본 자료형은 객체가 아니므로 속성과 메소드 추가 불가능.
```
let num = 273;
num method = function(){
    return 'Num Method';
};
console.log(num.method()); // 이 코드를 실행하면 오류가 난다.
```

2. Number 객체
- 자바스크립트에서 숫자 표현 시 사용.
- 메소드: toExponential(), toFlexed(), toPrecision()
- Number 생성자 함수의 속성: MAX_VALUE, MIN_VALUE, NaN, POSITIVE_INFINITY, NEGATIVE_INFINITY

3. String 객체
- String 객체의 속성: length
- String 객체의 메소드는 여러 개인데, 알아두면 여러모로 편리하다.

- toUpperCase(): 문자열을 대문자로 바꾸어 리턴.
```
let foo = 'abcdef';

foo.toUpperCase(); // 잘못된 String 객체의 메소드 사용.
console.log(foo); // 자기 자신을 변경하지 않고 리턴하는 것뿐이므로 소문자 상태로 출력된다.

foo = foo.toUpperCase(); // 올바른 String 객체의 메소드 사용
console.log(foo);
```
- indexOf(): 특정 문자열이 있는지 확인, 위치 리턴. 문자열이 포함되어 씨지 않을 때는 -1 리턴.
```
let foo = "안녕하세요. 좋은 날씨입니다.";

if(foo.indexOf('아침') >= 0) {
    console.log('좋은 아침입니다.');
}
else {
    console.log('안녕히 주무세요.');
}
```
- split(): 특정한 기호를 기반으로 문자열을 분해함.
```
let string = '감자,고구마,바나나,사과';

let array = string.split(',');
console.log(array);
```

## [04월 27일]
>실습파일 <br>
ch5.js
ch6.js

* 무명함수와 선언적 함수의 우선순위 : 무명함수가 더 우선시된다. (그렇지만 같은 이름의 함수는 만들지 않는 것이 좋다.)

7. 참고
- 익명 함수와 화살표 함수의 차이 : 내부에서 this 키워드가 가지는 의미

[6장. 객체]
1. 객체 기본
- 배열은 요소에 접근할 때 인덱스를 사용하고, 객체는 키를 사용함.

2. 객체와 반복문
- for in 반복문을 사용해 객체에 반복문을 적용.

3. 속성과 메소드
- 요소 : 배열 내부에 있는 값 하나하나
- 속성 : 객체 내부에 있는 값 하나하나
- 객체의 다양한 자료형(대부분 객체에 들어가니까 잘 활용하기.)
```
    var object = {
        number: 273,
        string: 'abcABC',
        boolean: true,
        array: [52, 273, 103, 32],
        method: function () {

        }
    };
```

4. 생성자 함수와 프로토타입
- 객체지향 프로그래밍은 현실의 객체를 모방해서 프로그래밍하는 것이다.
- 배열과 객체를 사용하면 여러 개의 데이터를 쉽게 다룰 수 있습니다.
- 생성자 함수 : 객체를 만드는 함수, 대문자로 시작하는 이름 사용

## [04월 13일]
>실습파일 <br>
ch5.js

[5장.함수]
1. 함수 생성 방법
- 익명 함수
    - 이름을 붙이지 않고 함수 생성
    - 함수 호출 시 함수 내부의 코드 덩어리가 모두 실행
    - 사용법 : let <함수 이름(<-익명 함수이기 때문에 변수 이름이다.)> = function () {};
- 선언적 함수
    - 이름 붙여서 함수 생성
- 화살표 함수
    - 사용 예 :
        ```
        let foo = () =>{
             console.log("신나는 하루");
        }
        ```

2. 함수의 기본 형태
```
    function <함수명> (매개변수) {
        실행문;
    }
```

3. 함수의 기본 활용 형태
- 매개 변수로 min, max의 값을 넘겨주어서 min부터 max까지의 값을 더하는 기능 구현 가능.

4. 함수 매개 변수 초기화
- 조건문을 활용한 매개 변수 초기화(조건문으로 매개 변수를 확인해서 매개 변수가 undefined면 초기화.).
- count = count || 1 // count에 count를 넣거나 count가 없으면 count에 1을 넣는다.

5. 콜백 함수
- 함수의 매개 변수로 전달되는 함수

6. 표준 내장 함수
- 자바스크립트에서 기본적으로 지원하는 함수
- 숫자 변환 함수와 타이머 함수 등 다양한 종류의 함수가 있다.
* 반복적으로 계속 실행되는 함수를 종료하기 위해서는 Ctrl + C를 cmd창에서 입력하면 된다.

## [04월 06일]
>실습파일 <br>
ex4-3.js <br>
ch04-7-8.js <br>
ch04-9.js <br>
ch04-10.js

4. 역 for 반복문
- 예제 : 배열 요소를 뒤쪽부터 출력

5. for in 반복문과 for of 반복문
- 객체에 쉽게 반복문을 적용한다.
- 두 반복문은 for 반복문 사용과 역할이 같다.
- 사용 예
    for(let 인덱스 in 배열){}
    for(let 요소 of 배열){}

6. 중첩 반복문
- 예제 : 별 쌓기

7. break 키워드
- 반복문을 벗어날 때 사용.
- 무한 반복문은 내부에서 break를 사용해야만 탈출 가능.

8. continue 키워드
- 반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행함.

9. 참고
- 스코프 : 변수를 사용할 수 있는 범위. (스코프 == 블록)
- 블록 : 중괄호('{}')로 둘러싸는 부분.
    - 블록 내부에 선언된 변수는 해당 변수 내부에서만 사용 가능하다. (반복문에 활용된 변수는 해당 블록에 있으므로 외부에서 활용할 수 없다.)
- 호이스팅 : 해당 블록에서 사용할 변수를 미리 확인해서 정리하는 작업
- let 키워드와 var 키워드
    - let 키워드 : 자바스크립트(let 키워드로 생성한 변수는 해당 블록 내부에서만 사용. 현재 많이 사용하는 것.)
    - var 키워드 : 익스플로러(var 키워드로 생성한 변수는 모든 곳에서 사용. 현재는 거의 사용 안 함.)

## [03월 30일]

> 실습파일 <br>
hello.html <br>
hello.js <br>
code3-18.js <br>
for_test.js

4. if else if 조건문
- 중복되지 않는 세 가지 이상의 조건을 구분 시 사용.

5. switch 조건문
- 비교할 값이 명확할 때 사용.

6. 삼항 연산자
- 사용법 : <불 표현식> ? <참> : <거짓>

7. 짧은 초기화 조건문
- || 연산자를 불이 아닌 자료에 사용할 경우
    - A || B에서 A가 참이라면 A로 대치
    - A || B에서 A가 거짓이라면 B로 대치

8. 참고
- 웹 브라우저에서 작동하는 자바스크립트는 prompt() 이름의 함수를 받는다.
- Node.js에서 작동하는 자바스크립트는 단순한 코드로 입력을 받을 수 없다.

***
Type script 관련 오류
- 자바스크립트에서 TypeScript 문법을 체크하는 과정에서 나타나는 것으로, 거슬리는 경우에는 VS Code 내의 설정을 변경해주면 된다.

***

[4장.반복문]
0. 반복문
- 효율적인 반복을 위해서 사용.

1. 배열
- 여러 개의 자료를 한꺼번에 다룰 수 있는 자료형.
- 배열에는 여러 자료형이 섞여 있을 수 있음.
    (ex) let array = [1, 23, '아침밥', true, false]
- 사용법 : let 이름 = [자료, 자료, 자료]
- 배열 안에 들어있는 각 자료를 '요소'라고 함.

2. while 반복문
- 사용법 : while(<불 표현식>){
    //불 표현식이 참인 동안 실행할 문장
}

3. for 반복문
- 초기식 비교 후에 조건식을 비교하여 문장의 실행 여부를 결정하고 나서 문장이 실행되면 실행 후 종결식을 실행하고 다시 조건식을 비교하는 과정으로 돌아온다. 문장이 실행되지 않는다면 조건이 false인 것이므로 반복문이 종료된다.
- 사용법 : for (let i=0; i<(반복 횟수); i++) 

## [03월 23일]
> 59페이지~

> 실습파일 <br>
hello.html <br>
hello.js

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
4. 변수 : 값을 저장할 때 사용하는 식별자, 변수 선언 후 변수에 값을 할당
- 변수 선언(let 식별자;)
- 변수 pi를 선언    ->  let pi;
      변수 pi에 값을 할당   ->  pi = 3.14159265;
      변수 초기화   ->  let pi = 3.14159265;
5. 복합 대입 연산자
- 숫자에 적용 : +=, -=, *=, /=
- 문자열에 적용 : +=
6. 증감 연산자
- ++a, --a : 증감 후 연산(전위)
- a++, a-- : 연산 후 증감(후위)
7. 자료형 검사
- 자료형 확인 연산자
    - typedef : 해당 변수의 자료형 추출.
        - typedef(10)
        - typedef('문자열')
8. undefined 자료형
- 변수를 선언했으나 초기화하지 않은 자료형
9. 강제 자료형 변환
- Number() : 숫자로 자료형 변환.
    - 숫자로 변환할 수 없는 문자열을 Number() 함수로 변환하면 'NaN(Not a Number, 숫자 자료형이지만 숫자가 아닌 것)'을 출력.
        - NaN은 무조건적으로 다르다.
        - NaN인지 확인 시에는 isNaN() 함수 사용.
        - nan == nan의 결과는 false다. nan은 표현 불가능한 수치형 결과를 나타내는 값으로 '자기 자신과 일치하지 않는 유일한 값'이다.
- String() : 문자열로 자료형 변환.
- Boolean() : 불로 자료형 변환.
    - Boolean() 함수를 사용하면 5개의 요소(0, NaN, ""[빈 문자열], null, undefined)는 false로 변환.
10. 자동 자료형 변환
- 숫자와 문자열 자료형 자동 변환 : 숫자와 문자열에 '+' 연산자를 적용하면 자동으로 숫자가 문자열로 변환.
- 불 자료형 자동 변환 : ! 연산자를 두 번 사용해 Boolean() 함수를 사용하는 것과 같은 효과.
11. 일치 연산자
- 자료형까지 검사
- === : 자료형과 값이 같은지 비교.
- !== : 자료형과 값이 다른지 비교.
12. 상수
- 상수 : '항상 같은 수'라는 의미, 변수와 반대되는 개념.
- conse : 상수(constant)를 만드는 키워드.
- 변하지 않을 대상에 상수를 적용.

***

[3장. 조건문]
1. if 조건문
- 기본 형태
```
    if(<불 표현식>){

    }
```
- 불 표현식이 true면 문장 실행, false면 문장 무시.
- 사용 예
    - 홀수, 짝수 구분.
    - 현재 시간 구하기.
2. if else 조건문
- 기본 형태
```
    if(<불 표현식>){

    } else {

    }
```
3. 중첩 조건문
- if문 안에 if문이 있는 것.

## [03월 16일]
> 오늘 배운 내용 요약 <br />
요약

> 실습 파일 <br>
hello.js : 출력 메소드 실습 <br>
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