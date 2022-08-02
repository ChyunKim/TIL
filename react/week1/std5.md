# DOM ref<br>
일반 HTML에서 DOM 요소에 이름을 달떄 id를 사용하지만, 리액트에서는 id가 root인 div 요소가 있으므로 ref 를 사용하여 DOM 이름을 달아줌<br>
DOM에 직접적으로 건드려야 하는 상황일 때 ref 를 사용함<br><br>

## ref 사용법<br>
**DOM을 꼭 사용해야 하는 상황**
1. 특정 input에 포커스 주기
2. 스크롤 박스 조작하기
3. canvas 요소에 그림그리기 등

위와 같은 상황일때 DOM에 접근해야 하는데, 이떄 ref 사용함 <br>

```javascript
class Refinput extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref = {this.input} />
                <button onClick ={handleFocus}>Click</button>
            </div> 
        )   
    }
}
```
위와 같이 input 에 ref를 주면 focus를 줄때 유용하게 사용할 수 있음<br>
아래와 같이 함수형으로 작성 가능<br>

```javascript
const input = React.createRef();

const Refinput = () => {
    input.current.focus();
}

const App = () => {
    return(
        <div>
            <input ref = {input} />
            <button onClick ={Refinput}> Click </button>
        </div>
    )
}

```

## 컴포넌트에 ref<br>
리액트에서는 컴포넌트에도 ref를 달 수 있음<br>
주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 사용<br>

```javascript
<MyComponent ref = {(ref) => {this.MyComponent = ref}} />
```

이런식으로 컴포넌트 내부의 메서드 및 멤버 변수에도 접근 가능<br>


