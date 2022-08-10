# css-in-js
외부 파일에 css 를 정의하는 대신 자바스크립트 코드에서 css 작성하는 방식<br>

## css-in-js 사용이유 <br>
css 파일 작성시 아래와 같은 상황들이 있으므로, css-in-js를 사용할 수 있음 
1. Global Namespace : 모든 스타일 Global에 선언되어 중복되지 않는 class 이름을 적용해야하는 문제
2. Dependencies : css 에서 에러를 감지하기 어려운 상황
    - css 클래스 이름을 변경하는 경우
    - 파일 간 css 코드를 이동하는 경우
    - class name 을 부여한 이후 css 코드 작성을 하지 않은 경우
3. Dead Code Elimination : 사용하지 않은 코드 관리 => 자바스크립트에서는 eslint 등으로 사용되지 않은 코드 파악 가능
4. Minification : css 명이 string으로 관리되므로 minify 어려움
5. Sharing Constants : css 와 js 간 변수 공유 어려움
6. Non-deterministicResolution
7. Breaking Isolation

<br>

## styled-components <br>
css-in-js 를 사용할 수 있게 도와주는 라이브러리<br>
styled-components 외에는 emotion도 사용 가능 <br><br>

### 작성법<br>

```javascript
import styled from 'styled-components'

const Sample = styled.div`
    width : 100px;
    height : 100px;
    background-color : red;
`
```
위와 같이 작성 가능 <br><br>

### Props 활용 <br>
JSX 문법을 활용하여 style 코드 내에서도 props 넘기기 가능 <br>
Template Literals 활용 가능 => 문자열 중간에 자바스크립트 사용가능 <br>

```javascript
const Sample = style.div`
    width : 100px;
    height : 100px;
    background-color : ${(props) => {
        console.log(props)
        return props.backgroundColor;
    }}
`
```

<br>

### 사용 예시 (+keyframes을 활용한 애니메이션) <br>

```javascript
const chage = (color) => keyframes`
    from {
        background-color:black;
    } 50% {
        background-color:${color};
    } 100% {
        background-color:red;
    }
`
const InputDiv = styled.div `
    width : 100px;
    height : 100px;
    animation-name : ${({color}) => color ? chage(color) : chage("blue")};
    animation-duration : 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`;

const App = () => {
    const [input, setInput] = React.useState('red')

    return (
        <>
            <InputDiv color = {input}></InputDiv>
            <input type ="text" placeholder="색상을 입력하세요." onChange={(e) => setInput(e.target.value)}/>
        </>
    )
}

export default App;
```

