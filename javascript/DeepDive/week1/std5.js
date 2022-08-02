// 객체 (Object)
// 객체 리터럴
var person = {
    name: 'Lee',
    age: 20
};
// Key-value 쌍을 저장하는 자료형

var person = {
    name : 'lee',
    sayHello : function() {
        console.log('Hello!')
    }
    // value가 함수인 경우 해당 프로퍼티를 메소드라고 부름   
    // 자바스크립트 함수는 모두 일급객체 이므로 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다.

    /*
        일급객체 조건
        1.변수에 할당할 수 있다
        2.다른 함수를 인자로 전달받는다.
        3.다른 함수의 결과로서 리턴될 수 있다.
    */
}

// 객체 안의 객체 선언 가능
const username = {
	name : {
         name1 : 'kim',
         name2 : 'lee',
    }
}


// 다음 각 동작을 한 줄 씩 코드로 작성해보세요.
/*
    빈 객체 user 를 만듭니다.
    user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
    user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
    name의 값을 Pate로 수정하세요.
*/

const user = {};            // 빈객체 user 생성
user.name = 'John'          // name 프로퍼티 추가
user.surname = 'Smith'      // surname 프로퍼티 추가
user.name = 'Pate'          // name 값 변경 



// 객체에 할당한 변수를 참조하면 메모리에 저장되어 있는 참조값을 통해 실제 객체에 접근
// 객체를 가리키는 변수를 다른변수에 할당하면 원본의 참조 값이 복사되어 전달 = 참조에 의한 전달
var person = {
    name: 'Lee'
}
// 참조 값을 복사
var copy = person;


// 얇은 복사와 깊은복사
// 객체를 프로퍼티 값으로 갖는 객체의 경우 얇은 복사는 한 단계 까지만 복사하는 것을 말하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사






