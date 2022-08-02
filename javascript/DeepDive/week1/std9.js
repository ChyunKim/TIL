// 생성자 함수(Constructor function)
// 생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 새성하는 함수, 생성자 함수에 의해 생성된 객체 = 인스턴스

/*
    Object 생성자 함수
    New 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환
    빈 객체를 생설한 이후 프로퍼티 또는 메소드를 추가하여 객체 완성 가능
*/

let person = new Object();

person.name = 'lee';
person.sayHello = function() {
    console.log('Hi! My name is '+ this.name);
}

console.log(person);                // {name: 'lee', sayHello: f}
person.sayHello();                  // Hi! My Nama is lee


// String 생성자 함수에 의한 String 객체 생성
let strObj = new String('lee');
console.log(typeof strObj);         // object 
console.log(strObj);                // String {'lee'}

// Nunber 생성자 함수에 의한 Number 객체 생성
let numObj = new Number(123);
console.log(typeof numObj);         // object 
console.log(numObj);                // Number {123}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
let boolObj = new Boolean(true);
console.log(typeof boolObj);        // object
console.log(boolObj);               // boolean {true} 

// Function 생성자 함수에 의한 Function 객체(함수) 생성
let func = new Function('x', 'return x*x');
console.log(typeof func);           // object
console.log(func);                  // f anomymous(x)

// Array 생성자 함수에 의한 Array 객체(배열) 생성
let arr = new Array(1,2,3);
console.log(typeof arr);           // object
console.log(arr);                  // [1,2,3]

// RegExp 생성자 함수에 의한 RegExp 객체(정규표현식) 생성
let regExp = new RegExp(ab+c/i);
console.log(typeof regExp);         // object
console.log(regExp);                // ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
let date = new Date()
console.log(typeof date);           // object
console.log(date);             

// 위와 같이 생성자 함수를 사용해 빈 객체를 생성할 수 있음

// 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있는 것이 생성자 함수 객체 생성 방식의 장정 
// 생성자 함수
function Circle(radius) {
    // 인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function() {
        return 2*this.radius;
    }
}

// 인스턴스 생성
let circle1 = new Circle(5);
let circle2 = new Circle(10);

console.log(circle1.getDiameter());   // 10
console.log(circle2.getDiameter());   // 20

// 생성자 함수의 인스턴스 생성과정
// 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)으로서 동작하여 인스턴스를 생성하는 것, 생성된 인스턴스를 초기화 하는 것
// 인스턴스를 생성하는 것은 필수! 생성된 인스턴스를 초기화 하는 것은 옵션!


// 인스턴스 생성과 this 바인딩

// 1. 암묵적인 this 반환
function Circle(radius) {
    // 암묵적으로 인스턴스가 생성되고 this에 바인딩
    console.log(this);              // Circle {}
    
    //this에 바인딩 되어 있는 인스턴스 초기화
    this.radius = radius;

    this.getDiameter = function() {
        return 2*this.radius;
    }
    // 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환
    // 만약 this 가 아닌 다른 객체를 명시적으로 반환하면 this 가 반환되지 못하고 return 문에 명시된 객체가 반환
}

// 인스턴스 생성 Circle 생성자 함수는 암묵적으로 this 반환
let circle = new Circle(1);
console.log(circle)                 // Circle {radius:1, getDiameter: f}


// 2. this 가 아닌 다른 객체를 명시적으로 반환할때
function Circle(radius) {
    
    this.radius = radius;

    this.getDiameter = function() {
        return 2*this.radius;
    }
    // 암묵적으로 this 반환
    // 명시적으로 객체 반환시 암묵적인 this 반환 무시
    return {};
}    

let circle_1 = new Circle(1);
console.log(circle_1)                 // {}



// 3. 원시값 반환시 : 원시값은 무시되고 암묵적으로 this 가 반환
function Circle(radius) {
    
    this.radius = radius;
    this.getDiameter = function() {
        return 2*this.radius;
    }
    // 암묵적으로 this 반환
    // 원시값 반환시 원시값 무시되고 this가 반환
    return 100;
}    

// 인스턴스 생성 Circle 생성자 함수는 암묵적으로 this 반환
let circle_2 = new Circle(1);
console.log(circle_2)                 // Circle {radius:1, getDiameter: f}


// 함수의 내부 메소드 [[call]] / [[construct]]
// 함수 객체는 constructor 일수 있고 non-constructor 일수 있음
// constructor : 함수 선어눈, 함수표현식, 클래스 (클래스도 함수)
// non-constructor : 화살표 함수, 메서드

function foo() {}
const bar = function() {};
// x의 값으로 할당된 것은 일반함수로 정의된 함수 => 메소드로 인정하지 않음
const baz = {
    x : function () {}
};

new foo();                          // foo {}
new bar();                          // bar {}
new baz.x()                         // x {}

const arrow = () => {};
new arrow();                        // TypeError : arrow is not a constructor

// 메서드 (축약표현만 메서드로 인정)
const obj = {
    a() {}
};

new obj.a();                        // TypeError : obj.a is not a constructor


// 일반함수와 생성자 함수에 특별한 형식적 차이는 없음
// 단, new 연산자와 함께 호출되는 함수는 non-constructor이 아닌 constructor

// 1. 생성자 함수로서 정의되지 않은 일반함수가 new 연산자와 호출시
// call이 아닌 constructor이 호출
function add(a,b){
    return a+b;
}

let inst = new add();
// 함수가 객체를 반환하지 않았으므로 반환문이 무시, 빈객체 반환
console.log(inst);                  // {}

function createUser(name, role) {
    return {name, role};
}

inst = new createUser('lee', 'admin');
// 함수가 객체를 반환했으므로 constructor메서드 호출
console.log(inst);                  // {name:'lee', role: 'admin'}

// 2. new 연산자 없이 생성자 함수를 호출시
// 내부메서드 constructor 이 아닌 call 메소드 호출
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2*this.radius;
    }
}

// new 연산자 없이 호출시 일반 함수로서 호출
let cir = Circle(5);             
console.log(cir);                   // undefined

// 일반함수 내부의 this는 전역객체 window
console.log(radius);                // 5
console.log(getDiameter());         // 10

// 일반함수로서 호출되었기 때문에 TypeError
cir.getDiameter();               // TypeError : Cannot read property 'getDiameter' of undefined



// new.target
// new.target은 this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역변수와 같이 사용되며 메타 프로퍼티라고 부름
// 함수 내부에서 new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인 가능

function Circle(radius){
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined
    if(!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스 반환
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function() {
        return 2*this.radius;
    }
}

// new 연산자 없이 함수를 호출하여도 new.target에 의해 생성자 함수로서 호출
let cir_1 = Circle(5);
console.log(cir_1.getDiameter());

