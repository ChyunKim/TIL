# React Component
컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러조각으로 나누고 각 조각을 개별적으로 사용<br>
컴포넌트를 만들려면 컴포넌트 코드를 선언해야 함<br>
컴포넌트 코드를 src 디렉토리에 선언할 파일을 만들어 App 컴포넌트에서 불러올 컴포넌트를 import<br><br>

## 함수 컴포넌트와 클래스 컴포넌트<br>
컴포넌트를 정의하는 가장 간단한 방법은 자바스크립트 함수를 작성하는 것<br>

```javascript
function Welcome(props){
    return <h1>Hello, {props.name} </h1>
}
```
<br>
위 함수는 데이터를 가진 하나의 props 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트 => 이러한 함수는 함수 컴포넌트<br>

```javascript
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    },
}
```
클래스를 활용해서도 컴포넌트를 정의할 수 있음<br>
위의 두가지 유형의 컴포넌트는 동일함<br><br>

## props<br>
props는 properties를 줄인 표현으로 컴포넌트 속성을 설정하는 사용하는 요소<br>
props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정<br><br>

### 1) JSX 내부에서 props 렌더링<br><br>

```javascript
const MyComponent = props => {
  return <div>Hi, {props.name}</div>
}
```
위와 같은 컴포넌트가 있다 가정한다면 App 컴포넌트에서 props 값을 지정가능<br><br>

```javascript
const App () => {
  return <MyComponent name = 'KCH'/>
}
```

### 2) Children<br>
리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여주는 props => Children<br><br>

```javascript
const App() = () => {
  return <MyComponent>자식</MyComponent>
}
```
위의 리액트라는 값이 나오기 위해서는 MyComponent 컴포넌트에서 porps.Children 값을 보여줘야함<br>

```javascript
const MyComponent = (props) => {
  return (
    <div> Hi, {props.name}<br/>
    Children 값 {props.children}
    </div>
  )
}
```

위와 같이 작성시 컴포넌트 태그 사이의 내용인 "자식" 이 출력 될 수 있음<br><br>

### 3) 비구조화 할당 문법 props 내부값 추출<br>
컴포넌트 내부에서 props 값을 조회할때 ```props.name``` 과 같은 형식으로 ```props.``` 키워드를 앞에 붙여주고 있음<br>
```javascript
const MyComponent = props => {
  const {name,  children} = props;
  return (
    <div>
      Hi, {name} <br>
      children {children}
    </div>
  )
}
```
위와 같이 비구조화 할당 구문을 할용하면 내부 값을 바로 추출 가능<br>
위의 구조는 아래와 같이 표현도 가능함<br>

```javascript
const MyComponent = ({name,children} => {
  return (
    <div>
      Hi, {name} <br>
      children {children}
    </div>
  )
}) 
```
이렇게 함수 파라미터 부분에 사용할 수 있음<br><br>


### propType을 통한 props 검증<br>
컴포넌트의 피루 props 지정하거나 props 타입을 지정할때는 proType을 사용<br>
propTypes를 지정하는 방법은 defaultProp를 설정하는 것과 비슷<br>
우선, propType을 사용하려면 코드 상단에 import 구문 사용

```javascript
import propTypes from 'pro-types';

const MyComponent = ({name, children} => {...})

Mycomponent.defaultProp = {
  name : '이름'
}

MyComponent.porpTypes = {
  name: propTypes.string
}
```
이런식으로 설정해주면 name의 값은 무조건 문자열 형대로 전달해야 된다는 것을 의미<br>
App 컴포넌트에서 name 값을 문자열이 아닌 숫자로 전달한 뒤 확인 console 경고 메세지를 확인 할 수 있음<br><br>

### 클래스형 컴포넌트 props 사용
클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회<br>

```javascript
class MyComponent extends Component {
  render() {
    const {name, children} = this.props
    return (
      <div>
      ...
      </div>
    )
  }
}
```
위와 같은 방식으로 this.props로 지정 가능

## 컴포넌트 참조<br>
컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있음<br>
React 앱에서는 버튼, 폼, 다이얼로그, 화면 등의 모든것들이 컴포넌트로 표현<br><br>

### 컴포넌트 합성

```javascript
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>  
}

function App() {
    return (
        <div>
            <Welcome name = 'Kim' />
            <Welcome name = 'Lee' />
            <Welcome name = 'Park' />
        </div>
    )
}
```

## 컴포넌트 추출

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```
이 컴포넌트는 author, text, data를 props로 받음<br>
먼저 className 이 Auator 인 컴포넌트를 추출<br>

```javascript
function Auator(props) {
    return (
        <img className = "Avatar"
          src = {props.user.avatarUrl}
          alt = {props.user.name}
    )
}

```
```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
      <Avatar user = {props.author} />
       ...
  );
}
```
위와 같이 컴포넌트를 사용<br>
위의 userInfo-name 컴포넌트도 추출<br>

```javascript
function UserInfo() {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  )
}
```
위와 같이 컴포넌트 추출<br>

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```
Comment 간단해짐<br>





