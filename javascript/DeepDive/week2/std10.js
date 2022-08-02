// 일급객체 (first-class citizen)
/*
    일급객체 조건
    1. 무명의 리터럴로 생성가능 => 런타임에 생성 가능
    2. 변수나 자료구조(객체, 배열)등에 저장 가능
    3. 함수의 매개변수에 전달 가능
    4. 함수의 반환값으로 사용 가능
*/

// 1. 함수는 무명의 리터럴로 생성 가능
// 2. 함수는 변수에 저장 가능
// 런타임 (할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당
const increase = function (num) {
    return ++num;
}

const decrease = function (num) {
    return --num;
}

// 2. 함수 객체에 저장 가능
const axus = {increase, decrease}

// 3. 함수는 매개변수에게 함수를 전달 가능
// 4. 함수의 반환값으로 사용 가능
function makeCounter(aux) {
    let num = 0;

    return function() {
        num = aux(num);
        return num;
    }
}
// 3. 함수는 매개변수에 함수 전달 가능 
const increaser = makeCounter(axus.increase);
console.log(increaser());                    // 1
console.log(increaser());                    // 2

const decreaser = makeCounter(axus.decrease);
console.log(decreaser());                    // -1
console.log(decreaser());                    // -2


// 함수 객체가 기본적으로 가지는 프로퍼티
// arguments, caller, length, name, prototype

// arguments 프로퍼티
// 함수의 arguements 프로퍼티 값은 arguements 객체
// arguments 객체는 함수 호출시 전달되 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체 => 함수 내부에서 지역변수 처럼 사용됨 => 외부에서 참조 불가

function multi (a, b) {
    console.log(arguments);
    return a*b;
}

console.log(multi());                       // NaN
console.log(multi(1));                      // NaN
console.log(multi(1,2));                    // 2
console.log(multi(1,2,3));                  // 2

// 자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않음 => 따라서 매개변수 개수만큼 인수 전달하지 않아도 에러 발생 안함
// 선언된 매개변수의 개수보다 인수를 많이 전달된 경우 초과된 인수는 무시됨 => arguments 객체의 프로퍼티로 보관

// arguments 객체는 유사배열형태로 length 프로퍼티를 가짐
function sum() {
    let result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log(sum());                         // 0
console.log(sum(1,2));                      // 3
console.log(sum(1,3,3));                    // 7

// arguments 프로퍼티는 유사배열 객체이므로 length 프로퍼티는 지원하지만 배열 메소드를 사용할 경우 에러 발생

// lenght 프로퍼티
// 함수 객체의 length 프로퍼티는 함수 정의할때 선언한 매개변수 개수 가르킴
function foo() {}
console.log(foo.length);                    // 0

function bar(a) {
    return a;
}
console.log(bar.length);                    // 1


// name 프로퍼티
// name 프로퍼티는 함수 이름
// ES5 에서는 name 프로퍼티는 빈문자열을 값으로 갖음, ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖음

// 1. 기명함수일때
var nameFunc = function foo() {};
console.log(nameFunc.name);                 // foo

// 2. 익명함수일때
var anonyFunc = function() {};
console.log(anonyFunc.name);                // anonyFunc => ES5 에서는 빈 문자열을 갖음


// __proto__ 접근자 프로퍼티
// 모든 객체는 [[prototype]] 내부 슬롯을 갖음 => 내부슬롯에 직접 접근할 수 없으며 __proto__ 접근자 프로퍼티를 통해 간접적으로 프로토타입 객체 접근

// prototype 프로퍼티
// prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수객체 즉, constructor 만이 소유하는 프로퍼티


// 프로토타입 객체
// 객체간 상속을 구현하기 위해 사용

