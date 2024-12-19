const express = require("express");

const app = express(); //express할 수 있는 객체 리턴

app.get("/", (req, res) => {
    console.log("/ 주소로 GET요청 들어옴.");
    res.status(200).send(`
        <h1>환영합니다!</h1>
        <p>이 페이지는 홈페이지입니다.</p>
        <ul>
            <li><a href="/home">Home 페이지</a></li>
            <li><a href="/weather">Weather 정보</a></li>
            <li><a href="/homepage/contact.html">Contact로 이동</a></li>
            <li><a href="/homepage/finance.html">Finance로 이동</a></li>
        </ul>
    `); //http header

});
app.get("/home", (req, res) => {
    console.log("/home 주소로 GET요청 들어옴.");
    res.status(200); //http header
    // 정적 파일(Static)
    res.sendFile(__dirname + "/home.html"); //http body

});

app.get("/weather", (req, res) => {
    console.log("/weather 주소로 GET요청 들어옴.");
    res.status(200); //http header
    // json 으로 보내는 경우
    let data = {
        temp: -1,
        high: 5,
        low: -7,
        vi: 100
    };

    res.json(data); //http body

});

app.listen(3000, () => {
    console.log("-------------------------");
    console.log("3000번 포트 서버 시작됨.");
    console.log("-------------------------");
});