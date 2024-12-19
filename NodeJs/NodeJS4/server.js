const express = require("express");
const path = require("path");

const app = express();
const PORT = 9999;

// JSON 및 URL 인코딩 데이터 파싱 미들웨어
app.use(express.urlencoded({ extended: true })); // form 데이터 파싱
app.use(express.json()); // JSON 데이터 파싱

// 서버 시작 메시지 출력
app.listen(PORT, () => {
    console.log("--------------------------------------");
    console.log(`${PORT}포트 서버 시작되었습니다.`);
    console.log("--------------------------------------");
});

// 시작 화면: home.html 전송
app.get("/", (req, res) => {
    console.log("시작화면 접속");
    res.sendFile(path.join(__dirname, "views", "home.html"));
});

// GET 요청: insert.html 전송
app.get("/insert", (req, res) => {
    console.log("/insert 주소로 GET 요청 들어옴.");
    res.sendFile(path.join(__dirname, "views", "insert.html"));
});

// POST 요청: insert2 (회원가입 데이터 처리)
app.post("/insert2", (req, res) => {
    console.log("/insert2 주소로 POST 요청 들어옴.");

    // req.body 확인
    console.log("req.body:", req.body);

    const { id, pw, name, tel } = req.body;

    console.log(`ID: ${id}, PW: ${pw}, NAME: ${name}, TEL: ${tel}`);

    const response = {
        message: "회원가입 성공!",
        receivedData: { id, pw, name, tel }
    };

    res.status(200).json(response);
});


app.get("/delete", (req, res) => {
    console.log("/delete 주소로 GET 요청 들어옴.");
    res.sendFile(path.join(__dirname, "views", "delete.html"));
});


app.post("/delete2", (req, res) => {
    console.log("/delete2 주소로 POST 요청 들어옴.");

    const { id } = req.body; 
    console.log(`삭제할 ID: ${id}`);

    const responseMessage = `삭제할 id는 ${id}입니다.`;

    res.status(200).send(responseMessage);
});



