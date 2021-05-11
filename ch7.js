// ex7-10
let foo = [1, 30, 40, 50, 100];
// foEach()
foo.forEach((item, index) => {
    console.log(`${index} - ${item}`);
});
console.log('***');

// map()
let bar = foo.map((item, index) => {
    return item+100;
});
console.log(bar);
console.log('***');

// filter()
let foobar = foo.filter((item, index) => {
    return item%2 == 0; //Wkrtn whrjs.
});
console.log(foobar);


// let foo = 273;
// let bar = 111;

// Number.prototype.method = function() {
//     return 'Add Method';
// }

// console.log(foo.method());
// console.log(bar.method());

// let numberA = Number.MAX_VALUE;
// let numberB = Number.MAX_VALUE+1000000000;

// console.log(numberA);
// console.log(numberB);

// let numberC = Number.MIN_VALUE;
// let numberD = Number.MIN_VALUE-0.000001;

// console.log(numberC);
// console.log(numberD);

// let foo = 'abcdef';

// foo.toUpperCase(); // 저장된 값이 변경되는 것이 아니라 리턴 값에만 메소드의 기능이 적용되기 때문에 이런 식으로 사용하면 안 됩니다.
// console.log(foo);

// foo = foo.toUpperCase();
// console.log(foo);

// let foo = "안녕하세요. 좋은 날씨입니다.";

// if(foo.indexOf('아침') >= 0) {
//     console.log('좋은 아침입니다.');
// }
// else {
//     console.log('안녕히 주무세요.');
// }

// let string = '감자,고구마,바나나,사과';

// let array = string.split(',');
// console.log(array);

//7-5 Date 객체 생성
// let dateA = new Date();
// console.log(dateA.getHours());
// console.log(dateA);

// ex7-6
// let date = new Date();
// console.log(date);
// date.setFullYear(date.getFullYear()+1);
// date.setMonth(date.getMonth()+1);
// date.setDate(date.getDate()+1);
// console.log(date);

// ex7-7
// let now = new Date();
// let before = new Date(`December 9, 1991`);

// let interval = now.getTime() - before.getTime();
// console.log(interval);

// interval = Math.floor(interval / (1000*60*60*24));
// console.log(interval);

// let foo = [1,2,3,4,5];
// let foo = [
//     {
//         name: '감자',
//         price: 500
//     },
//     {
//         name: '당근',
//         price: 750
//     },
//     {
//         name: '파프리카',
//         price: 3980
//     },
//     {

//     }
// ];

// let bar = [
//     {
//         name: '바나나',
//         price: 1000
//     }
// ];

// ex7-10
let foo = [1, 30, 40, 50, 100];
// foEach()
foo.forEach((item, index) => {
    console.log(`${index} - ${item}`);
});
console.log('***');

// map()
let bar = foo.map((item, index) => {
    return item+100;
});
console.log(bar);
console.log('***');

// filter()
let foobar = foo.filter((item, index) => {
    return item%2 == 0; //짝수(==) 홀수(!=) 조건.
});
console.log(foobar);