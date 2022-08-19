// 프로토타입 (prototype)

/* 
    자바스크립트의 모든 객체는 프로토타입 객체 보유
    자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결
    모든 객체는 부모 객체 프로토타입으로부터 프로퍼티와 메소드를 상속받음

    상속은 객체지향 프로그래밍의 핵심 개념 => 어떤 객체의 프로퍼티, 메소드를 다른 객체가 상속받아 그대로 사용하는 것
    자바스크립트는 프로토타입 기반으로 상속을 구현하여 불필요한 중복을 제거

    "자바스크립트의 모든 객체는 최소한 하나 이상의 다른 객체로부터 상속을 받으며, 이때 상속되는 정보를 제공하는 부모 객체가 프로토타입(prototype)"
*/

function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    }
}

const cir1 = new Circle(1);
const cir2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때 마다 동일한 동작을 하는 getArea 메소드를 중복 생성하고 모든 인스턴스가 중복 소유
console.log(cir1.getArea === cir2.getArea);             // false
// Circle 생성자 함수로 getArea 메소드는 각각 중복으로 생성되어 false
// 이러한 불필요한 중복을 제거하기 위해 getArea는 상속을 구현하여 공유하는 것이 바람직


// Cicle.prototype 사용
// Circle 생성자 함수가 생성한 모든 인스턴스는 자신의 프로토타입, 즉 부모 객체 역할을 하는 Circle.prototype의 모든 프로퍼티와 메서드를 상속 받음
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는 프로토타입(Circle.prototype)으로부터 getArea 메소드 상속 받음
// Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메소드 공유함
console.log(circle1.getArea === circle2.getArea);       // true

