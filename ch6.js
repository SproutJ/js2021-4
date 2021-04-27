// let foo = ['사과', '바나나', '딸기'];
// let name = 123;
// let product = {
//     name: '건조 망고',
//     유형: '당절임',
//     원산지: '필리핀',
//     테스트: 1200,
//     print: function () {
//         console.log(`${this.name} ${this.유형}`);
//     }
// }

// console.log(product);

// console.log(foo[1]);
// console.log(product['원산지']);

// for(let key in product){
//     console.log(`${key}: ${product[key]}`);
// }

// product.print();

let foo = [
    { name: '바나나', price: 1320},
    { name: '용과', price: 5000},
    { name: '블루베리', price: 4350},
    { name: '자몽', price: 4000},
    { name: '포도', price: 5380}
];

function bar (foo) {
    console.log(`${foo.name} : ${foo.price}`);
}

for(let fool of foo){
    bar(fool);
}