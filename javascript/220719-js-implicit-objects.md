# 기본내장객체
**자바스크립트에서 기본적으로 제공하는 객체.**

내장 객체의 종류에는 많은 객체들이 존재하는데, 그 중 문자(String), 배열(Array) 객체들에 대해 간단히 알아보도록 하겠습니다.

## String
**문자열을 다루는데 사용되는 객체**
글자모양, 위치이동, 문자열을 다루는 등의 다양한 메소드를 제공합니다.

**문자열 선언**
```객체변수 = String(문자열);```

문자열은 String 전역 객체를 직접 사용하여 생성할 수 있습니다

**문자열 형태**
자바스크립트에서 문자열은 유사배열 형태로 참조가 가능합니다. 
length 프로퍼티를 가지고 있고 index를 사용하여 접근이 가능합니다.

**문자열 객체 생성**
```객체변수 = new String(문자열);```

new 연산자를 이용하여 String 객체 생성이 가능합니다. 생성시 함께 전달된 파라미터는 모두 문자열로 변환됩니다.

### String 객체 메소드

```javascript
let a = String('Hello, World!');

```

**1. includes()**
includes() 메서드는 대상 문자열에 파라미터로 전달받은 문자열이 포함되어 있는지 검사하여 Boolean 타입으로 반환합니다.

```javascript
	a.includes('o','W');		//true
```

**2. indexOf()**
indexOf() 메서드는 대상 문자열에서 파라미터로 전달받은 문자열을 검색하여 시작 위치의 index를 반환합니다. 일치하는 문자열이 없는 경우 -1을 반환합니다.

```javascript
	a.indexOf('l');			//2
	a.indexOf('x');			//-1
```

**3. lastIndexOf()**
lastIndexOf() 메서드는 대상 문자열에서 파라미터로 전달받은 문자열을 검색하여 마지막 위치의 index를 반환합니다. 일치하는 문자열이 없는 경우 -1을 반환합니다.

```javascript
	a.lastIndexOf('l');		//10
	a.lastIndexOf('x');		//-1
```

**4. replace()**
replace() 메서드는 대상 문자열에서 첫번째 파라미터로 전달받은 문자열을 두번째 파라미터로 대체하여 새로운 문자열로 반환합니다. 검색된 문자열이 여러개 존재할 경우엔 첫번째 문자열만 대체됩니다. 원본 문자열을 변경되지 않습니다.

```javascript
	a.replace('Hello', 'Hi')	//'Hi, World!'
```

**5. trim()**
trim() 메서드는 문자열 양 끝의 공백을 제거한 문자열을 반환합니다.


```javascript
	const b = String('  some string  ');
	b.trim();			//'some string'
	b.trimStart();			//'some string  '
	b.trimEnd();			//'  some string'
	b.trimLeft();			//'some string  '
	b.trimRight();			//'  some string'
```


## Array 
배열은 다양한 메서드를 제공합니다. 

모든 배열 인스턴스는 Array.prototype 으로부터 메소드와 프로퍼티를 상속받습니다.

이렇게 상속받은 Array.prototype 메소드는 크게 다음과 같이 구분할 수 있습니다.

### 원본 배열을 변경하는 메소드
**1. push()**
push() 메소드는 하나 이상의 요소를 배열의 가장 마지막에 추가합니다.
원본 배열은 추가한 요소의 수만큼 길이(length)가 늘어나게 되며, 요소를 성공적으로 추가하면 배열의 총 길이를 반환합니다.

```javascript
	const a = Array(1,2,3);
	a.length				// 3
	a.push(4);				// a.toString = '1,2,3,4'
	a.length;				// 4
```

**2. pop()**
pop() 메소드는 배열의 가장 마지막 요소를 제거하고, 그 제거된 요소를 반환합니다. pop() 메소드를 실행할 때마다 배열의 길이는 1씩 줄어들게 됩니다.

```javascript
	const a = Array(1,2,3,4);
	a.pop();				// a.toString = '1,2,3'
	a.length;				// 3
```

**3. shift()**
shift() 메소드는 pop() 메소드와는 달리 배열의 가장 마지막 요소가 아닌 첫 요소를 제거하고, 그 제거된 요소를 반환합니다. pop() 메소드와 같이 실행할 떄마다 배열의 길이가 1씩 줄어들게 됩니다.

```javascript
	const a = Array(1,2,3);
	a.shift();				// a.toString = '2,3'
	a.length;				// 2
```

**4. unshift()**
unshift() 메소드는 하나 이상의 요소를 배열의 가장 앞에 추가합니다.
원본 배열은 추가한 요소의 수만큼 길이(length)가 늘어나게 되며, 요소를 성공적으로 추가하면 배열의 총 길이를 반환합니다.

```javascript
	const a = Array(1,2,3);
	a.unshift('0');				// a.toString = '0,1,2,3'
	a.length;				// 4
```

**5. reverse()**
reverse() 메소드는 배열 요소의 순서를 전부 반대로 교체합니다.

```javascript
	const a = Array(1,2,3);
	a.reverse();				// a.toString = '3,2,1'
```

**6. splice()**
splice() 메소드는 기존의 배열 요소를 제거하거나 새로운 배열 요소를 추가하여 배열의 내용을 변경합니다.

첫 번째 인수는 새로운 요소가 삽입될 위치의 인덱스이며, 두 번째 인수는 제거할 요소의 개수입니다.

```javascript
	const a = Array(1,2,3,'kim','lee');
	a.splice(1,2);				
	// index 1번째 요소부터 2개 삭제
	// a.toString = '1,kim,lee'
	
	a.splice(1,1,'park');
	// index 1번째 요소부터 1개를 'park'를 변경
	// a.toString = '1,park,lee'
```

### 원본 배열을 참조만 하는 메소드

**1. concat()**
concat() 메소드는 해당 배열의 뒤에 인수로 전달받은 배열을 합쳐서 만든 새로운 배열을 반환합니다.

```javascript
	const a = Array(1,2,3);
	a.concat(Array(5,6,7));
```

**2. slice()**
slice() 메소드는 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 모든 배열 요소를 추출하여 새로운 배열을 반환합니다.

```javascript
	const a = [1,2,3,'kim','lee'];
	a.slice(2,5);				
	// index 2번째 요소부터 index 4번째 앞까지 새로운 요소로 만듬
	// [3, 'kim]
	a.slice(3);				
	// index 3번째 요소부터 모두 추출
	// ['kim', 'lee']
```


