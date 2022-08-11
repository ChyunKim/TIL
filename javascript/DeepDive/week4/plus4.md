# 반복문 비교
각 반복문 for in, for of, forEach, map 비교<br>

## for in 구문<br>
for in 반복문은 객체의 속성들을 반복하여 작업을 수행<br>
모든 객체에서 사용이 가능<br>
for in 구문은 key 값에는 접근이 가능하지만 value 값에는 접근이 불가능<br>

```javascript
var obj = {
	a:1,
  	b:2,
  	c:3
}

for (var prop in obj) {
  console.log(prop, obj[prop]);
}
//a 1
// b 2
// c 3
```
<br>

## for of 구문<br>
for of 구문은 반복 가능한 객체를 반복<br>
보통 배열을 사용할 때 많이 사용<br>

```javascript
const arr = ['a', 'b', 'c']

for(var value of arr) {
  console.log(value);			
}
```
<br>

## forEach vs map <br>
두개를 혼동하기 쉬워 정리 <br>
forEach 메서드는 단순히 반복문을 대체하기 위한 함수이고, map 메서드는 요소값을 다른 값으로 mapping한 새로운 배열을 생성하기 위한 고차함수<br>

결론은, forEach문은 반환값이 없지만 map 메서든는 새로운 배열을 생성하기 때문에 반환값을 리턴<br>

```javascript
const arr = [1,2,3];

arr.forEach(item => {
 	console.log(item);				
})

const value = arr.forEach(item => item*2)		

```

위와 같이 forEach문은 반환값이 없으므로 어떠한 변수에 값을 할당하려고 할때 undefined 가 반환<br>

```javascript
const arr = [1,2,3];

const value = arr.map(item => item*2)

```

위와 같이 forEach문과 map 메소드 사용은 비슷해 보이지만 반환값 전달에서 차이<br>
