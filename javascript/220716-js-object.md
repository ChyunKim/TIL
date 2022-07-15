# 객체
자바스크립트는 객체기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 모든 것은 객체라고 할 수 있습니다.

원시형 값을 제외한 함수, 배열, 정규 표현식 등은 모두 객체입니다.

원시형은 단 하나의 값만을 나타내지만 객체(참조형)은 다양한 값을 하나의 단위로 구성한 복합적인 자료구조입니다.

## 객체 구성

```javascript
let user = {
	name : 'kim',
    	age : 20,
}
```

 - 객체는 0개 이상의 프로퍼티로 구성된 집합
 - 객체는 key-value 쌍을 저장하는 자료형
 - value 값이 함수인 경우 해당 프로퍼티를 메소드라고 지칭
 
```javascript
let user = {
	name : {
         	name1 : 'kim',
         	name2 : 'lee',
    }
}
```
위와 같이 객체안의 객체 생성도 가능합니다.

객체 프로퍼티 접근시 ```user.name``` ,```user.age```, ```user.name.name1```와 같은 방식으로 접근이 가능합니다.

```javascript
let user = {
	name : 'kim',
  	age : function() {...},
}
```

위와 같이 value 값이 함수로 올 수 도 있습니다.
이러한 경우 해당 프로퍼티는 메소드라고 말할 수 있습니다.


## 객체의 프로퍼티
프로퍼티를 선언하는 방법은 여러가지가 있습니다.

### 프로퍼티를 선언하는 방법

**선언방법1.**

```javascript
let user = {
	name : 'kim',
    	age : 20,
}
```

**선언방법2.**

```javascript
const myname = 'name'
let user = {
	[myname] : 'kim',
	['age'] : 20,
}
```

위와 같이 변수를 생성하여 선언도 가능합니다. 이러한 방식을 computed property라고 부릅니다.

선언방법1. 방식과 같이 ```.```을 통해 선언이 가능하며 ```[]```를 통해서도 선언이 가능합니다.

선언방법2.와 같은 방식은 변수를 사용하여 선언할 때 유용하게 사용이 가능합니다.

그럼 이렇게 선언된 프로퍼티에 저장된 value에 접근하는 방법에 대해서 알아봅시다.

### 프로퍼티 value 접근 문법

**접근방법1. 객체.프로퍼티명**

```javascript
let user = {
  	name : 'kim',
  	age : 20,
}
console.log(user.name);		// kim
```

위와 같이 ```user.name```을 통해 value에 접근이 가능합니다.

**접근방법2. 객체['프로퍼티명']**

```javascript
let user = {
  	name : 'kim',
  	age : 20,
}

console.log(user['name']);			//kim
const myname = 'name'

console.log(user[myname]);    		// kim

```
위와같이 ```[]```을 사용하여 접근이 가능합니다.
```[]``` 을 통한 접근은 변수를 사용하여 value 를 접근할 때 유용하게 활용할 수 있습니다.



