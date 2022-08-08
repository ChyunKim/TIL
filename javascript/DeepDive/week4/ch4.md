# 콜백 함수
콜백함수란 다른 코드의 인자로 넘겨주는 함수, 콜백 함수를 넘겨받은 코드는 콜백함수를 필요에 따라 적절한 시점에 실행<br>

## 제어권<br>
콜백함수는 다른코드(함수 또는 메서드)에게 인자로 넘겨줌으로써 그 제어권도 함께 위임한 함수<br>
콜백함수를 위임받은 코드는 자체적인 내부 로직에 의해 이 콜백함수를 적절한 시점에 실행<br>

```javascript
var count = 0;
var timer = setInterval(() => {
    console.log(count);
    if(++count > 4) clearInterval(timer);
}, 300);
```

이 코드를 실행하면 콘솔창에는 0.3초에 한번씩 숫자가 0부터 1씩 증가하며 출력되다가 4가 출력된 이후 종료<br>
```setInterval``` 에 첫번째 인자로서 함수를 넘겨주자 제어권을 넘겨받아 스스로의 판단에 따라 적절한 시점에 익며 함수를 실행<br>
이처럼 콜백함수의 제어권을 념겨받은 코드는 콜백함수 호출 시점에 대한 제어권을 가짐<br><br>

## 콜백함수

### (1) map() 메서드<br>
map() 메서드는 매서드의 대상이 되는 배열의 모든 요소들을 하나씩 꺼내여 콜백 함수를 반복 호출하고 콜백 함수의 실행 결과들을 모아 새로운 배열을 반환<br>

```javascript
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

map() 메서드는 첫번째 인자로 콜백함수를 받고, 생략가능한 두번째 인자로 콜백함수 내부에서 this로 인식할 대상을 특정할 수 있음 <br>
- currentValue : 현재 처리할 요소
- index : 현재 처리한 요소의 인덱스
- map() 을 호출한 배열
- thisArg : 콜백함수를 실행할 때 this로 사용되는 값

```javascript
var newArr = [10,20,30].map(function(currentValue, index){
    console.log(currentValue, index)
    return currentValue + 5;
});

console.log(newArr);   

// 10 0
// 20 1
// 30 2
// [15,25,35]
```
map() 메서드의 인자의 순서는 정해져 있기 때문에 어떠한 인자명이든 정해진 위치에 따라 값이 부여됨 <br>

```javascript
var newArr2 = [10,20,30].map(function(index, currentValue){
    console.log(index, currentValue)
    return currentValue + 5;
});

console.log(newArr2);   

// 10 0
// 20 1
// 30 2
// [5,6,7]
```

따라서 인자의 이름과 상관없이 위치에 따라 값이 부여되므로 결과는 같은 값이 나오는걸 볼 수 있음<br><br>

this에 대해 다룰때, 콜백함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조한다는 구절을 확인할 수 있음<br>
별도의 this를 지정하는 방식 및 제어권에 대해 map() 메서드 직접 구현<br>

```javascript
Array.prototype.map = function (callback, thisArg) {
    var mappedArr = [];
    for(var i = 0; i < this.length; i++) {
        var mappedValue = callback.call(thisArg || window, this[i], i, this)
        mappedArr[i] = mappedValue
    }
    return mappedArr;
}
```
위의 메서드 구현의 핵심은 call/apply 메서드에 있음<br>
this에는 thisArg 값이 있을 경우에 그값, 없을 경우에는 전역객체를 지정<br>
위와 같이 thisArg에 값을 넘겨주면 this 가 될 대상을 명시적으로 바인딩 하기 때문에 this 에 다른 값이 담길 수 있음 <br>
첫번째 인자에는 메서드의 this가 배열을 가리킬 것이므로 배열 i 번째 요소값을 두번째 인자에는 i 값을, 세번째 인자에는 배열자체를 지정해 호출<br><br>

아래 예제코드를 통해 thisArg 를 주었을때와 아닐때 확인<br>

```javascript
class user {
    constructor() {
        this.name = 'kim',
        this.age  = 22,
        this.favorite = ['soccer', 'music'];
    };
    printThis() {
        console.log(this);
    };
 
    printfavorite() {
        this.favorite.map(this.printThis);
    };
}

const obj = new user();
obj.printThis();                                                    // user {name: 'kim', age: 22, favorite: Array(2)}
obj.printfavorite();                                                // undefined
```
위와 같이 map 함수에 this를 지정해주지 않게 되면 콜백함수도 함수이므로 기본적으로 this는 전역객체를 참조하므로, 전역객체에 printThis가 undefined가 출력됨<br>
아래와 같이 this를 지정시 다른 결과가 출력됨을 확인할 수 있음 <br>

```javascript
class user {
    constructor() {
        this.name = 'kim',
        this.age  = 22,
        this.favorite = ['soccer', 'music'];
    };
    printThis() {
        console.log(this);
    };
 
    printfavorite() {
        this.favorite.map(this.printThis,this);
        this.favorite.map(this.printThis, this.favorite)
    };
}

const obj = new user();
obj.printThis();                                                    // user {name: 'kim', age: 22, favorite: Array(2)}
obj.printfavorite();                                                
```

위와 같이 thisArg를 직접 지정해주므로써 전역을 가리키는 this를 별도로 지정 가능 <br><br>

### (2) filter() 메서드<br>

filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환<br>
테스트를 통과한 요소로 이루어진 새로운 배열, 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환함<br><br>

### (3) find() 메서드<br>
find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환, 그런 요소가 없다면 undefined 반환 <br>







