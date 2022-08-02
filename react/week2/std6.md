# key
리액트에서 key는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내려 함<br>
key 가 없을 때는 virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화 감지<br>
key 가 있다면 이 값을 사용하여 어떤 변화가 일어났는지 빠르게 알아낼 수 있음<br><br>

## Key 설정<br>
key 값을 설정할 때는 map 함수의 인자로 전돨되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정<br>
key 값은 언제나 유일해야 하면 데이터가 가진 고윳값으로 key 값 설정 <br>

```javascript
const ListFunc = () => {
    const name = ['kim', 'lee', 'park','jung']
    const nameList = name.map(item=> <li>{item}</li>)
    return <ul>{nameList}</ul>
}  
```
위와 같은 ul 태그 안 name의 요소들을 출력할 때 map 함수를 사용하여 구현 가능<br>
개발자도구로 확인 시 key porp이 없다는 경고 메세지 표시<br>

```javascript
const ListFunc = () => {
    const name = ['kim', 'lee', 'park','jung']
    const nameList = name.map(item=> <li key = {item}>{item}</li>)
    return <ul>{nameList}</ul>
}  
```
위와 같이 key 값을 item 고윳값으로 설정가능<br>
하지만 index로 key 값 설정시 효율적으로 렌더링 못함<br>

## 동적인 배열 렌더링<br>
index 값을 key 로 사용하면 리렌더링이 비효율적 하지만, 이런한 상황에서도 고윳값을 만들 수 있음 <br>

```javascript
const ListFunc = () => {
    const [name, setName] = React.useState([
        {id : 1, text : "kim"},
        {id : 2, text : "lee"},
        {id : 3, text : "park"},
        {id : 4, text : "jung"},
    ])
    const nameList = name.map(item=> <li key = {item.id}>{item.text}</li>)
    return <ul>{nameList}</ul>
}
```

위와 같이 index 대신 name.id 값을 지정해여 key 값을 설정가능 <br>

버튼을 클릭할 때 마다 input value 값 리스트 추가<br>

```javascript
const ListFunc = () => {
    const [name, setName] = React.useState([
        {id : 1, text : "kim"},
        {id : 2, text : "lee"},
        {id : 3, text : "park"},
        {id : 4, text : "jung"},
    ])

    const [inputValue, setInput] = React.useState('')
    const [itemId, setId] = React.useState(5);

    const nameList = name.map(item => <li key = {item.id} onDoubleClick = {()=>{remove(item.id)}} >{item.text}</li>)
    const inputFunc = (e) => {
        setInput(e.target.value);
    }
    const clickFunc = () => {
        const addName = name.concat({
            id:itemId,
            text: inputValue
        })   
        setId(itemId+1);
        setName(addName);
        setInput('');
    }

    const remove = id => {
        const NameList = name.filter(item => item.id !== id)
        setName(NameList)
    }
    
    return(
        <div>
            <input value = {inputValue} type = "text" placeholder="글자입력" onChange={inputFunc}/>
            <button type ="image" src ="./reset.png"onClick = {clickFunc}>추가</button>
            <ul>{nameList}</ul>
        </div>
    )
}
``` 
이런식으로 버튼을 클릭할때마다 input value 값을 추가하도록 설정 가능<br>
ul의 li 더블 클릭시 태그 해당 id 값 요소 삭제 <br> 

