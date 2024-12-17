const product= {
    name: "에너자이저",
    total_price: 5000,
    discount_price: 4700,
    one_price: 2350,
    arrive_date: "내일(수) 도착 보장",
    rate: 50,
    stack_money: 188,

    applyDiscount: function(){
        console.log(`${this.name}는 할인중입니다.
            총가격:${this.total_price}원 -> 할인가격: ${this.discount_price}원`
        );
    },

    printDetails: function(){
        console.log("상품 정보:");
        console.log(`이름: ${this.name}`);
        console.log(`총 가격: ${this.total_price}원`);
        console.log(`할인 가격: ${this.discount_price}원`);
        console.log(`개당 가격: ${this.one_price}원`);
        console.log(`도착 예정일 : ${this.arrive_date}`);
        console.log(`평점: ${this.rate}`);
        console.log(`적립금 : ${this.stack_money}원`);
    }
};

product.applyDiscount();
product.printDetails();