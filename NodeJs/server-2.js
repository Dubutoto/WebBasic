const express = require('express');
const app = express();
const PORT = 2000;

// 요청이 있을 때마다 로그 출력
app.use((req, res, next) => {
    console.log(`클라이언트 요청: ${req.method} ${req.url}`);
    next();
});

// 4. GET 요청 - "/"
app.get('/', (req, res) => {
    console.log('첫페이지 get요청 들어왔음.');
    res.status(200).send('my home page');
});

// 5. POST 요청 - "/go"
app.post('/go', (req, res) => {
    console.log('인증받지 못해 post요청 응답할 수 없음');
    res.status(400).send('NO Accept');
});

// 6. GET 요청 - "/info/:food"
app.get('/info/:food', (req, res) => {
    const { food } = req.params;
    const message = `my food is ${food}`;
    console.log(message); // 콘솔에 응답 메시지 출력
    res.status(200).send(message);
});

// 7. GET 요청 - "/sum/:number"
app.get('/sum/:number', (req, res) => {
    const { number } = req.params;
    const inputNumber = parseInt(number, 10); // number를 숫자로 변환
    const result = inputNumber + 100;

    console.log(`입력값: ${inputNumber}, 결과값: ${result}`); // 콘솔에 출력
    res.status(200).send(`The result is ${result}`);
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
