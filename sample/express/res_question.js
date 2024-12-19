const express = require("express");
const app = express();
const port = 3000;

app.get("/about", (req, res) => {
    res.status(200);
    res.sendFile(__dirname + "/about.html"); // 올바르게 경로 연결
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});
