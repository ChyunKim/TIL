// react-router => react 프로젝트에서 SPA 를 쉽게 도입할 수 있도록 도와주는 라이브러리

/*
    1. id는 6글자 이상 20글자 이하인 경우 유효
    2. password는 12글자 이상 20글자 이하인 경우 유효
    3. 유효하지 않는 input 밑에 "유효하지 않은 ~~~입니다!" 출력
    4. id와 password가 둘다 비어있으면 회원가입 버튼 disable 처리
    5. 유효하지 않은 input이 존재하는 경우 회원가입 버튼 클릭시 에커 alert 띄어주고 해당 input reset 하고 focus
    6. 모두 유효한 경우 회원가입 버튼 클릭시 "Hello!"  적힌 페이지로 이동
    7. 로그인 완료 페이지에는 input과 button 추가하여 input 입력하고 button 클릭하면 해당 내용 게시글 생성
    8. 게시글 클릭시 해당 게시글 datail 페이지로 이동 => 뒤로 가기 클릭시 기존에 작성된 글쓰기 페이지로 이동
*/

import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link, useParams } from "react-router-dom"

const Post = ({list}) => {
    const params = useParams();
    return (
      <>
          Post :  {list[params.id]}!
          <Link to = "/hello" ></Link>  
      </>
    )
    
}

const Hello = ({list,setList}) => {
    const [input, setInput] = React.useState('')

    const eventClick = () => {
      if(input === '')  alert('게시물을 입력하세요')
      else {
        const tmp = list.concat(input)
        setList(tmp)
        setInput('')
      }
    }
    return (
      <>
        Hello!
        <br />
        <input value = {input} type="text" onChange={(e) => {setInput(e.target.value)}}></input>
        <button onClick={eventClick} >추가</button>
        <ul>
            {list.map((item,index) => <Link key = {index} to = {`/post/${index}`} > <li>{item}</li> </Link>)}
        </ul>
      </>
    );
} 
const Form = () => {

    const [inputs, setInputs] = useState({
        id : '',
        password : '',
    });

    const [alerts, setAlerts] = useState({
        alerid : '',
        alerpwd : '',
    });

    const { id, password } = inputs;
    const { alerid, alerpwd } = alerts;
    const focusId = React.useRef(null)
    const focusPwd = React.useRef(null)

    const evetInput = (e) => {

        const { value, name } = e.target;
        
        setInputs({
            ...inputs,
            [name]: value,
        })

        name === 'id' &&  ( value.length < 6 || value.length > 20 ) && setAlerts({...alerts, alerid:"유효하지 않은 id 입니다"}) 
        name === 'password' &&  ( value.length < 12 || value.length > 20 ) && setAlerts({...alerts, alerpwd:"유효하지 않은 password 입니다"}) 

        name === 'id' &&  ( value.length >= 6 && value.length < 20 ) && setAlerts({...alerts, alerid:''}) 
        name === 'password' &&  ( value.length >= 12 && value.length <= 20 ) && setAlerts({...alerts, alerpwd:''}) 
    }

    const handleClick = () => {
        if(alerid !== '') {
            focusId.current.focus()
            setInputs({...inputs, id:''})
        }else if (alerpwd !== '') {
            focusPwd.current.focus()
            setInputs({...inputs, password : ''})
        }
        
    }

    return (
        <div>
            <div>
                <input ref ={focusId} value = {id} type="text" name="id" placeholder='6글자 이상 20글자 이하' onChange={evetInput}/>
                {alerid}
            </div>
            <div>
                <input ref = {focusPwd} value = {password} type="text" name="password" placeholder='12글자 이상 20글자 이하' onChange={evetInput}/>
                {alerpwd}
            </div>
            <div>
                { !(alerid || alerpwd) ?  <Link to={`/hello`}><button type="button" onClick={handleClick} > 회원가입</button></Link> : <Link to = "/" ><button type="button" onClick={handleClick} disabled = {!(id&&password)}>회원가입</button></Link>  }
            </div>
        </div>
    ); 
}

const App = () => {
  const [list, setList] = React.useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/hello" element={<Hello list = {list} setList={setList} />} />
        <Route path="/post/:id" element={<Post list = {list} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;