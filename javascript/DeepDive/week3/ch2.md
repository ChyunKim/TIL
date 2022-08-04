# 실행 컨텍스트
싱행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체<br>
어떤 실행 컨텍스트가 활성화 되는 시점에 선언된 변수를 위로 끌어올리고, 외부 환경 정보를 구성하고 this 값을 설정하는 등의 동작을 수행<br>
실행 컨텍스트는 관련있는 콜스택에 쌓아 올렸다가 쌍혀있는 컨텍스트와 관련있는 코드들을 실행하는 식으로 전체 코드의 환경과 순서를 보장<br>

## 실행 컨텍스트 실행순서<br>

```javascript
var a = 1;
function outer() {
    function inner() {
        console.log(a);                 // undefined
        var a = 3;
    }
    inner();                            
    console.log(a);                     // 1
}
outer();
console.log(a);                         // 1  
```

위와 같은 코드에서 자바스크립트는 코드를 실행하는 순간 전역 컨텍스트가 콜스택에 담김<br>
최상단의 공간은 코드 내부에서 별도의 실행 명령이 없어도 브라우저에서 자동으로 실행하므로 자바스크립트의 파일이 열리는 순간 전역 컨텍스트 활성화 됨<br>
이후, 함수 ```outer```에 대한 환경 정보를 수집해서 실행 컨텍스트를 생성한 수 콜스택에 담김<br>
콜스택 맨위의 ```outer``` 실행 컨택스트가 놓였으므로 전역 컨텍스트와 관련된 코드의 실행을 일시 중단<br>
이후, outer 실행 컨텍스트와 관련된 코드인 outer 내부 ```inner``` 함수 실행 컨텍스트 콜스택의 가장 위에 담기게 됨<br><br>

```inner``` 함수 내부에서 a 변수에 값 3을 할당하고 나면 inner 함수의 실행 종료되면 inner 실행컨텍스트 콜스택에서 제거<br>
```outer``` 컨텍스트가 콜스택 맨 위에 존재하므로 이어서 실행하고 이후 전역컨텍스트 콘솔 로그 출력후 콜스택에는 아무것도 남지 않은 상태로 종료<br><br>

## 실행 컨텍스트 수집정보<br>
어떤 실행 컨텍스트가 활성화 될때 자바스크립트 엔진은 해당 컨텍스트에 관련된 코드들을 실행하는데 필요한 환경 정보들을 수집해서 실행 컨텍스트 객체에 저장<br>
이 객체는 자바스크립트 엔진이 활용할 목적으로 생성

- VariableEnvironment: 현재 컨텍스트 내의 식별자들에 대한 정보 + 외부 환경정보, 선언 시전의 LexicalEnvironment의 스냅샷 => 변경사항은 반영되지 않음
- LexicalEnvironment : 처음에는 VariableEnvironment와 같지만 변경사항이 실시간으로 반영됨
- ThisBoonding : this 식별자가 바라봐야 할 대상 객체

VariableEnvironment (V.E)과 LexicalEnvironment(L.E) 차이는 변경 사항의 반영여부에 차이가 있음<br>
V.E은 변경 사항이 반영이 되지 않지만 L.E은 변경사항을 반영<br><br>

이 두가지 환경에는 환경 레코드와, 외부 환경 참조라는 개념 있음<br>

### (1) environmentRecord와 호이스팅<br>
environmentRecord 에는 현재 컨텍스트와 관련된 코드의 식별자 정보들이 저장<br>
컨텍스트를 구성하는 함수에 지정된 매개변수 식별자, 선언한 함수가 있을 경우 그 함수 자체, var로 선언된 변수의 실벽자 등이 식별자에 해당<br>
변수 정보를 수집하는 과정을 동작 하기 이전에 모두 마치기 때문에 자바스크립트 엔진은 이미 해당 환경에 속한 코드의 변수명을 모두 알고 있음<br>
따라서, "자바스크립트 엔진은 식별자들을 최상단으로 끌어올려놓은 다음 실제 코드를 실행 => 호이스팅" 이라고 이해 가능<br><br>

**호이스팅 규칙**<br>
```javascript
function a () {
    x = 1;
    console.log(x);                         // 1
    var x;
    console.log(x);                         // 1
    var x = 2;
    console.log(x);                         // 2
}
```
해당 코드를 호이스팅 변수를 끌어 올리면 다음과 같이 표현 가능<br>
```javascript
function a () {
    var x;
    var x;
    var x;

    x = 1;
    console.log(x);                         // 1
    console.log(x);                         // 1
    x = 2;
    console.log(x);                         // 2
}
```

**함수선언의 호이스팅**<br>
```javascript
function a () {
    console.log(b);                         // function b {}
    var b = 'bbb';
    console.log(b);                         // 'bbb'
    function b () { }
    console.log(b);                         // 'bbb'
}
```
위와 같은 함수선언이 들어간 경우 호이스팅은 다음과 같이 표현 가능<br>

```javascript
function a () {
    var b;
    var b = function b {}                   // 함수 선언문은 함수명으로 선언한 변수에 함수를 할당한 것 처럼 취급 가능

    console.log(b);                         // function b {}
    b = 'bbb'
    console.log(b);                         // 'bbb'
    console.log(b);                         // 'bbb'
}
```

### (2) 스코프, 스코프체인
스코프란 식별자에 대한 유효범위<br>
함수의 매개변수는 함수 몸체 내부에서만 참조할 수 있고 외부에서는 참조할 수 없음 => 이것은 매개변수를 참조할 수 있는 유효범위 = 매개변수의 스코프 <br>
식별자의 유효범위를 안에서부터 바깥으로 차례로 검색해나가는 것 => 스코프 체인<br>
동일한 식별자를 선언한 경우에는 무조건 스코프 체인 상에서 가장 먼저 발견된 식별자에만 접근 가능<br><br>

```javascript
var a = 1;
var outer = function () {
    var inner = function () {
        console.log(a);
        var a = 3;
    }
    inner();
    console.log(a);
}
outer();
console.log(a);
```

위 코드의 실행 결과는 inner 함수의 상위 스코프가 무엇인지에 따라 결정
1. 함수를 어디서 호출 했는지에 따라 함수의 상위 스코프를 결정
2. 함수를 어디서 정의 했는지에 따라 함수의 상위 스코프 결정
    
1번째 방식을 동적 스코프라 하며 함수를 정의하는 시점에서 함수가 어디서 호출될 지 알 수 없음 <br>
따라서 함수가 호출되는 시점에 동적으로 상위 스코프를 결정하기 때문에 동적 스코프라 부름<br>
2번째 방식은 렉시컬 스코프 = 정적스코프<br>
동적 스코프 방식처럼 상위 스코프가 동적으로 변하지 않고, 함수 정의가 평가되는 시점에 상위 스코프가 정적으로 결정<br>
"자바스크립트를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따름"<br>









