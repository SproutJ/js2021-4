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
}