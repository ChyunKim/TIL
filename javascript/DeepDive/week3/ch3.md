# this
다른 대부분의 객체 지향언어에서 this는 클래스로 생성한 인스턴스 객체를 의미하지만,<br>
자바스크립트에서의 this는 어디서든 사용 가능<br><br>

## 상황에 따른 this<br>
자바스크립트에서 this는 기본적으로 실행컨텍스트가 생성될때 함께 결정<br>
실행 컨텍스트는 함수를 호출할 때 생성되므로, this는 함수를 호출할 때 결정된다고 할 수 있음 <br> 
=> 함수를 어떤 방식으로 호출하냐에 따라 this 값이 달라질 수 있음<br><br>

### (1) 전역공간에서의 this <br>
전역공간에서의 this는 전역 객체를 가리킴 <br>
브라우저 환경에서 전역객체는 window , Node.js환경에서는 global <br>

```javascript
var a = 1;
console.log(a);                                 // 1
console.log(window.a);                          // 1
console.log(this.a);                            // 1
```
전역공간에서 선언한 변수 a에 1을 할당했을때 window.a 와 this.a는 모두 1이 출력<br>
전역공간에서 변수로 선언하는 것 대신 window 프로퍼티에 직접 할당하더라도 결과적으로 똑같이 동작<br>

```javascript
var a = 1;
window.b = 2;

console.log(a, window.a, this.a);                   // 1 1 1
console.log(b, window.b, this.b);                   // 2 2 2
```

위와 같이 window 프로퍼티에 직접 할당해도 결과는 같이 나옴<br>
하지만 삭제의 경우 다른 결과가 나옴<br>

```javascript
var a = 1;
delete window.a;                                    // false
console.log(a, window.a, this.a);                   // 1 1 1                


window.b = 2;
delete.window.c;                                    // true
console.log(c, window.c, this.c);                   // c is not defined
```

변수에 delete 연산자를 쓰는 것이 이상할 수 있지만 전역변수가 곧 전역객체의 프로퍼티이므로 문제가 되지 않음<br>
하지만, 전역변수로 선언한 경우에는 삭제가 되지않고 전역객체의 프로퍼티로 할당한 경우 삭제가능 <br><br>

### (2) 메서드내부의 this<br>
함수로서 호출과 메서드로서 호출을 가장 쉽게 구분하는 방법은 함수 앞에 (.)점이 있는지 여부로 구분 가능<br>
점 표기법의 경우 마지막 점 앞에 명시된 객체가 곧 this<br>

```javascript
var obj = {
    methodA : function (x) {console.log(this)}
    inner : {
        methodB : function () {console.log(this)}
    }
}

obj.methodA();                                      // {methodA : f , inner : {...}}
obj.inner.methodb();                                // {methodB : f }

// 대괄호 표기법의 경우도 앞에 객체가 명시되어 있는 경우 메서드 호출
obj['methodA']();                                   // {methodA : f , inner : {...}}                       
obj.inner['methodB']();                             // {methodB : f }
```

### (3) 함수에서의 this <br>
함수 내부에서의 this는 전역객체를 가리킴<br>
함수를 메서드로서 호출할때와 함수로서 호출할 때 this는 다른 결과가 나옴 <br>

```javascript
var obj = {
    outer : function () {
        console.log(this);                          // obj1
        var innerFunc = function () {
            console.log(this)                       // window, obj2
        }
        innerFunc();

        var obj = {
            innerMethod : innerFunc
        }
    }
}
```

위와 같이 함수로서 호출할때는 window를 가리키는 반면 메서드로서 호출할 때는 점앞에 객체가 this 대상이 됨<br>

```javascript
var obj = {
    outer : function() {
        console.log(this)                           // { outer : f }
        var innerFunc1 = function () {
            console.log(this)                       // window {...}
        }
    }
    innerFunc1();

    var self = this;
    var innerFunc2 = function() {
        console.log(self)                           // { outer : f }
    }
    innerFunc2();                   

}
```
내부 함수에서의 this를 상속할 방법은 없지만 우회할 방법은 있음 <br>
위와 같이 innerFunc1 내부에서 this는 전역객체를 가리킴<br>
하지만 innerFunc2  내부에서는 self 라는 변수에 this를 저장한 상태에서 호출한 경우 self 변수에는 객체 obj가 출력<br>

