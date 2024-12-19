const p = new Promise((resolve, reject) => {
    console.log("Starting Promise");
    resolve("Return after add Two numbers which are randomly created");
});

p.then((msg) => {
    console.log(`1 ==> ${msg}`);
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const sum = num1 + num2;
    return sum;
})

    .then((msg) => {
        console.log(`2 ==> ${msg}`);
        console.log("두 수를 랜덤하게 생성하여 곱한 값을 리턴");
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;

        // 두 수를 곱한 값을 계산
        const mul = num1 * num2;
        return `${msg},${mul}`;
    })
    .then((msg) => {
        console.log(`3 ==> ${msg}`);
        let result = msg.split(",");
        console.log(`두 수의 합은 ${result[0]}\n두 수의 곱은 ${result[1]}`);
    })
    .catch((error) => {
        console.log(`오류발생 ==> ${error}`);
    })
