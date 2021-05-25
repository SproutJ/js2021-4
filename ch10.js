// 10-1
// const express = require('express');

// const app = express();

// app.use((request, response) => {
//     response.send('<h1>Hello express</h1>');
// });
// app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });

// // 10-2
// const express = require('express'); // 모듈 객체 생성

// const app = express(); // 서버 생성

// // request 이벤트 리스너 설정
// app.get("/page/:id", (request, response) => {
//     const id = request.params.id; // 토큰 꺼내기
//     response.send(`<h1>${id} Page</h1>`); // 응답하기
// });
// // 서버 실행
// app.listen(52273, () => {
//     console.log('Server running at http://127.0.0.1:52273');
// });

// 10-3
// const express = require('express'); // 모듈의 객체 생성

// const app = express(); // 서버 생성

// // request 이벤트 리스너 설정
// app.get('*', (request, response) => {
//     response.status(404);
//     response.set('methodA', 'ABCD');
//     response.set({
//         methodB1: 'FGHIJ',
//         methodB2: 'KLMNO',
//     });
//     response.send('본문을 입력합니다.');
// });

// // 서버 설정
// app.listen(52273, () => {
//     console.log('Server runnind at http://127.0.0.1:52273');
// });

// 10-4
// 모듈의 객체 생성
// const { data } = require('cheerio/lib/api/attributes');
// const express = require('express');
// const fs = require('fs');

// const app = express(); // 서버 생성

// // request 이벤트 리스너 설정
// app.get('/image', (request, response) => {
//     fs.readFile('image.png', (error, data) => {
//         // 이미지 파일 제공
//         response.type('imge/png');
//         response.send(data);
//     });
// });

// app.get('/audio', (request, response) => {
//     fs.readFile('audio.mp3', (error, data) => {
//         // 오디오 파일 제공
//         response.type('audio/mpeg');
//         response.send(data);
//     });
// });

// // 서버 실행
// app.listen(52273, () => {
//     console.log('Server runnind at http://127.0.0.1:52273');
// });

// 10-5
// const express = require('express'); // 모듈의 객체 생성

// const app = express(); // 서버 생성

// // request 이벤트 리스너 설정
// app.get('*', (request, response) => {
//     response.status(404);
//     response.send('해당 경로에 아무것도 없습니다.');
// });

// // 서버 실행
// app.listen(52273, () => {
//     console.log('Server runnind at http://127.0.0.1:52273');
// });

// 10-6
// const express = require('express'); // 모듈의 객체 생성

// const app = express(); // 서버 생성

// // request 이벤트 리스너 설정
// app.get('*', (request, response) => {
//     response.redirect('http://naver.com');
// });

// // 서버 실행
// app.listen(52273, () => {
//     console.log('Server runnind at http://127.0.0.1:52273');
// });

// 10-7
// const express = require('express'); // 모듈의 객체 생성

// const app = express(); // 서버 생성

// // request 이벤트 리스너 설정
// app.get('*', (request, response) => {
//     console.log(request.query);
//     response.send(request.query);
// });

// // 서버 실행
// app.listen(52273, () => {
//     console.log('Server runnind at http://127.0.0.1:52273');
// });

// 10-8
// const express = require('express'); // 모듈의 객체 생성

// const app = express(); // 서버 생성
// app.use(express.static('public'));

// // request 이벤트 리스너 설정
// app.get('*', (request, response) => {
//     console.log(404);
//     response.send('파일이 없습니다.');
// });

// // 서버 실행
// app.listen(52273, () => {
//     console.log('Server runnind at http://127.0.0.1:52273');
// });

// 10-9
// // 모듈의 객체 생성
// const express = require('express');
// const morgan = require('morgan');

// // 서버 생성
// const app = express();
// app.use(express.static('public'));
// app.use(morgan('combined'));

// // request 이벤트 리스너 설정
// app.get('*', (request, response) => {
//     response.send('명령 프롬프트를 확인해 주세요.');
// });

// // 서버 실행
// app.listen(52273, () => {
//     console.log('Server runnind at http://127.0.0.1:52273');
// });

// 10-10
// 모듈의 객체 생성
// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const { response } = require('express');

// // 서버 생성
// const app = express();
// app.use(express.static('public'));
// app.use(morgan('combined'));
// app.use(bodyParser.urlencoded({extended: false}));

// // request 이벤트 리스너 설정
// app.get('/', (request, response) => {
//     // HTML 형식의 문자열 생성
//     let output = "";
//     output += '<form method="post">';
//     output += ' <input type="text" name="a" />';
//     output += ' <input type="text" name="b" />';
//     output += '</form>';
//     // 응답
//     response.send(output);
// });
// app.post('/', (request, response) => {
//     response.send(request.body);
// });

// // 서버 실행
// app.listen(52273, () => {
//     console.log('Server runnind at http://127.0.0.1:52273');
// });