이렇게 우회법을 사용하지 않고, this의 문제점이 함수 내부에서 this가 전역객체를 바라보는 문제를 보완하는 <br>
this를 바인딩하지 않는 화살표 함수를 도입<br>

```javascript
var obj = {
    outer : function () {
        console.log(this)                           // { outer : f }
        var innerFunc = () => {
            console.log(this)                       // { outer : f }
        }
        innerFunc();
    }
}
```

화살표함수에서의 this는 상위 객체를 가르킴<br><br>

### (4) 콜백함수 this<br>
콜백함수도 함수 이기 때문에 기본적으로 this는 전역객체를 참조하지만 제어권을 받은 함수에서 콜백함수에 별도로 this 가 될 대상을 지정한 경우 그 대상을 참조<br>

```javascript
setTimeout(() => {
    console.log(this)                       // 3초뒤 window
}, 300);

[1,2,3,4,5].forEach(function (x){
  console.log(this, x)                      // window와 배역요소총 5회 출력
})

[1,2,3,4,5].forEach(function (x){
  console.log(this, x)                      // 별도의 인자를 받음 => this 대상 [1]로 지정 => [1] 5회 출력
},[1])

document.body.innerHTML += '<button id = "a">클릭</button>'
document.body.querySelector('#a').addEventListener('click',function(e) {
    console.lof(this, e)                    // 지정된 엘리먼트 정보 객체 출력
})
```

### (5) 생성자 함수 this<br>
생성자 함수로서 호출된 경우 this 새로 만들 구체적인 인스턴스 자신<br>

```javascript
var Cat = function (name, age) {
  this.bark = '야옹';
  this.name = name;
  this.age = age;
}

var choco = new Cat('초코', 7);
var nabi = new Car('나비', 5);
console.log(choco, nabi)
```
위와 같이 출력하면 new 연산자와 같이 할당된 값이 this 값<br><br>

## 명시적 this 바인딩
this에 별도의 대상을 바인딩 하는 방법<br>

### (1) call 메서드<br>
call 매서드는 메서드의 호출 주체인 함수를 즉시 실행하는 명령<br><br>

```javascript
Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])
```

메서드의 첫번째 인자를 this , 이후의 인자들을 호출할 함수의 매개변수<br>
함수를 그냥 실행하면 this를 전역객체로 참조하지만 call 메서드를 이용하면 객체를 this로 지정가능<br>

```javascript
var func = function (a,b,c) {
    console.log(this,a,b,c)
}

func(1,2,3)                             // window {...} 1 2 3
func.call({x:1},4,5,6)                  // {x:1} 4 5 6 
```

```javascript
var obj = {
    a : 1,
    method : function (x,y) {
        console.log(this.a, x, y)
    }
}

obj.method(2,3)                         // 1 2 3 
obj.method.call({a:4},5,6)              // 4 5 6
```
위와 같이 call 메서드로 this를 지정할 수 있음 <br><br>

### (2) apply 메서드<br>
apply 메서드는 call 메서드와 기능적으로 동일하지만 apply 메서드는 두번째 인자를 배열로 받아 호출할 함수의 매개변수로 지정<br>

```javascript
Function.prototype.apply(thisArg[, argsArray])
```

```javascript
var func = function(a,b,c) {
    console.log(this, a,b,c)
}
funx.apply({x:1},[4,5,6])               // {x:1} 4 5 6 
```
```javascript
var obj = {
    a : 1,
    method : function (x,y) {
        console.log(this.a, x, y)
    }
}

obj.method(2,3)                         // 1 2 3 
obj.method.apply({a:4},[5,6])          // 4 5 6
```
<br>

### (3) bind 메서드<br>
bind 메서드는 call 과 비슷하지만 즉시 호출하지 않고 넘겨 받은 this 및 인수들을 바탕으로 새로운 함수를 반환하기만 하는 메서드<br>

```javascript
Function.prototype.bind(thisArg[, arg1[,arg2[, ...]]])
```

bind 메서드는 함수에 this를 미리 적용하는 것과 부분 적용 함수를 구현하는 두가지 목적을 모두 가짐 <br>

```javascript
var func = function(a,b,c,d) {
    console.log(this,a,b,c,d)
}

func(1,2,3,4);                          // window{...} 1 2 3 4

var bindFunc1 = func.bind({x:1});
bindFunc1(5,6,7,8)                      // {x:1} 5 6 7 8
```
위처럼 this를 미리 적용하고 함수 호출할 때의 인수들을 bindFunc1에 할당 가능

