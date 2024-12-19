const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
    //클라이언트가 서버로 요청을 할 때 어떻게 처리할지를 써줌
    console.log("클라이언트 요청 들어옴.");
    //console.log(req); 
    console.log(req.method); //요청, 삭제, 수정
    let method = req.method;
    let url = req.url;
    res.setHeader("Content-Type", "text/plain");
    // res.write("Hello NodeJS");
    // res.end(); //응답종료
    if(method == 'GET' && url == "/home"){
        res.statusCode = 200; //http header
        res.end("HOME page...!!"); //http body
    }else if (method == 'GET' && url == "/about") {
        res.statusCode = 200; //http header
        res.end("ABOUT page...!!"); //http body
    }else{
        res.statusCode = 404; //http header
        res.end("File Not Found...!!"); //http body
    }
       
});

server.listen(3000, () => {
    //3000번 포트로 서버가 시작되었을 때 처리할 내용
    console.log("3000번 포트 서버 시작됨.");
});
