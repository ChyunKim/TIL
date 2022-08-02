# Hooks
Hooks는 리액트에 새로 도입된 기능으로 함수 컴포넌트에도 상태 관리를 할 수 있는 useState, <br>
렌더링 직후 작업을 설정하는 useEffect 기능을 제공하여 기존의 함수 컴포넌트에서 할 수 없었던 다양한 작업을 제공함<br><br>

## useState<br>
useState 가장 기본적인 Hook으로 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해줌<br>

```javascript
const Counter = () => {
    const [cnt, setCnt] = React.useState(0)
    return (
        <>
            <h1>{cnt}</h1>
            <button onClick={()=> {setCnt(cnt+1)}}>+</button>
            <button onClick={()=> {setCnt(cnt-1)}}>-</button>
        </>
    )
}

```
useState는 앞에서도 공부했지만 Hook에 포함된 기능이므로 다시 복습<br>
useState 함수의 파라미터에는 상태의 기본값을 넣어줌 => 위의 코드에서는 0을 넣어줬지만, 원하는 기본값을 넣어주면 됨<br><br>

## useEffect <br>
useEffect 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook<br>
클래스형 컴포넌트의 componentDidMount, componentDidUpdate를 합친형태로 보아도 무방 <br>

```javascript
const info = () => {
    const [name, setName] = React.useState('')
    const [Nickname, setNick] = React.useState('')


    useEffect(()=> {
        console.log("렌터링이 완료되었음")
        console.log({name, Nickname})
    })

    ...
}

```
위와 같이 작성시 브라우저 개발자 도구시 렌더링 될때마다 해당 문구가 콘솔창에 나옴<br>
만약 처음 렌더링 될떄만 실행하고 업데이트 될때는 실행하지 않으려면 함수의 두번째 파라미터로 비어있는 배열 넣어주면 됨<br>

```javascript
useEffect (()=> {
    console.log("마운트 될때만 실행")
},[]);
```
위와 같이 작성시 컴포넌트가 처음 나타날 때만 콘솔에 문구가 나타나고 그 이후 업데이트 렌더링될때는 나타나지 않음<br>

특정값이 업데이트 될때만 나타내고 싶을때는 두번째 파라미터에 특정값을 넣어주면 됨 <br>

```javascript
useEffect (()=> {
    console.log("이름이 바뀔때만 실행")
},[name]);
```

위와 같이 작성시 이름이 바뀔 떄만 콘솔창에 문구가 출력됨을 알 수 있음<br>
즉, 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라짐<br>

## useReducer <br>
useReducer 는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook<br>
리듀서는 현재상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수<br>

```javascript
function reducer (state, action) {
    switch (action.type) {
        case 'plus':
            return {value : state.value + 1}
        case 'minor':
            return {value : state.value - 1 }
        default:
            return state;
    }
}
const App = () => {

    const [state, dispatch] = React.useReducer(reducer, {value : 0})

    return (
        <div>
            <p>현재 카운터 값은 {state.value}</p>
            <button onClick={()=> dispatch({type:"plus"})}>+</button>
            <button onClick={()=> dispatch({type:"minor"})}>-</button>
        </div>
    )
}

```
useReducer의 첫번째 파라미터에는 리듀서 함수를 넣고 두번쨰 파라미터에는 해당 리듀서의 기본값을 넣어줌<br>
이 Hook을 사용하면 state 값과 dispatch 함수를 받아옴 <br>
여기서 state는 현재 가리키고 있는 상태고 dispatch 는 액션을 발생시키는 함수<br><br>

# useMemo <br>
useMemo를 사용하면 함수 컴포넌트 내부에서 발생하는 연상을 최적화<br>

```javascript
const getAvg = num => {
    console.log('평균값 계산')
    if(num.length === 0) return 0
    const sum = num.reduce((a,b) => a+b)
    return sum / num.length;
}
```



