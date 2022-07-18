## 구조분해할당

구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

value를 변수로 만들때 유용하게 사용할 수 있습니다.
여러개의 value를 한번에 변수로 만들때 특히 유용합니다.



### 배열구조 분해

```javascript
let a = [1,2,3,4,5];

let [b,c] = a;
console.log(b);			//1			
console.log(c);			//2
```
객체 및 배열 리터럴 표현식을 사용하면 즉석에서 쉽게 데이터 뭉치를 만들 수 있습니다.

구조 분해 할당의 구문은 위와 비슷하지만, 대신 할당문의 좌변에서 사용하여, 원래 변수에서 어떤 값을 분해해 할당할지 정의합니다.


### 객체구조 분해

**기본할당**

```javascript
let user= {
  name: 'John',
  age : 20,
}
let {name,age} = user;
console.log(name, age);			//'John', 20
```

**새로운 변수 이름으로 할당**

```javascript
let user= {
  name: 'John',
  age : 20,
}

let {name:n, age:ag} = user;

console.log(n);				//'John'
console.log(ag);			// 20
```

**기본값 갖는 새로운 이름의 변수에 할당**

```javascript
let user= {
  name: 'John',
  age : 20,
}

let {name:n, age:ag = '1', c:cc ='cc' } =user;

console.log(n);				//'John'
console.log(ag);			// 20
console.log(c);				//'cc'

```
위와 같이 선언시 ```n, ag```는 객체의 값을 가져오며 ```c```는 객체의 값이 ```undefined``` 이므로 기본값으로 선언된 ```'cc'``` 가 출력됩니다.


