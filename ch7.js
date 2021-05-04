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

let foo = 'abcdef';

foo.toUpperCase(); // 저장된 값이 변경되는 것이 아니라 리턴 값에만 메소드의 기능이 적용되기 때문에 이런 식으로 사용하면 안 됩니다.
console.log(foo);

foo = foo.toUpperCase();
console.log(foo);

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