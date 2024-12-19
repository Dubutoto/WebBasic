//console.log() 출력에서 타입별 색구분을 위해 + 대신 , 사용했습니다

// 1. 
const array1 = [10, 20, 30, 40];
const sum = array1.reduce((acc, curr) => acc + curr, 0);
console.log("1. 배열의 합:" , sum); 

// acc: 이전 결과 계산값, 초기에는 초깃값 
// curr: 현재 값
// acc + curr:  sum 

// 2. 
const array2 = [5, 12, 8, 130, 44];
const max = Math.max(...array2);
console.log("2. 가장 큰 값:" , max); 

// 3. 
const array3 = [1, 2, 3, 4, 5];
const includesThree = array3.includes(3);
console.log("3. 숫자 3 포함 여부:" , includesThree); 

// 4. 
const array4 = [1, 2, 3, 4, 5];
const filteredArray = array4.filter(num => num !== 3);
console.log("4. 숫자 3 제거:" , filteredArray); 

// 5. 
const array5 = [30, 10, 20, 50, 40];
const sortedArray = array5.sort((a, b) => a - b);
console.log("5. 오름차순 정렬:" , sortedArray); 
//내림 차순 정렬은 b - a
//sort 함수는 기본적으로 문자열로 비교하기 때문에 comparator 제시 해야함.

// 6. 
const array6 = ["Apple", "Banana", "Cherry"];
const joinedString = array6.join(", ");
console.log("6. 배열을 문자열로 변환:", joinedString); 

// 7. 
const array7 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array7)];
console.log("7. 중복 제거된 배열:" , uniqueArray); 

// 8. 
const array8 = [10, 15, 20, 25, 30];
const evenNumbers = array8.filter(num => num % 2 === 0);
console.log("8. 짝수만 필터링된 배열:" , evenNumbers); 

// 9. 
const array9 = [2, 3, 4];
const squaredArray = array9.map(num => num ** 2);
console.log("9. 각 요소의 제곱 배열:" , squaredArray); 