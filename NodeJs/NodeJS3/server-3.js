const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express(); //express할 수 있는 객체 리턴

// body-parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// a태그는 get요청
app.get("/", (req, res) => {
    console.log("/ 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/login", (req, res) => {
    console.log("/login 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/location", (req, res) => {
    console.log("/location 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(path.join(__dirname, "views", "location.html"));
});

app.get("/info", (req, res) => {
    console.log("/info 주소로 GET요청 들어옴.");
    res.status(200); //http header
    res.sendFile(path.join(__dirname, "views", "info.html"));
});

app.post("/check", (req, res) => {
    console.log("/check 주소로 GET요청 들어옴.");
    res.status(200); //http header
    const pass = req.body.pass;
    console.log(pass);    
    res.send("<h1>your pass>> " + pass + "</h1>");
});

app.get("/check", (req, res) => {
    console.log("/check 주소로 GET요청 들어옴.");
    res.status(200); //http header
    //check?id=apple&pw=1234
    //check/apple/1234
    let id_value = req.query.id; //input name="id"
    let pw_value = req.query.pw; //input name="pw"
    console.log(id_value + " " + pw_value);
    let result ="";
    if (id_value == "root" && pw_value == "1234") {
        result = "login OK!!!";
    } else {
        result = "login NO!!!";
    }
    res.send(result);
});

app.listen(3000, () => {
    console.log("-------------------------");
    console.log("3000번 포트 서버 시작됨.");
    console.log("-------------------------");
});