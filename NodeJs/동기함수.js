const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8");
fs.writeFileSync("text-1.txt", data);
console.log("동기 작업 완료!");

console.log("동기 먼저 실행하고 나서 다른 코드 실행 ...");
console.log("동기므로 이 작업은 기다려야함....");
