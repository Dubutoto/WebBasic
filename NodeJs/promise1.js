const p = new Promise((success, fail) => {
    //setTimeout(시간지나면 실행할 함수, 몇초인지);
    //setTimeout(() => "ok", 2000);
    setTimeout(() => {
        let num = Math.random(); //0~1
        //실패조건 0.8크면 실패
        if (num > 0.8) {
            fail("생성된 숫자가 0.8이상이라서 실패야.." + num);
            //catch로 넘어감.!
        }
        //이 조건이 아니면 then으로 랜덤한 값을 보내자.!
        success(num);
        //then 으로 넘어감.
    }, 2000);
});

p.then((x) => console.log("성공 전달받은 값>> " + x))
.catch((e) => console.log("에러 정보>> " + e));

console.log("프라미스 객체 생성됨.!!!!");