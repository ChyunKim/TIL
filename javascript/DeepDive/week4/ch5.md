# 클로저

## 클로저 메모리 관리<br>
클로저는 필요해 의해 의도적으로 함수의 지역변수가 메모리를 소모하도록 함으로써 발생<br>
따라서, 필요성이 사라진 시점에는 더는 메모리를 소모하지 않게 해주면 됨<br><br>

(1) 리턴에 의한 클로저의 메모리 해제
```javascript
var outer = (function() {
    var a = 1;
    var inner = function() {
        return ++a;
    }
    return inner;
})();

console.log(outer())
console.log(outer())
outer = null;                                   // outer 가 더이상 inner 함수를 참조할 수 없도록 null값을 줌
```

(2) setInterval에 의한 클로저의 메모리 해제
```javascript
(function() {
    var a = 0;
    var timeId = null;
    var inner = function () {
        if(++a > 10) {
            clearInterval(timeId)
            inner = null
        }
        console.log(a);
    }
    timeId = setInterval(inner, 1000);
})
```

(3) evetListener에 의한 클로저의 메모리 해제
```javascript
(function() {
    var count = 0;
    var btn = document.createElement('button')
    btn.innerText = 'click'

    var clickevent = function() {
        console.log(++count, 'times clicked')
        if( count >= 10) {
            btn.removeEventListener('click',clickevent)
            clickevent = null
        }
    }
    btn.addEventListener('click',clickevent)
    document.body.appedChild(btn)
})
```
<br><br>

## 활용예제 - (1) 콜백함수 내부에서 외부 데이터를 사용하고자 할 때 <br>

```javascript
var fruits = ['apple','banana', 'peach']
var ultag = document.createElement('ul')

fruits.forEach((ele)=>{                                     // (A)
    var litag = document.createElement('li')
    litag.innerText = ele
    litag.addEventListener('click',() => {                  // (B)
        alert('your choice is ' + ele)
    })
    ultag.appedChild(litag)
})
document.body.appedChild(ultag)
```

위와 같은 함수 형태는 함수 (A) 내부에서 외부변수를 사용하지 않고 있으므로 클로저가 없지만<br> 
(B)함수에서 ele를 참조하고 있으므로 클로저가 있음<br><br>

(A)는 fruits 배열의 요소 개수 만큼 실행되며 그때마다 새로운 실행컨텍스트가 활성화 됨<br>
(A)의 종료와 무관하게 (B)에서의 클릭이베ㄴ트가 실행될때마다 참조되어 함수(A) 종료 후에서 GC 대상에서 제외되고 함수 (B)에 의해 계속 참조 됨<br><br>

```javascript
var alertFunc = function(fruit) {
     alert('your choice is ' + fruit)
}
fruits.forEach((ele)=> {
    var litag = document.createElement('li')
    litag .innerText = ele
    litag.addEventListener('click', alertFunc)
    ultag.appedChild(litag)
})
document.body.appedChild(ultag)
alertFunc(fruits[1]);
```

위와 같이 alert 기능을 하는 구간을 함수로 빼서 사용가능<br>
하지만 클릭될때 fruits 함수의 1번째 인덱스의 값이 출력되는 것이 아닌 [object MouseEvent] 라는 값이 출력<br>
이는 이벤트 리스너의 첫번째 값이 click 값이기 때문<br><br>

이러한 문제를 bind를 사용하여 this를 임의로 지정해 줌으로써 해결 가능<br>

```javascript
var alertFunc = function(fruit) {
     alert('your choice is ' + fruit)
}
fruits.forEach((ele)=> {
    var litag = document.createElement('li')
    litag .innerText = ele
    litag.addEventListener('click', alertFunc.bind(null, ele))
    ultag.appedChild(litag)
})
document.body.appedChild(ultag)
alertFunc(fruits[1]);
```
위와 같은 방식으로 bind를 사용하여 this를 지정 가능<br>
하지만 이렇게 작성시 이벤트 객체가 인자로 넘어오는 순서가 바뀌는 점 및 함수 내부에서의 this가 원래의 그것과 달라지는 점을 감안해야함<br><br>

따라서 이런경우 고차함수를 사용<br>

```javascript
var alertFunc = (fruit) => {
    return function () {
        alert('your choice is ' + fruit)
    }
}

fruits.forEach((ele)=> {
    var litag = document.createElement('li')
    litag .innerText = ele
    litag.addEventListener('click', alertFunc(ele))
    ultag.appedChild(litag)
})
```
<br><br>

## 클로저의 의한 접근 권한 제어<br>
클로저를 활용하면 외부 스코프에서 함수 내부의 변수들 중 서낵적으로 일부의 변수에 대한 접근 권한 return 으로 부여 가능 <br>
외부세어 제공하고자 하는 정보들을 모아서 return <br>
return 한 변수들은 공개 멤버 즉, public member 가 되고 그렇지 않은 변수들은 비공개 멤버 private member 가 됨 <br>

```javascript
var car = {
    fuel : Math.ceil(Math.random() * 10 + 10),
    power : Math.ceil(Math.random() * 3 + 2),
    moved : 0,
    run : function () {
        ...
    }
}
```
각 천마다 주사위를 굴력 나온 숫자만큼 자동차가 이동하는 게임을 만들다고 가정할 때,<br>
위와 같이 작성시 run 메소드를 실행하면 게임이 가능하지만, 연료 연비 이동거리 등을 마음대로 바꿀 수 있으므로 문제가 생김<br>
따라서 이런 경우를 대비해 객체가 아닌 함수로 만들어 접근 권한이 허용된 변수에만 접근하도록 제어<br><br>

```javascript
var cargame = function () {
    fuel  = Math.ceil(Math.random() * 10 + 10)
    power = Math.ceil(Math.random() * 3 + 2)
    moved  = 0

    return {
        get moved() {
            return moved;
        },
        run : function () {
            ...
        }
    }
}

var var = cargame();
car.run();
console.log(car.moved)
console.log(car.fuel)
consoleg.log(car.power)
```




