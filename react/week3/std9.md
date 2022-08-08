# react-router
react 프로젝트에서 SPA를 쉽게 도입할 수 있도록 도와주는 라이브러리<br>
SPA => Single Page Application 약자로 새 페이지를 보여주고 싶으면 페이지 이동 대신 자바스크립트를 이용하여 기존 dom을 새로운 dom으로 대체 <br>

**사용전 준비** <br>

```git
$ npm i react-router-dom
```

해당 react-router 설치 필요 <br>

## 라우터 적용<br>
라우터 적용은 js 파일에서 BrowserRouter 라는 컴포넌트를 사용하여 구현<br>

```javascript
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Hello = () => (
    <Link to='/'>to home</Link>
)

const Main = () => (
    <Link to='/hello'>to hello</Link>
)

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/hello" element={<Hello />} />
            </Routes>
        </BrowserRouter>
    )  
}
```
- Route : 특정 주소에 컴포넌트 연결
- Link : 클릭시 해당 주소로 이동


## parameter <br>
페이지 주소를 정의하면서 유동적인 값을 전달해야할 때 사용 <br>

```javascript
import { BrowserRouter, Route, Routes, Link, useParams } from "react-router-dom";
const Hello = () => {
    const params = useParams();
    console.log(params); // Object { id: 'jinsang' }
    return (
        <Link to='/'>to home</Link>
    );
}

const Main = () => (
    <Link to='/hello/5'>to hello with id 5</Link>
)

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/profile/:id" element={<Hello />} />
            </Routes>
        </BrowserRouter>
    )
}
```
가변 parameter의 앞에 콜론(:)을 붙이면 뒤 string을 key로 하는 parameter 를 받을 수 있음 <br>