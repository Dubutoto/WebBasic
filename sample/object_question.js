// 1
const obj1 = {};
const isEmpty = Object.keys(obj1).length === 0;
console.log("1. 객체가 비어있는지 확인:", isEmpty); 

// 2
const obj2 = { name: "Alice", age: 25 };
const hasAgeKey = "age" in obj2;
console.log("2. 특정 키 'age'가 존재하는지 확인:", hasAgeKey); 

// Object.
// keys(): 키, values(): 값, entries(): 쌍.

// 3
const obj3 = { x: 10, y: 20, z: 30 };
const keysArray = Object.keys(obj3); // 객체의 모든 키를 배열로 변환.
console.log("3. 객체의 모든 키 배열로 변환:", keysArray); // 

// 4
const valuesArray = Object.values(obj3);
console.log("4. 객체의 모든 값 배열로 변환:", valuesArray); 

// 5
const entriesArray = Object.entries(obj3);
console.log("5. 객체를 [키, 값] 쌍의 배열로 변환:", entriesArray);

