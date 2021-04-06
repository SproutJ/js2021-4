/*let output = 1;

for(let i=1; i<=20; i++){
    output*=i;
}
console.log(output);*/

let foo = [1,2,3,4,5,6];

for(let i=foo.length;i>=0;i--){
    console.log(foo[i]);
}

for(let i in foo){
    console.log(`${i}번째 요소: ${foo[i]}`);
}

for(let item in foo){
    console.log("item");
    console.log('item');
}