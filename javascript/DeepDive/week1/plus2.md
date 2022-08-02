# getter / setter
객체 프로퍼티는 두종료로 데이터 프로퍼티와 접근자 프로퍼티로 나뉘며 접근자 프로퍼티의 본질은 함수로써 획득(get) 하고 설정(set)하는 역할을 담당

## getter / setter 선언
접근자 프로퍼티는 getter 와 setter 메소드로 표현되며 객체 리터럴 안에서 get과 set을 나눌수 있음 <br>

```javascript
let obj = {
    get propName() {
        // getter, obj.propName을 실행할 때 실행되는 코드
    },
    ser propName(value) {
        // setter, obj.propName = value를 실핼할 때 실행되는 코드
    }
}
```

**getter와 setter 사용 예시**

```javascript
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

user.fullName = "Alice Cooper";

```
위와 같이 fullName이라는 getter와 getter 메소드를 구현할 수 있으며 객체엔 fullName 이라는 가상의 프로퍼티가 생김


그렇다면 getter 메소드만 구현시 어떤 문제가 발생할까?

```javascript
let user = {
    firstName: 'kim',
    lastName: 'ch',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

user.fullName = "Test"; // Error

```
getter 메소드만 구현되어 있기 때문에 ```user.fullName```을 사용해 값을 할당하려고 하면 에러가 발생<br>

## getter / setter 활용

**1. 프로퍼티의 값을 원하는대로 통제 가능**

```javascript
let user = {
    get name() {
           return this._name;
    },
    set name(value) {
        if(value.length < 2) {
            alert ('입력한 이름이 너무 짧습니다. 2글자 이상 입력하세요.')
            return;
        }
        this._name = value;
    }
}

user.name = 'l'                         // setter if문에 의해 alert창 
```

**2. 호환성을 위해 사용**

아래와 같이 ```name```과 ```age```를 사용해서 사용자를 나타내는 객체 구현
```javascript

function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User("John", 25);

alert( john.age ); // 25
```
요구사항이 바뀌어 ```age``` 대신 ```birthday```를 저장해야한다면?

```javascript
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let kim = new User("kim", new Date(1995, 10, 10));
```

기존 코드 중 프로퍼티 age를 사용하고 있는 코드 모두 수정해야 함

```javascript

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age는 현재 날짜와 생일을 기준으로 계산됩니다.
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday 사용 가능
alert( john.age );      // age 사용 가능

```

위와 같이 getter를 이용하여 ```age```와 ```birthday``` 모두 사용이 가능함
