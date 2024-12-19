const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// /login: login.html 파일 전달
app.get("/login", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "login.html"));
});

// /check: 로그인 정보 처리
app.get("/check", (req, res) => {
    console.log("/check 주소로 GET 요청 들어옴");

    
    const id_value = req.query.id; // input name="id"
    const pw_value = req.query.pw; // input name="pw"

    console.log(`ID: ${id_value}, PW: ${pw_value}`);

    // 로그인 검증 결과 처리
    let result = "";
    if (id_value === "root" && pw_value === "1234") {
        result = "login OK!!!";
    } else {
        result = "login NO!!!";
    }

    // 클라이언트에 결과 전송
    res.status(200).send(result);
});

// 서버 실행
app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 실행 중입니다`);
});
