const fs = require("fs");

let files = fs.readdirSync("./"); //10000개
console.log(files);

fs.readFile("sample.txt", "utf-8", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
    
});

console.log("나는 언제 실행되냐......");
console.log("나도 언제 실행되냐......");
//1000줄 즈음.