```javascript
var func = function(a,b,c,d) {
    console.log(this,a,b,c,d)
}


var bindFunc2 = func.bind({x:1},5,6);
bindFunc2(7,8)                          // {x:1} 5 6 7 8
bindFunc2(10,11)                        // {x:1} 5 6 10 11
```

위처럼 this와 두개의 인수를 4,5로 미리 지정하여 binbFunc2에 넘겨 줄수 있고 이후 인수값은 binbFunc2에 할당 하여 부분 적용 가능 <br>

```javascript
var func = function(a,b,c,d) {
    console.log(this,a,b,c,d)
}

var bindFunc3 = func.bind({x:9},5,6,7);
bindFunc3(7,8,9)                         
bindFunc3(10,11,12)                        
```

위와 같이 더 많은 인수를 부분 적용하게 되면 어떻게 이미 지정된 인수가 있기 때문에 뒤에 인수는 지정되지 않게 됨<br><br>

**name 프로퍼티**<br>
bind 메서드를 적용해서 새로 만든 함수는 name 프로퍼티에 동사 bind 수동태인 bound 라는 접두사가 붙음<br>
곧 함수명인 원본 함수에 bind 메서드를 적용한 새로운 함수라는 의미라 되는 ```bound 원본함수이름``` 을 갖게 됨<br>

```javascript
var func = function (a,b,c,d) {
    console.log(this, a,b,c,d)
}
var bindFunc = func.bind({x:1},4,5)

console.log(func.name)                  // func
console.log(bindFunc.name)              // bound func
```
위와 같이 출력되게 되며 이러한 함수명은 call이나 apply 메서드보다 코드를 추적하기에 더 수월<br><br>

**상위 컨텍스트 this를 내부함수나 콜백함수에 전달**<br>
앞에서 this를 그대로 바라보게 하기 위한 방법으로 self 등의 변수를 활용한 우회법을 사용했는데, <br>
call, apply, bind 메서드를 이용하면 깔끔하게 처리 가능<br>

```javascript
var obj = {
    outer : function () {
        console.log(this)
        var innerFunc = function () {
            console.log(this)
        }
        innerFunc.call(this)
    }
}
obj.outer();
```

위와 같이 쉽게 메서드 활용하여 쉽게 우회 가능<br>

```javascript
var obj = {
    logThis : function () {
        console.log(this)
    },
    logThisLater1 : function () {
        setTimeout(this.logThis, 500);
    },
    logThisLater2 : function () {
        setTimeout(this.logThis.bind(this), 1000)
    }
}

obj.logThisLater1();                   // window {...}
obj.logThisLater2();                   // obj {logThis: f, logThisLater1 :f, logThisLater2 : f}
``` 

위와 같은 손쉽게 우회가능<br><br>

화살표 함수는 실행 컨텍스트 생성시 this 바인딩하는 과정이 제외<br>
함수 내부에 this가 아예 없으며 접근하고자 하면 스코프 체임상 가장 가까운 this 에 접근 <br>
따라서 call, apply, bind 메서드 활용 없이도 더 손쉽게 우회 가능<br>

```javascript
var obj = {
    outer : function () {
        console.log(this)                           // { outer : f }
        var innerFunc = () => {
            console.log(this)                       // { outer : f }
        }
        innerFunc();
    }
}
obj.outer();
```
<br>


## this 정리
다음 규칙은 명시적 this 바인딩이 없는 한 늘 성립<br>
- 전역공간에서의 this는 전역객체를 참조
- 어떤 함수를 메서드로서 호출한 경우 this는 메서드 호출 주체를 참조 
- 어떤 함수를 함수로서 호출한 경우 this는 전역객체 참고, 메서드의 내부함수에서도 같음
- 콜백 함수 내부에서의 this는 해당 콜백 함수의 제어퀀을 넘겨받은 함수가 정의한 바에 따르며, 정의하지 않은 경우 전역객체 참조
- 생성자 함수에서의 this는 생성될 인스턴스 참조

위 규칙에 부합하지 않는 경우는 다음 내용을 바탕으로 this 예측 가능<br>
- call, apply  메서드는 this를 명시적으로 지정하면서 함수 또는 메서드 호출
- bind 메서드는 this 및 함수에 넘길 인수를 일부 지정해서 새로운 함수 만듬
- 요소를 순회하면서 콜백함수를 호출하는 내용의 일부 메서드는 별도의 인자를 this로 받기도 함



