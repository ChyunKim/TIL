// react-redux
import { createStore } from "redux";
import { useSelector, useDispath } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }

  const newState = { ...currentState };
  if (action.type === "PLUS") {
    return newState.number++;
  }
  return newState;
}
const store = createStore(reducer);

const number = useSelector((state) => state.number);
// useSelector 는 함수를 인자로 받음

const dispatch = useDispath();
dispatch({ type: "PLUS" });

// Reduc-toolkit
// 설정, 미들웨어 설치, 반복되는 코드, 불변성 유지의 어려움등의 문제점을 극복가능
