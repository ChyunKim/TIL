## 변수선언
- var : 중복 선언, 재할당 가능
- let : 중복 선언 불가능, 재할당 가능
- const : 중복 선언, 재할당 불가능

## 스코프 (Scope)
스코프란 유효한 참조 범위를 말합니다.
예로, 함수 내부에서 선언된 변수는 함수 내부에서만 참조가 가능합니다.

자바스크립트는 변수의 선언 방식마다 스코프가 다릅니다.

### 함수 레벨 스코프 (function-level scope)
var로 선언된 변수는 함수레벨 스코프로 함수 내부에 선언된 변수만 지역변수로 한정합니다.

```javascript
function sum() {
	var a = 10;
  	console.log(a+10);  
}

sum();
console.log(a);    //ReferenceError: a is not defined
```

sum 함수 내부에서 선언된 a 변수는 함수내부에서만 참조가 가능합니다.
외부에서 참조시 에러가 발행하게 됩니다.

하지만, 함수를 제외한 영역에서 var로 선언한 변수는 전역변수로 취급됩니다.

```javascript
if(true){
	var a = 10;
  	console.log(a);		//10
}

console.log(a);			//10
```

따라서 if문 외부에서도 어디서나 a 변수가 참조될 수 있습니다.

### 블록 레벨 스코프 (block-level scope)
let, const는 블록에서 선언된 변수도 모두 지역변수로 취급됩니다.

```javascript
if(true){
	let a = 10;
  	console.log(a);		//10
}

console.log(a);			//ReferenceError: a is not defined
```

var로 선언된 변수와 다르게 let으로 선언된 변수는 블록 외부에서 참조되지 않음을 알 수 있습니다.




