# 생성자 함수 (constructor function)
객체 리터럴을 사용하면 객체를 쉽게 만들 수 있지만 유사한 복수의 객체를 만들때 생성자 함수를 사용하면 쉽게 여러개 생성 가능

## 생성자 함수 선언<br>
아래와 같은 형태로 선언이 가능하며 생성자 함수는 관례적으로 함수이름의 첫글자는 대문자로 시작<br>

```javascript
function Person() {
    this.name = name;
    this.age = age;
}

let per = new Person();
```

생성자 함수는 ```new``` 연산자와 함께 실행<br>
만약 ```new``` 연산자 없이 실행시 function의 내부메소드 ```[[ call ]]``` 이 호출되어 ```this```는 전역객체인 ```window```를 가리키므로 문제 발생<br><br>

## new.target<br>
new.target 프로퍼티를 사용하여 new 연산자와 함께 호출되었는지 확인<br>

```javascript
function Person() {
    if(!new.target) {
        return new Person();
    }
    this.name = name;
}

let per1 = Person();           // new 연산자를 쓴 것처럼 할당됨
```

## 생성자 return<br>
생성자 함수는 암묵적으로 ```this```를 반환<br>
명시적으로 ```return```을 반환한다면 ```this``` 대신 명시된 객체가 반환<br>
하지만, ```return```의 원시값이 반환된다면 원시값은 무시되고  ```this```가 반환

```javascript
function Circle(radius) {
    
    this.radius = radius;

    this.getDiameter = function() {
        return 2*this.radius;
    }
    // 암묵적으로 this 반환
    // 명시적으로 객체 반환시 암묵적인 this 반환 무시
    return {radius: 2};
}    

let cir = new Circle(1);
console.log(cir)                 // {radius: 2}
```

위와같이 명시적으로 객체를 리턴할 경우 명시된 값을 리턴 <br><br>


```javascript
function Circle(radius) {
    
    this.radius = radius;
    this.getDiameter = function() {
        return 2*this.radius;
    }
    // 암묵적으로 this 반환
    // 원시값 반환시 원시값 무시되고 this가 반환
    return 100;
}    

let cir = new Circle(1);
console.log(cir)                // Circle {radius: 1, getDiameter: ƒ} 
```

위와 같이 return 값이 원시값이 경우 this를 반환함







