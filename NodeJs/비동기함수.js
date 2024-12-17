const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    fs.writeFile("text-1.txt", data, (err) => {
        if (err) throw err;
        console.log("비동기 작업 완료!");
    });
});

console.log("비동기 먼저 실행할 수 있음. ...");
console.log("비동기므로 이 작업은 먼저 실행됨....");
