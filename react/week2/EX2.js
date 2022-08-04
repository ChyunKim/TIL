// controlled input 유효성 검사 구현2

/*
    1. email input을 추가하고 "숫자혹은문자@숫자혹은문자.숫자혹은문자" 포맷을 만족하는 경우 유효로 판단
    2. input이 여러개일때도 활용할 수 있는 확장성 있는 코드로 변경
*/

/*
    들어가기전. 확장성 있는 코드로 만들기
    * 여러개의 input 상태 관리
    input의 개수가 여러개일때 useStste를 여러번 사용하고 onChange 도 여러개 사용하여 구현가능
    => 위와 같은 방법 보다는 input에 name을 설정하여 이벤트가 발생했을 떄 이 값을 참조하는 것이 더 좋은 방법
    => useState에서는 문자열이 아닌 객체 형태의 상태 관리
*/

import React from "react";

const App = () => {

    const [inputs, setInputs] = useState({
        id : '',
        password : '',
        email : ''
    });

    const [alerts, setAlerts] = useState({
        alerid : '',
        alerpwd : '',
        aleremail : ''
    });

    const { id, password, email } = inputs;
    const { alerid, alerpwd, aleremail } = alerts;

    const evetInput = (e) => {

        const { value, name } = e.target;
        
        setInputs({
            ...inputs,
            [name]: value,
        })

        name === 'id' &&  ( value.length < 6 || value.length > 20 ) && setAlerts({...alerts, alerid:"유효하지 않은 id 입니다"}) 
        name === 'password' &&  ( value.length < 12 || value.length > 20 ) && setAlerts({...alerts, alerpwd:"유효하지 않은 password 입니다"}) 

        name === 'id' &&  ( value.length >= 6 && value.length < 20 ) && setAlerts({...alerts, alerid:""}) 
        name === 'password' &&  ( value.length >= 12 && value.length <= 20 ) && setAlerts({...alerts, alerpwd:""}) 
    }

    return (
        <div>
            <div>
                <input value = {id} type="text" name="id" placeholder='6글자 이상 20글자 이하' onChange={evetInput}/>
                {alerid}
            </div>
            <div>
                <input value = {password} type="text" name="password" placeholder='12글자 이상 20글자 이하' onChange={evetInput}/>
                {alerpwd}
            </div>
            <div>
                <input value = {email} type="text" name="email" placeholder='aaa@aksjd.com 형태로 입력' onChange={evetInput}/>
                {aleremail}
            </div>
            <div>
                <button type="button">회원가입</button>
            </div>
        </div>
    ); 
}
   
export default App;

