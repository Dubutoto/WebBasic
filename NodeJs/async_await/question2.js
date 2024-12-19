async function process(a, b) {
    const result = await new Promise((success) => {
        let random = Math.floor(Math.random() * 100) + 1; // 1 ~ 100 사이의 랜덤 값 생성
        let sum = random + b; // 랜덤 값 + 입력받은 값
        console.log(`랜덤 값: ${random}, 입력값: ${b}`); // 생성된 랜덤 값과 입력값 출력
        success(sum);
    });
    console.log(`결과: ${result}`); // 최종 결과 출력
}

process(0, 100); // 첫 번째 값은 의미 없으므로 0으로 입력
