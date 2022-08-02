# JSX 문법
JSX는 Javascript를 확장한 문법으로 React element를 생성
React 에서 렌더링 로직이 UI 로직과 연결되어 UI 관련 작업을 할 때 시각적 도움을 줌<br>
**JSX는 규칙**
- 컴포넌트에 여러 요소가 있다면 반드시 하나의 부모요소로 감싸야함<br>
=> Virtual DOM에서 컴포넌트 변화를 감지해 낼때 효율적으로 비교할 수 있도록 컴포넌트 내부의 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있음<br>
=> 꼭 div요소를 사용하지 않더라도 하나의 부모요소로 묶을 수 있음 (Fragment 기능)<br>
- JSX 내부에서는 자바스크립트 표현식도 사용가능 { 자바스크립트 표현식 }<br><br>

## JSX 표현식<br>

```javascript
function formatName(user){
  return user.firstName + '' + user.lastName;
}
const user = {
    firstName: 'kim',
    lastName : 'ch'
}
const element = <h1 className='greeting'>hello {formatName(user)}</h1>;
// const elements = React.createElement('h1', {className:'greeting'},'Hello world');
function App() {
  return (
      <div>{elements}</div>
  );
}
```
JSX의 중괄호 안에는 유효한 모든 자바스크립트 표현식을 넣을 수 있음<br>
JSX도 표현식이므로 자바스크립트 함수 호출이 되며 자바스크립트 객체로 인식<br>
즉, JSXfmf if문, for문, switch 문 등 사용이 가능하며 변수에 할당하고 인자로 받아들이며 함수로 반환 가능<br><br>

## JSX 속성정의<br>
어트리뷰트에 따옴표를 이용해 문자열 리터럴 정의 가능<br>

```javascript
const element = <a href="https://www.reactjs.org">link</a>
```
 위와 같은 표현식을 어트리뷰트 타음표를 이용해 아래와 같이 사용가능<br>

 ```javascript
 const elememt = <img src = {user.url}></img>
 ```

 ## JSX 자식정의<br>
 태그가 비어있다면 XML 처럼 ```/>```를 이용해 바로 닫아주여야 함<br>

 ```javascript
 const element = <img src = {user.url} />
 ```

 ```javascript
 const element = (
    <div>
        <h1>Hello world</h1>
        <h2>Good to see you here</h2>
    </div>
 )
 ```
 JSX 태그는 위와 같이 자식을 포함할 수 있음<br><br>

##  JSX 자바스크립트 표현식

```javascript
function app() {
  const name = '리액트'
  return (
    <div>
      {name === '리액트' ? (<h1> 리액트입니다</h1>) :  (<h1>리액트가 아닙니다</h1>)}
    </div>
  )
}
```

```javascript
function App() {
  const name = '리액트'
  return <div>{name==='리액트'? <h1>리액트입니다.</h1> : null}</div>
}
```

위와 같은 조건식은 && 연산자를 사용하여 아래와 같이 변경가능<br>

```javascript
function App() {
  const name = '리액트'
  return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>
}
```
**undefined를 렌더링하지 않기**<br>
리액트 컴포넌트에서는 함수에서 undefined를 반환하여 렌더리하는 상황을 만들면 안됨.<br>

```javascript
function App() {
  const name = undefined;
  return name;
}
```

위와같은 코드는 오류를 발생시킴<br>
어떤 값이 undefined 일수도 있다면 OR 연산자를 사용하여 해당값이 undefined일때 사용할 값을 지정할 수 있으므로 오류 방지 가능<br>

```javascript
function App() {
  const name = undefined;
  return name || '값이 undefined 입니다.'
}
```
만약 undefined 값을 보여줘야 한다면 <div> 태그안에 undefined 값을 넣어 출력<br>

```javascript
function App() {
  const name = undefined
  return (<div>{name} </div>)
}
```

## class 대신 className<br>
일반 HTML에서 Css 클래스를 사용할 때는 <div class ="myclass"></div>와 같이 class 라는 속성을 설정<br>
하지만 JSX 에서는 class가 아닌 className 으로 설정<br>

```javascript
functio App() {
  const name = '리액트'
  return (<div className="myclass">{name})
}
```
이런식으로 className 사용하여 지정<br><br>

## 인라인 스타일링<br>
리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아닌 객체 형태로 줘야함<br>

```javascript
function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'red',
    fontWeight: 'bold',
    padding: 16                     // 단위 생략시 px로 지정됨
  };
  return <div style = {style}>{name}</div>
}
```

위와 같이 style 객체를 미리 선언하고 div style 값을 지정해 주었는데 미리 선언하지 않고 바로 style 갑을 지정할 수 있음<br>

```javascript
function App() {
  const name = '리액트'

  return (
    <div style = {
       backgroundColor: 'black'           
    }>
    {name}</div>
  )
}
```









