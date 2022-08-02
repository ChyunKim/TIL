// 내장 객체 (built-in object)
// 자바스크립트는 Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/set 등 40개의 표준 내장객체 제공
// Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체

// String 생성자 함수에 의한 String 객체 생성 
const strObj = new String('lee');                       // String {'lee'}
console.log(typeof strObj);                             // object

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);                         // Number {123}
console.log(typeof numObj);                             // object

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);                       // Boolean {true}
console.log(typeof boolObj);                             // object

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x')