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


## 콜백함수 내부 this에 다른 값 바인딩 <br>
this를 다른 변수에 담아 콜백 함수로 활용할 함수에서는 this 대신 그 변수를 사용하게 하고 이를 클로저로 만드는 방식이 있음<br>

```javascript
var obj1 = {
    name : 'obj1',
    func : function() {
        var self = this;
        return function() {
            console.log(self.name)
        }
    }
}

var callback = obj1.func();
setTimeout(callback, 1000);
```

위와 같이 self 변수에 this를 담고 익명 함수를 선언과 동시에 반환<br>
이 방식을 사용하기 보다 차라리 this를 사용하지 않고 쓰는 방법이 있음<br>

```javascript
var obj1 = {
    name :'obj1',
    func : function() {
        console.log(obj1.name)
    }
}
setTimeout(obj1.func1,1000);
```
위와 같이 this를 사용하지 않고 같은 결과를 출력가능<br>
하지만 작성한 함수를 this를 이용해 다양한 상황에서 재활용 할수 없음 <br>

따라서 bind 메서드를 이용하여 쉽게 this 지정 가능<br>

```javascript
var obj1 = {
    name : 'obj1',
    func : function() {
        console.log(this.name)
    }
}
setTimeout(obj1.func.bind(obj1),1000);

var obj2 = {name : 'obj2'}
setTimeout(obj1.func.bind(obj2),1500);
```

위와 같이 this 지정 가능<br><br>

## 콜백 지옥과 비동기 제어<br>
콜백 지옥은 콜백 함수를 익명항수로 전달하는 과정이 반복되어 코드의 들여쓰기 수준이 감당하기 힘들정도로 깊어지는 현상<br><br>
동기적인 코드는 현재 실행중인 코드가 완료된 후에 다음 코드를 실행하는 방식이며, <br>
비동기적인 코드는 현재 실행 중인 코드의 완료 여부와 무관하게 즉시 다음 코드로 넘어감<br>

웹 복잡도가 높아진 만큼 비동기적인 코드의 비중이 예전보다 높아졌으며 그와 동시에 콜백 지옥에 빠지기도 쉬워짐<br>

```javascript
setTimeout(function(name) {
    var coffeeList = name;
    console.log(coffeeList);

    setTimeout(function(name) {
        coffeeList += ',' +name;
        console.log(coffeeList);

        setTimeout(function(name){
            coffeeList += ',' + name;
            console.log(coffeeList);

            setTimeout(function(name){
                coffeeList += ',' + name;
                console.log(coffeeList)
            },500,'카페라떼')
        },500,'카페모카')
    },500,'아메리카노')
},500,'에스프레소')
```

0.5초 주기마다 커피 목록을 수집하고 출력<br>
위와 같은 방식은 가독성 문제와 콜백지옥에 빠질 수 있음<br>

아래와 같이 기명함수로 변환하여 콜백 지옥 해결 가능<br>

```javascript
var coffeeList = '';

var addEspresso = function (name) {
    coffeeList = name;
    console.log(coffeeList);
    setTimeout(addAmericano, 500, '아메리카노')
}

var addAmericano = function(name) {
    coffeeList += ',' + name;
    console.log(coffeeList);
    setTimeout(addMocha, 500, '카페모카')
}

var addMocha = function(name) {
    coffeeList += ',' + name;
    console.log(coffeeList);
    setTimeout(addLatte, 500, '카페라떼')
}

var addLatte = function(name) {
    coffeeList += ',' + name;
    console.log(coffeeList);
}

setTimeout(addEspresso, 500, '에스프레소')
```

위와 같은 바식은 코드의 가독성을 높아지며 함수 선언과 함수 호출만 구분 할 수 있다면 위에서부터 아래 순서대로 읽어내려가는 데 어려움 없음<br>
하지만 위와 같은 기명함수로 콜백 지옥을 해결시 코드명을 일일이 따라다녀야 하며 함수를 전부 변수에 할당해야하는 번거로움이 있음<br><br>

