let name = "홍길동"; //string
let age = 20;
let email = "idpw@gmail.com"

let person = {
    name : name,
    age : age,
    email, email
};

let person2 = {
    name,
    age,
    email,
    eat : function(){
        console.log(this.name + "님 짜장면을 먹는다")
    },
    walk(){
        console.log(this.age + "세는 빨리 걸을 수 있다.");
        this.eat();
    }
};

console.log(person.name);
person2.walk();