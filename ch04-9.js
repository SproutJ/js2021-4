/*let i=0;
let array=[4,31,273,57,8,11,31];
let output;

while(true){
    if(array[i]%2==0){
        output=array[i];
        break;
    }
    i=i+1;
}
console.log(`처음 발견한 짝수는 ${output}입니다.`);*/
/*
let i=0;
let array=[1,31,273,57,7,11,31];
let output;

while(true){
    if(array[i]%2==0){
        output=array[i];
        break;
    }
    i=i+1;
    console.log(i);
}
console.log(`처음 발견한 짝수는 ${output}입니다.`);*/

i=0;
let foo = [2,3,5,4,10];
while(true){
    if(foo[i]%2==0){
        bar=foo[i];
        break;
    }
    i=i+1;
}
console.log(`처음 발견한 짝수는 ${bar}입니다.`);

bar=[0];
console.log("\n push");
foo.push("자료구조",1,0.5);
bar.push(1,2,3);
console.log(foo);

console.log("\n pop");
foo.pop();
console.log(foo);

console.log("\n shift");
foo.shift();
console.log(foo);
console.log(bar);

console.log("\n concat");
foo=foo.concat(bar);
console.log(foo);
foo=bar.concat(foo);
console.log(foo);

console.log("\n reverse");
foo.reverse();
console.log(foo);

console.log("\n sort");
foo.sort();
console.log(foo);

console.log("\n slice");
console.log(foo);
console.log(foo.slice(1,5));

console.log("\n splice");
foo=["a","b","c","d"];
bar=foo.splice(1,3,1,"삽입",10,653);
console.log(foo);
console.log(bar);

console.log("\n join");
foo=[0,1,2,3,4,5];
foo=foo.join(",");
console.log(foo);