이런 비동기적인 일련의 작업을 동기적으로, 혹은 동기적인 것처럼 보이게끔<br>
promise, Generator, async/await 등으로 처리할 수 있음<br><br>

### (1) promise <br>

```javascript
new Promise(function (resolve) {
    setTimeout (function() {
        var name = '에스프레소'
        console.log(name)
        resolve(name)
    }, 500)
}).then(function(prevName){
    return new Promise(function(resolve){
        setTimeout(function() {
            var name = prevName + ', 아메리카노'
            console.log(name)
            resolve(name)
        }, 500)
    }).then(function (prevName){
        return new Promise(resolve) {
         setTimeout(function() {
            var name = prevName + ', 카페모카'
            console.log(name)
            resolve(name)
           }, 500)
        }
    }) .then(function (prevName){
        return new Promise(resolve) {
         setTimeout(function() {
            var name = prevName + ', 카페라떼'
            console.log(name)
            resolve(name)
           }, 500)
        }
    })
})
```

첫번째로 promise를 이용한 방식<br>
new 연산자와 함께 호출한 promise의 인자로 념겨주는 콜백 함수는 호출할 때 바로 실행되지만,<br>
그 내부의 resolve 함수 호출 구문이 있을 경우 둥중 하나가 실행되기 전까지는 (then) 또는 오류 구문으로 넘어가지 않음<br>

```javascript
var addCoffee = function(name) {
    return function (prevName) {
        return new Promise(function (resolve){
            setTimeout(function() {
                var newName = prevName ? (prevName + ',' + name) : name
                console.log(newName)
                resolve(newName)
            }, 500)
        })
    }
}

addCoffee('에스프레소')()
    .then(addCoffee('아메리카노'))
    .then(addCoffee('카페모카'))
    .then(addCoffee('카페라떼'))
```

위와 같이 표현 가능 <br><br>

### (2) Generator <br>

```javascript
var addCoffee = function(prevName, name) {
    setTimeout(function () {
        coffeMaker.next(prevName ? prevName + ',' + name : name)
    }, 500)
}

var coffeeGenerator = function* () {
    var espresso = yield addCoffe('', '에스프레소')
    console.log(espresso)
    var americano = yield addCoffe(espresso, '아메리카노')
    console.log(americano)
    var mocha = yield addCoffe(americano, '카페모카')
    console.log(mocha)
    var latte = yield addCoffe(mocha, '카페라떼')
    console.log(latte)
}

var coffeMaker = coffeeGenerator();
coffeMaker.next()
```

### (3) Async/await <br>

```javascript
var addCoffe = function(name) {
    return new Promise(function (resolve){
        setTimeout(function() {
            resolve(name)
        },500)
    })
}

var coffeMaker = async function() {
    var coffeeList = '';
    var _addCoffee = async function(name) {
        coffeeList += (coffeeList ? ',' : '') + await addCoffe(name)
        await _addCoffee('에스프레소')
        await _addCoffee('아메리카노')
        await _addCoffee('카페모카')
        await _addCoffee('카페라떼')

    }
}
coffeMaker();
```

## 정리 <br>

콜백함수는 다른 코드에 인자로 넘겨줌으로써 그 제어권도 함께 위임한 함수 <br>
제어권을 넘겨받은 코드는 다음과 같은 제어권을 가짐<br>
- 콜백함수를 호출하는 시점을 스스로 판단해서 실행
- 콜백함수를 호출할때 인자로 넘겨줄 값들 및 그 순서가 정해져 있음
- 콜백 함수의 this를 지정하지 않는경우 전역객체를 바라보면 임의로 this 지정시 bind 메서드 활용 가능
- 비동지 제어를 위해 콜백 함수를 사용하면 콜백 지옥에 빠지기 쉬우므로 promise, Generator, async/await 를 사용하여 콜백 지옥을 벗어날 수 있음
  






