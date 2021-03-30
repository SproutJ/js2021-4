//0316
console.log('Hello World...!');
console.log('Hello World...!');
console.log('Hello World...!');

//0323
const con1 = "문자열 상수";
//con1 = "";
console.log(con1);

/*let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getMinutes());
console.log(date.getSeconds());

if(date.getHours() < 12){
    console.log("오전!");
}
console.log("오후!");*/
/*
console.log("예제");

let date = new Date();
let hours = date.getHours();

if(hours<11){
    console.log("아침 먹을 시간.");
} else {
    if(hours < 15){
        console.log("점심 먹을 시간.");
    } else{
        console.log("저녁 먹을 시간.");
    }
}*/
let date = new Date();

console.log(date.getMonth());

switch(date.getMonth()){
    case 12:
    case 1:
    case 2:
        console.log("겨울");
        break;
    case 3:
    case 4:
    case 5:
        console.log("봄");
        break;
    case 6:
    case 7:
    case 8:
        console.log("여름");
        break;
    case 9:
    case 10:
    case 11:
        console.log("가을");
        break;
    default:
        console.log("?????");
        break;
}
// let test = 777;
let test;
// test = test ? test : "초기화";
// console.log(test);

test = test || "초기화!!"
console.log(test);