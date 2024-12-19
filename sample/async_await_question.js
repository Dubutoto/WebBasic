// process2 함수 정의
async function process2(name, age) {
    // Promise 사용
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name}의 내년 나이는 ${age + 1}살이다.`);
        }, 1000); //1초 대기
    });

    console.log(result);
}

process2("홍길동", 10);