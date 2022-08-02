# 라이프 사이클 (life cycle)
라이프 사이클 메서드의 종류는 총 아홉가지가 있음<br>
라이플사이클은 총 마운트, 업데이트, 언마운트 카테고리로 나눔<br><br>

## 라이프사이클
- 마운트 : DOM 이 생성되고 웹 브라우저 상에 나타나는 것
    - constructor : 컴포넌트를 새로 만들때마다 호출되는 클래스 생성자 메서드
    - getDerivedStateFromProps : props 있는 값을 state에 넣을 때 사용하는 메서드
    - render : 우리가 준비한 UI를 렌더링 하는 메서드
    - componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
- 업데이트 : 
  **아래와 같이 네가지 경우 업데이트**
    - props 바뀔때
    - state 바뀔때
    - 부모 컴포넌트가 리렌더링 될 때
    - this.forceUpdate 강제로 렌더링을 트리거 할 때

    컴포넌트를 업데이트 할 때 다음과 같은 메서드 호출

    - getDerivedStateFromProps : 마운트 과정에서도 호출되며 업데이트가 시작하기 전에도 호출됨, props 변화에 따라 state 값에도 변화를 주고 싶을때 사용
    - shouldComponentUpdate : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드 => true, false 반환
    - render : 컴포넌트 리렌더링
    - getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반형하기 바로 직전에 호출하는 메서드
    - componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

- 언마운트 : 마운트의 반대과정, 즉 컴포넌트를 DOM에 제거하는 것
    - componentDidUnmount : 컴포넌트가 웹 브라우저 상엣 사라지기 전에 호출하는 메서드

