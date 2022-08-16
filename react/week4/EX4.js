// context

/*
    기존의 회원가입 form 컴포넌트를 react-router와 context를 활용하여 개선
    context를 활용하여 name 저장
*/

import React from "react";
import {
  BrowserRouter,
  Navigate,
  useParams,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const NameContext = React.createContext();

const Form = () => {
  const contextArray = React.useContext(NameContext);

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const idRef = React.useRef(null);
  const pwRef = React.useRef(null);
  const idInvalid = !(id.length >= 6 && id.length <= 20);
  const pwInvalid = !(pw.length >= 12 && pw.length <= 20);
  const handleClick = (e) => {
    if (idInvalid) {
      setId("");
      idRef.current.focus();
      alert("유효하지 않은 id입니다");
      e.preventDefault();
    } else if (pwInvalid) {
      setPw("");
      pwRef.current.focus();
      alert("유효하지 않은 password입니다");
      e.preventDefault();
    } else {
      const setName = contextArray[1];
      setName(id);
    }
  };
  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangePw = (e) => {
    setPw(e.target.value);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          ref={idRef}
          name="id"
          value={id}
          placeholder="6글자 이상 20글자 이하"
          onChange={handleChangeId}
        />
        {/* 에러메세지 자리 */}
        {idInvalid && "유효하지 않은 id입니다"}
      </div>
      <div>
        <input
          ref={pwRef}
          type="text"
          name="password"
          value={pw}
          placeholder="12글자 이상 20글자 이하"
          onChange={handleChangePw}
        />
        {/* 에러메세지 자리 */}
        {pwInvalid && "유효하지 않은 password입니다"}
      </div>
      <Link to="/">
        <button type="button" onClick={handleClick} disabled={!(id || pw)}>
          회원가입
        </button>
      </Link>
    </div>
  );
};

const Hello = () => {
  const contextArray = React.useContext(NameContext);
  const [name, setName] = contextArray;
  return <>name: {name}</>;
};

const App = () => {
  return (
    <NameContext.Provider value={contextArray}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Form />} />
          <Route
            path="/"
            element={!name ? <Navigate to="/register" replace /> : <Hello />}
          />
        </Routes>
      </BrowserRouter>
    </NameContext.Provider>
  );
};

export default App;
