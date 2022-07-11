## 생성자 함수
생성자 함수란 new 키워드와 함께 쓰이는 함수입니다. 객체를 생성하기 위해서는 직접 객체를 반환해도 되지만, new 키워드를 사용하여 함수를 호출하게되면 return 문이 없어도 새로운 객체를 반환할 수 있습니다.

그리고 함수 에서 this를 사용하여 반환되는 객체의 초기 상태와 행위를 정의할 수 있습니다.

생성자 함수는 정의시 관례적으로 함수의 이름이 대문자로 시작합니다. 
이렇게 객체를 생성하는 역할을 하는 함수를 생성자 함수라고 합니다.

### 생성자 함수 선언

```javascript
// 생성자 함수
function User() {
 	this.name = 'Kim' 
  	this.age = 20
	this.address = 'korea'
}

// 객체 생성
const user = new User();

console.log(user);
```
 
위와 같은 생성자 함수 구현시 ```console.log``` 실행결과는 아래와 같이 나오게 됩니다.
``` User {name: 'Kim' ,age: 20, address: 'korea'}```

생성자 함수는 화살표 함수(Arrow Function)로 만들 수 없으며 오직, function 키워드를 사용해야 합니다.

```javascript
// 생성자 함수
function User(name,age,address) {
 	this.name = name; 
  	this.age = age;
	this.address = address;
}

// 객체 생성
const user = new User('Kim', 20, '서울');

console.log(user);
```

위와 같은 매개변수가 있는 생성자 함수 선언시 new 연산자를 사용하여 생성할때 매개변수를 넣어줘야 합니다.

여기서 this는 자기 자신으로 생성자 함수를 호출한 객체를 의미합니다.

### 생성자함수와 객체 리터럴
객체 리터럴을 활용해도 객체를 생성할 수 있습니다.
하지만 생성자 함수와 달리 객체 리터럴은 객체가 독립적으로 동작하지 않고 동일한 객체를 가리키게 됩니다.

코드로 예를 들어보겠습니다.
```javascript
const userInfo = {
 	name: 'Kim',
  	age: 20,
  	address: 'korea'
}

const userInfo2 = userInfo;
const userInfo3 = userInfo;

userInfo3.name = 'Hyun';

console.log('userInfo.name);
console.log('userInfo2.name);
console.log('userInfo3.name);            
```

위와 같이 객체를 각 변수에 복사하여 userInfo3.name을 변경하면 userInfo와 userInfo2의 name도 변경되게 됩니다.

따라서 이러한 문제가 발생하지 않도록 생성자 함수를 쓰게 됩니다.
생성자 함수는 동일한 프로퍼티를 가지는 객체를 생성할 수 있고 각 객체는 독립적으로 동작합니다.

### 객체 프로토타입
프로토타입은 자바스크립트에서 객체지향인 상속을 구현하기 위해서 사용되는 개념입니다. 자바스크립트에서 객체지향인 상속을 구현하기 위해서 사용되는 개념입니다. ES6에서 클래스가 도입되었지만 자바스크립트의 클래스는 함수이며 프로토타입을 기반으로 동작합니다.

프로토타입을 사용하여 생성자 함수로 생성된 객체의 프로퍼티와 함수를 추가할 수 있습니다.


## 마치며
생성자 함수와 객체 리터럴이 어떤것이 다른지 알 수 있는 시간이였습니다.


