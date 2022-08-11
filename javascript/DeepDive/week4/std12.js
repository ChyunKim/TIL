// this

// 객체 리터럴의 메서드 내부에서의 this는 메서드를 호출한 객체, 즉 circle을 가리킴
const circle = {
    radius : 5,
    getDiameter () {
        return 2 * this.radius;
    }
}

console.log(circle.getDiameter());                      // 10


// 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킴
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getDiameter = function () {
    return 2 * this.radius;
}

const circle1 = new Circle(5);
console.log(circle.getDiameter());                      // 10

// 자바스크립트에서의 this는 함수가 호출되는 방식에 따라 this 가 바인딩 될 값, this 바인딩이 동적으로 결정
// 전역에서 this는 전역객체 window 가리킴

console.log(this);

function squara(num) {
    console.log(this);                                  // window
    return num*num;
}

squara(2);

const person = {
    name : 'Lee',
    getName() {

        // 메서드 내부에서 this는 메서드 호출한 객체 가리킴
        console.log(this);                              // {name : 'Lee', getName : f}
        return this.name;
    }
}

console.log(person.getName());                          // Lee

function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스 가리킴
    console.log(this);                                  // Person {name : Lee}
}

const p = new Person('Lee');


// 함수 호출 방식과 this 바인딩

const foo = function () {
    console.dir(this)
}

foo();                          // window

const obj = {foo};
obj.foo();                      // obj


// 생성자 함수로 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스 가리킴
new foo();                      // foo {}

const bar = {name : 'bar'}

foo.call(bar);                  // bar
foo.apply(bar);                 // bar
foo.bind(bar)();                // bar


// 일반 함수 호출
// 기본적으로 함수 this는 전역 객체 바인딩

function foo() {
    console.log(this)                              // window
    function bar() {
        console.log(this)                          // window
    }
    bar()
}
foo();


var value = 1;

const obj1 = {
    value : 100,
    foo() {
        console.log(this);                          // {value:100, foo :f}            
        console.log(this.value)                     // 100
        
        function bar() {
            console.log(this)                       // window
            console.log(this.value)                 // 1
        }
        // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩
        bar();
    }
}
obj1.foo();


var value = 1;
const obj2 = {
    value : 100,
    foo() {
        console.log(this)                           // {value: 100, foo: f}
    
        setTimeout(function () {
            console.log(this)                       // window
            console.log(this.value)                 // 1
        })
    }
}

obj2.foo();
// 모든 함수(중첩함수, 콜백함수) 내부의 this 에는 전역 객체 바인딩

var value = 1;
const obj3 = {
    value : 100,
    foo() {
        console.log(this)                           // {value: 100, foo: f}
    
        // this 명시적으로 바인딩
        setTimeout(function () {
            console.log(this.value)                 // 100
        }.bind(this), 100)
    }
}

obj3.foo();


// 화살표 함수를 사용한 this 바인딩
// 화살표 함수 내부의 this는 상위 스코프의 this를 가리킴

var value = 1;

const obj4 = {
    value : 100,
    foo() {
        setTimeout(()=>console.loe(this.value),100)                 // 100
    }
}

obj4.foo();
