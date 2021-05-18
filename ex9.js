// 9-1
// console.log(__filename);
// console.log(__dirname);

// 9-2
// console.log('- process.env: ', process.env);
// console.log('- process.version: ', process.version);
// console.log('- process.versions: ', process.versions);
// console.log('- process.arch: ', process.arch);
// console.log('- process.platform: ', process.platform);

// console.log('- process.exit: ', process.exit(1));
// console.log('- process.uptime: ', process.uptime());

// 9-3
// exit 이벤트의 연결
// process.on('exit', () => {
//     console.log('프로세스가 종료되었습니다.');
// });
// uncaughException 이벤트의 연결
// process.on('uncaughException', () => {
//     console.log('예외발생');
// });
// 예외 강제 발생 시키기
// error.error.error();

// 9-4
// exit 이벤트의 연결
// process.on('exit', (code) => {
//     console.log('프로세스가 종료되었습니다.');
//     console.log(`About to exit with code: ${code}`);
// });
// uncaughException 이벤트의 연결
// process.on('uncaughException', (err) => {
//     console.log('예외발생');
//     console.log(`About to uncaughException with code: ${err}`);
// });
// 예외 강제 발생 시키기
// error.error.error();

// 9-5
// os 객체 생성
// const foo = require('os');
// console.log(foo.hostname());

// 9-6
// url 객체생성
// const foo = require('url');
// console.log(foo.parse('https://naver.com'));

// 9-7
// const fs = require('fs');
// const file = fs.readFileSync('test.txt');

// console.log(file);
// console.log(file.toString());

// // console.log(fs.readFileSync('test.txt').toString());

// 9-8
// const fs = require('fs');
// fs.readFile('test.txt', (error, file) => {
//     console.log(file);
//     console.log(file.toString());
// });

// 9-9
// const fs = require('fs');

// fs.writeFileSync('test.txt', '안녕하세요!');
// console.log('완료!');

// 9-10
const fs = require('fs');

fs.writeFile('test.txt', '잘자!', (error) => {
    console.log('완료!');
});

// 9-12
const fs = require('fs');
const { cpuUsage } = require('process');

fs.readFile('test.txt', (error, file) => {
    if(error) {
        console.log('문제 발생');
        console.log(error);
    } else {
        console.log(file);
        console.log(file.toString());
    }
});

// 9-13
// const request = require('request');

// request('https://naver.com', (error, response, body) => {
//     console.log(body);
// });

// 9-14
// const request = require('request');
// const sheerio = require('cheerio');
// const url = 'https://naver.com';

// request(url, (error, response, body) => {
//     const $ = cheerio.load(body);
//     console.log($('strong.new').text());
// });