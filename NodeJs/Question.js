function sumNumbers(...numbers) { 
    const sum = numbers.reduce((total, num) => total + num, 0); // 모든 숫자 더하기
    console.log(`숫자들의 합은 ${sum}입니다.`);
}


sumNumbers(10, 20, 30);
sumNumbers(5, 15);

function printInfo(name, age, ...hobbies) { 
    console.log(`이름: ${name}, 나이: ${age}`);
    if (hobbies.length > 0) {
        console.log(`취미: ${hobbies.join(", ")}`);
    } else {
        console.log("취미: 정보 없음");
    }
}

printInfo("이영희", 25, "독서", "요가", "영화 감상");
printInfo("김철수", 30);

//printInfo();
//sumNumbers();
