const express = require('express');
const app = express();
const PORT = 3000;

// 요청이 있을 때마다 로그 출력 (미들웨어)
app.use((req, res, next) => {
    console.log(`클라이언트 요청: ${req.method} ${req.url}`);
    next();
});

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send('Hello, Express 서버가 실행되었습니다!');
    res.write("오우")
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
