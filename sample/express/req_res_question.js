const express = require("express");
const fs = require("fs");


const app = express();

// JSON 응답을 처리하는 라우트
app.get("/json", (req, res) => {
    const json = {
        cat: "feline",
        dog: "canine",
        rat: "murine"
    };
    res.status(200).json(json);
});

// HTML 파일 응답을 처리하는 라우트
app.get("/html", (req, res) => {
    res.status(200).sendFile(__dirnam +  "/index.html")});


// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
   console.log(`${PORT}번 포트에서 서버 실행 중`);
});

