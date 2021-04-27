//  무명 함수
// let foo = function(){
//     console.log("첫줄");
//     console.log("둘째줄");
// }


// foo();
// console.log(foo);*/

//  선언적 함수
// function foo(){
//     console.log("즐거운 하루");
// }

// foo();
// console.log(foo);

// 화살표 함수. ES6 문법.
// let foo = () =>{
//     console.log("신나는 하루");
// }

// foo();
// console.log(foo);

// function power(x){
//     return x * x;
// }

// console.log(power(10));
// console.log(power(20));

// function multiply(x, y){
//     return x * y;
// }

// console.log(multiply(10, 20));

// function print(x){
//     console.log(`"${x}"이라고 말했습니다.`);
// }

// print(5);

// function sum(min, max){
//     let output=0;
//     for(let i = min;i<=max;i++){
//         output+=i;
//     }
//     console.log(output);
// }

// sum(1,100);

// function multi(min, max){
//     let output=1;
//     for(let i = min;i<=max;i++){
//         output*=i;
//     }
//     console.log(output);
// }

// multi(1,20);

// function print(name,count){
//     if(!count){
//         count=1;
//     }
//     console.log(`${name}이 ${count}개 있습니다.`);
// }

// print("사과",10);
// print("사과");

// function print(name,count){
//     count=count||"미입력";
//     console.log(`${name}이 ${count}개 있습니다.`);
// }

// print("사과",10);
// print("사과");

// function callTenTimes(foo){
//     for(let i=0;i<10;i++){
//         foo();
//     }
// }

// callTenTimes(function() {
//     console.log("함수 호출")
// })

// let inputA="52";
// let inputB="52.273";
// let inputC="1401동";
// let inputD="1A동입니다.";

// console.log(parseInt(inputA));
// console.log(parseFloat(inputA));

// console.log(parseInt(inputB));
// console.log(parseFloat(inputB));

// console.log(parseInt(inputC)); // 숫자형태만 변환
// console.log(parseInt(inputD));

// console.log(Number(inputA));
// console.log(Number(inputB));
// console.log(Number(inputC));
// console.log(Number(inputD));

// setTimeout(function(){
//     console.log("1초지남!");
// }, 1000);

// setInterval(() => {
//     console.log("1초 지남!")
// }, 1000);

// let foo = setInterval( () => {
//     console.log("출력합니다.");
// }, 1000);

// setTimeout(function() {
//     clearInterval(foo);
// }, 3000);

// let bar;
// bar = 10;
// bar = 20;

// console.log(bar);

// 코드 5-19
// let foo;
// foo = function(){
//     console.log("첫번째 함수");
// }
// foo = () => {
//     console.log("두번째 함수");
// }

// foo();

// 코드 5-20
foo = function (){
    console.log("first");
}
function foo(){
    console.log("second");
}

foo();