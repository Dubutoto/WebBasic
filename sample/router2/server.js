const express = require("express");
const path = require("path");

const app = express();

// 라우터 1번문제와 충동이 생겨 포트번호를 수정하였습니다.
const port = 3001;

// 1
app.get("/board", (req, res) => {
    console.log("/board 주소로 GET 요청 들어옴");
    res.sendFile(path.join(__dirname, "views/board.html"));
});

// 2
app.get("/board2", (req, res) => {
    console.log("/board2 주소로 GET 요청 들어옴");

    // 쿼리 파라미터 추출
    const { no, title, content, writer } = req.query;

    console.log(`no: ${no}, title: ${title}, content: ${content}, writer: ${writer}`);

    // JSON 형태로 응답
    res.json({
        no,
        title,
        content,
        writer
    });
});

// 서버 실행
app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 실행 중입니다`);
    // 3001번 포트입니다.
});
