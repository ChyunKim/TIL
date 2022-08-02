# 이벤트 시스템
리액트의 이벤트 시슴템은 웹 브라우저의 HTML 이벤트와 인터페이스 동일하므로 사용법 동일<br><br>

```javascript
const App = () = {
    const [msg, setMsg] = React.useState('')
    const onClickHi = () => setMsg('Hi')
    const onClickBye = () => setMsg('Bye')

    return (
        <div>{msg}
            <button onClick = {onClickHi}>입장</button>
            <button onClick = {onClickBye}퇴장</button>
        </div>
    )
}
```

**이벤트 사용시 주의사항**<br><br>
1. 이벤트 이름 카멜 표기법으로 작성 : onclick 이벤트를 리액트에서 사용시 onClick으로 작성<br>
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이아닌 함수 형태의 값을 전달<br>
3. DOM 요소에만 이벤트 설정 가능<br><br>

## 함수형 컴포넌트 이벤트 핸들링

```javascript
const App () => {
    const [msg, setMsg] = React.useState('');             

    return (
      <div>{msg}
          <input type = "text" placeholder = "글자를 입력하세요" onChange={(e)=>{setMsg(e.target.value)}}></input>
      </div>
    )
}
```
위와 같이 input 값이 바뀔때마다 이벤트를 발생 시킬 수 있음<br>

```javascript
const App = () => {
    const [num, setNum] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [result, setResult] = React.useState(0);

    const sum = () => {setResult(num+num2)}

    return (
        <div> {result} <br />
            <input type ="number" placeholder ="숫자입력" onInput = {(e)=>{setNum(Number(e.target.value))}}></input>+
            <input type ="number" placeholder ="숫자입력" onInput = {(e)=>{setNum2(Number(e.target.value))}}></input>=
            <button onClick = {sum}>계산</button>
        </div>
    )
}
```
input 값이 변경될 때마다 input값을 받아와서 계산하도록 가능<br><br>

## 클래스형 컴포넌트 이벤트 핸들링

```javascript
class Eventinput extends Component {
    render() {
        return (
            <div>
                <h1>Event Handling</h1>
                <input type = "text" placeholder = "글자입력" onChange = {(e)=>{console.log(e)}} ></input>
            </div>
        )
    }
}
```

위와 같이 클래스형 컴포넌트로 표현가능하며 입력받은 input값을 alert 로 출력하는 표현을 아래와 같이 작성 가능<br>
```javascript
class Eventinput extends Component {
    state = {
        msg : ''
    }

    render() {
        return (
            <div>
                <h1>Event Handling</h1>
                <input type ="text" placeholder ="글자입력" onChange ={(e)=>this.setState(e.target.value)}/>
                <button onClick ={alert(meg)}>클릭</button>
            </div>
        )
    }
}

```

위와 같이 클래스형 컴포넌트로도 이벤트 핸들링이 가능함<br>


