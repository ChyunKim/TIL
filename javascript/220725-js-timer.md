# window 객체
window 객체는 일정 시간이 지난 뒤에 함수를 호출할 수 있도록 ```setTimeout()``` ```setInterval() ``` 메소드를 제공합니다.

또한 위의 설정된 함수 호출을 취소할 수 있도록 ```clearTimeout()``` ```clearInterval()``` 메소드를 제공합니다.

## setTimeout() 메소드

```javascript
setTimeout(호출할함수, 시간);	
```

```setTimeout```은 지정된 시간이 지나면 함수를 호출합니다.
위와 같이 사용가능하며 명시된 시간이 지난 뒤에 지정된 함수를 호출합니다.

## setInterval() 메소드

```javascript
setInterval(호출할함수, 시간);	
```

```setInterval```은 지정된 시간 간격으로 지정된 함수를 호출합니다.

## clearTimeout() 메소드
```setTimeout()``` 메소드의 반환값을 ```clearTimeout()``` 메소드의 인수로 전달하면 ```setTimeout()``` 의 지정된 함수의 호출을 취소할 수 있습니다.

```javascript
clearTimeout(timeoutID);	
```

## clearInterval() 메소드
```setInterval()``` 메소드의 반환값을 ```clearInterval()``` 메소드의 인수로 전달하면, ```setInterval()```의 지정된 반복되는 함수의 호출을 취소할 수 있습니다.

```javascript
clearInterval(timeoutID);	
```

