# Hoisting
변수 선언이 스코프의 선두로 끌어 올려진 것 처럼 동작하는 자바스크립트의 공유의 특징


## Life Cycle
변수 호이스팅에서 알수 있듯이 변수 선언은 선언문이 어디있든 상관없이 가장 먼저 실행<br>
전역 변수 선언은 코드가 한줄씩 순차적으로 실행되는 시점인 런타임에 실행되는 거이 아니라 런타임 이전 단계 자바스크립트 엔진에 의해 먼저 실행<br>
전역 변수의 생명주기는 어플리케이션의 생명주기와 같음<br>
따라서 전역변수의 무분별한 사용은 위험함<br>
<br>
하지만, 함수 내부에서 선언된 지역변수는 함수가 호출되어 실행하는 동안에만 유효<br>
즉, 지역변수의 생명주기는 함수의 생명주기와 일치<br>


```javascript
    var x = 'global'

    function foo() {
        console.log(x);                 // undefined
        var x = 'local'
    }

    foo();
    console.log(x);                     // global

```

foo 함수 내부에서 선언된 지역변수 x는 변수 호이스팅에 의해 ReferenceError 아닌 undefined를 출력.<br>
즉, 지역변수 x는 이미 선언되었고 undefined로 초기화 되어있고 변수 할당문이 실행되기 이전까지는 undefined 값을 갖음.<br>
<br>
이처럼 호이스팅은 스코프 단위로 동작.<br>
전역 변수의 호이스팅은 전역 변수의 선언이 전역 스코프의 선두로 끌어 올려진 것 처럼 동작.<br>
따라서 전역 변수는 전역 전체에서 유효.
<br><br>
지역 변수의 호이스팅은 함수 전체에서 유효.<br>
<br>

## 변수별 스코프와 호이스팅
var 키워드로 선언된 변수는 오로지 함수 코드 블록만을 지역 스코프로 인정하는 함수 스코프를 따름<br>
하지만 let 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따름<br>

```javascript
    let foo = 1;

    {
        let foo = 2;                    // 지역변수
        let bar = 3;                    // 지역변수 
    }

    console.log(foo);                   // 1
    console.log(bar);                   // ReferenceError
```

var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것 처럼 동작<br>

```javascript
    console.log(foo);                   // ReferenceError
    let foo;
```

var 키워드로 선언한 변수는 호이스팅에 의해 undefined 출력되는 모습<br>
```javascript
    console.log(foo);                   // undefined

    var foo;
    console.log(foo);                   // undefined

    foo = 1;                            // 할당문에서 할당 단계가 실행
    console.log(foo);                   // 1
```

let 키워드로 선언한 변수는 변수 호이스팅이 일어나지 않는 모습<br>
```javascript
    console.log(foo);                   // ReferenceError

    let foo;
    console.log(foo);                   // undefined

    foo = 1;
    console.log(foo);                   // 1
```






