// 함수 (Function)
// 함수는 자바스크립트의 핵심 개념인 스코프, 실행 컨텍스트, 클로저, 생성자 함수에 의한 객체생성, 메서드, this, 프로토타입, 모듈화 등 깊은 관련이 있음

// f(x,y) = x + y 를 함수로 나타내면
function add (a,b) {
    return a + b;
}
// 함수 호출
let result = add(2,5);                   
console.log(result);                // 7

// 함수 리터럴

/* 
    리터럴이란 데이터(값) 그 자체를 뜻함 => 즉, 변수에 넣는 변하지 않는 데이터를 의미
    리터럴표기법이란, 변수를 선언함과 동시에 그 값을 지정해주는 표기법을 말한다.
    함수 또한 객체 타입의 값. 따라서 숫자나 객체 리터럴 처럼 함수도 리터럴로 생성 가능
*/
var f = function plus(a ,b) {
    return a + b;
}

// 함수 정의 4가지 방법
// 함수선언문, 함수표현식, function 생성자함수, 화살표함수

// 함수선언문
function add(a, b) {
    return a + b;
}
console.log(add(2,5))               //  7
// 함수 선언문은 함수 리터럴과 형태가 동일하나, 함수 리터럴과 다르게 함수 이름을 생략할 수 없다.

// 함수표현식
// 함수는 일급객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
// 이러한 함수 정의 방식이 함수 표현식
var add = function(a ,b) {
    return a + b;
}
console.log(add(2,5))               // 7

// 함수를 호출할 때는 함수 이름이 아닌 함숫 개체를가리키는 식별자를 사용해야함
var add = function foo(a, b) {
    return a+b;
}
console.log(add(2,5))               // 7
console.log(foo(2,5))               // ReferenceError : foo is not defined


/*
    함수 선언문과 함수 표현식의 호이스팅 차이
    함수 선언문으로 정의한 함수는 함수 선언 이전에 호출이 가능하지만, 함수 표현식으로 정의한 함수는 이전에 호출 불가
    즉, 함수 표현식은 호이스팅 안됨!!
*/

// function 생성자 함수
// function 생성자 함수를 생성하는 방식은 일반적이지 않고 바람직 하지 않음
// 일반 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작함
var add = new Function('x','y', 'return x+y');
console.log(add(2,5))               // 7


// 화살표 함수
// 화살표 함수는 항상 익명 함수로 정의

const plus = (a,b) => a + b;
console.log(plus(2,5))              // 7


// a, b 중 작은 값을 반환하는 함수 min(a,b)를 만들어보세요.
// 함수 선언문
function min(a,b) {
    return a < b ? a : b; 
}


// 함수 표현식
const min =  function(a,b) {
    return a < b ? a : b;
}

// 화살표함수
const m = (a,b) => a < b ? a : b; 


// 반환문
function multi(a, b) {
    return a * b;
    console.log('반환문 이후에는 실행되지 않음');
}
/*
    return 키워드를 사용해 반환한 이후에는 함수 몸체를 빠져나가므로 return 다음 문장이 실행되지 않고 무시됨
    return 뒤에 표현식이 없다면 undefined 반환
    반환문 생략시 undefined
*/


// 즉시실행함수 (IIEF)
// 즉시 실행 함수는 함수 이름이 없는 것이 일반적
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

// 즉시 실행 함수는 반드시 (...) 소괄호로 묶어줘야함
// 즉시 실햄 함수도 일반 함수처럼 값을 반환할 수 있음
var res = (function() {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(a *b);                  // 15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있음
res = (function(a,b) {
    return a * b;
}(2,3));

console.log(res);                   // 6


// 재귀함수
// 자기 자신을 호출하는 함수
function factorial(n) {
    if( n<= 1) return 1;
    return n * factorial(n-1);              // 자기자신 호출
}


// 고차함수
// 함수가 함수를 리턴하는 패턴

/* 
    add(1)(2);       3출력
    const add1 = add(1)
    add1(5);         6출력
*/

//위와 같이 출력하는 함수
function add (a) {
    return (b)=> {
        return a+b;
    }
}

// 콜백함수
/*
    함수의 매개변수는 아무 자료형이나 가능하다 => 즉 함수도 가능
    콜백함수 패턴은 고차함수 패턴 중 매개변수로 함수를 넘겨받아 호출하는 패턴
    이때, 넘겨받은 함수를 콜백함수라고 부름
*/

/*
    다음 함수를 작성해주세요.
    함수 이름 : checkBoolean

    매개변수
    1. boolean
    2. 함수1
    3. 함수2
    
    반환값 : 없음

    본문 : 1번 매개변수인 boolean 값이 true 면 
    2번째 매개변수로 받은 함수1 를 실행
    fasle면 3번째 매개변수로 받은 함수2 실행
*/

const checkBoolean = (bool, func1, func2) => {
    bool ? func1() : func2();
}

function truefunc1() {console.log('true!!')}
function falsefunc2() {console.log('false!!')}

checkBoolean(true, truefunc1, falsefunc2);
checkBoolean(false, truefunc1, falsefunc2);










