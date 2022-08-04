// controlled input 유효성 검사 구현1

/*
    1. id는 6글자 이상 20글자 이하인 경우 유효
    2. password는 12글자 이상 20글자 이하인 경우 유효
    3. 유효하지 않는 input 밑에 "유효하지 않은 ~~~입니다!" 출력
    4. id와 password가 둘다 비어있으면 회원가입 버튼 disable 처리
    5. 유효하지 않은 input이 존재하는 경우 회원가입 버튼 클릭시 에커 alert 띄어주고 해당 input reset 하고 focus
    6. 모두 유효한 경우 회원가입 버튼 클릭시 "회원가입 성공!" alert 띄어주기
*/

import React from "react";

const App = () => {
    
    const [id, setId] = React.useState('')
    const [pwd, setPwd] = React.useState('')
    const [alertId, setAlertId] = React.useState('')
    const [alertPwd,setAlertPwd] = React.useState('')
    const focusId = React.useRef(null)
    const focusPwd = React.useRef(null)
    
    const evtId = (e) => {
        setId(e.target.value);
        setAlertId('유효하지 않은 id 입니다!')
        id.length >=6 && id.length <= 20 && setAlertId('')
    }

    
    const evtPwd = (e) => {
        setPwd(e.target.value);
        setAlertPwd('유효하지 않은 password 입니다!')
        pwd.length >=12 && pwd.length <= 20 && setAlertPwd('')
    }

    const handleClick = () => {
        alertId !== '' && focusId.current.focus() || setId('')
        alertPwd !== '' && focusPwd.current.focus() || setPwd('')
        alertId === '' && alertPwd === '' && alert('회원가입 성공!');
    };
    
    return (
        <div>
            <div>
                <input value = {id} ref = {focusId} type="text"name='id'placeholder='6글자 이상 20글자 이하' onChange={(e)=>{evtId(e)}}/>
                {alertId}
            </div>
            <div>
                <input value = {pwd} ref = {focusPwd} type="text" name='password' placeholder='12글자 이상 20글자 이하' onChange={(e)=>{evtPwd(e)}}/>
                {alertPwd}
            </div>
            <div>
                <button type="button" onClick={handleClick} disabled={!(id||pwd)}>회원가입</button>
            </div>
        </div>
    ); 
}
   
export default App;

