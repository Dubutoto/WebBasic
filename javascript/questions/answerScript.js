// 문제 1: 숫자를 두 배로 만들기
document.getElementById("doubleBtn").addEventListener("click", () => {
    let inputElement = document.getElementById("numberInput");
    let inputValue = inputElement.value;

    if (inputValue) {
        let number = Number(inputValue);
        if (!isNaN(number)) {
            alert("두 배 값: " + (number * 2));
        } else {
            alert("숫자를 입력하세요.");
        }
    } else {
        alert("값을 입력하세요.");
    }
});

// 문제 2: 텍스트 처리
document.getElementById("processBtn").addEventListener("click", () => {
    let inputElement = document.getElementById("textInput");
    let inputValue = inputElement.value;

    let outputUppercase = document.getElementById("outputUppercase");
    let outputLength = document.getElementById("outputLength");

    if (inputValue) {
        let upperText = inputValue.toUpperCase();
        let textLength = inputValue.length;

        outputUppercase.textContent = "대문자: " + upperText;
        outputLength.textContent = "길이: " + textLength;
    } else {
        outputUppercase.textContent = "문장을 입력하세요";
        outputLength.textContent = "";
    }
});

// 문제 3: 배경색 선택
document.getElementById('bgColorSubmit').addEventListener('click', () => {
    const selectedColor = document.querySelector('input[name="bgColor"]:checked');
    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor.value;
    } else {
        alert("색상을 선택하세요");
    }
});

// 문제 4: 체크박스 확인
document.getElementById("submitTerms").addEventListener("click", () => {
    let checkbox = document.getElementById("agreeTerms");

    if (checkbox.checked) {
        alert("확인 되었습니다.");
    } else {
        alert("약관에 동의는 필수선택 입니다.");
    }
});
