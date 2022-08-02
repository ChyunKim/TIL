// 프로퍼티 (Property)
/*   
    자바스크립트 엔진은 프로퍼티를 생성할 떄 프로퍼티의 상태를 나타내는 프로터피 어트리뷰트를 기본값으로 자동 정의
    프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnpropertyDescriptor 메소드를 사용하여 간접적으로 확인가능
    Object.getOwnpropertyDescriptor 메소드는 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환 => 존재하지 않거나 상속받은 프로퍼티는 undefined
*/

let person = {
    name : 'lee'
};

// 프로퍼티 동적 생성
person.age = 20;

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체 반환
console.log(Object.getOwnPropertyDescriptors(person));

// 데이터 프로퍼티와 접근자 프로터피
// 프로터피는 데이터 프로퍼티와 접근자 프로퍼티로 구분
// Value, Writable, Enumerable, Configuurable => 데이터 프로퍼티 어트리뷰트 기본값
/*
    {
        name : {value: 'lee', writable: true, enumerabel: true, configurable: true},
        age : {value: 20, writable: true, enumerabel: true, configurable: true},
    }

*/

// 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티
// Get, Set, Enumerable, Configurable => 접근자 프로퍼티 어트리뷰트 기본값
// 접근자 함수는 getter / setter 함수라 부름

let user = {
    firstName: 'kim',
    lastName: 'ch',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    // setter 함수
    set fullName(name) {
        // 배열 디스트럭처링 할당
        [this.firstName, this.lastName] = name.split(' ');
    }

};

// 데이터 프로터피를 통한 프로퍼티 값 참조
console.log(person.firstName+ '' +person.lastName);         //kim ch

// 접근자 프로퍼티를 통한 프로퍼티 값 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 seter 함수 호출
person.fullName = 'park bb';
console.log(person);                                        // {firstName:'park', lastName: 'bb'}                                     


// 프로퍼티 정의
// 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나 기존 프로퍼티의 어트리뷰트를 재정의하는 것을 말함
// Object.defineProperty 메소드를 사용하여 프로퍼티의 어트리뷰르 정의
// Object.defineproprtied 메소드 사용시 여러 개의 프로퍼티를 한번의 정의 가능




