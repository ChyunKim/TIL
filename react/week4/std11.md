# context API
단순 props drilling 이 아닌, 매 컴포넌트 마다 해당 prop을 사용할 때 context API를 사용하면 Context를 만들어 원하는 값을 받아와서 사용 가능 <br>

## context 사용 <br>
새 context를 만들떄는 createContext 함수 사용 <br>

**1) createContext** <br>

```javascript
import {createContext} from 'react'

const ColorContext = createContext({color:'black'})

export default ColorContext;
```
위와 같이 파라미터에는 해당 Context 의 기본 상태 지정 <br><br>

**2) consumer** <br>
```javascript
const ColorBox = () => {
    return (
        <ColorContext.Consumer>
            { value =>(
                <div
                    styled = {{
                        width : '64px',
                        height : '64px',
                        background : value.color
                    }}
                />
            )}
        </ColorContext.Consumer>
    )
}

const App = () => {
    return (
        <div>
            <ColorBox />
        </div>
    )
}
```
Consumer라는 컴포넌트를 통해 색상을 조회가능 <br><br>

**3) Provider** <br>
Provider를 사용하면 Context의 value 변경 가능<br>

```javascript
const App = () => {
    return (
        <ColorContext.Provider value = {{color:'red'}}>
            <div>
                <ColorBox />
            </div>
        </ColorContext.Provider>
    )
}
```

**4) 동적 Context 사용** <br>

context 업데이트 방법<br>

```javascript
import {createContext, useState} from 'react'

const ColorContext = createContext ( {
    state : {color : 'black' , subcolor : 'red'}
    action : {
        setColor : () => {},
        setSubcolor : () => {}
    }
})

const Colotprovider = ({children}) => {
    const [color, setColor] = useState('black')
    const [subcolor, setSubcolor] = useState('red')

    const value = {
        state : {color, subcolor},
        actions : {setColor, setSubcolor}
    }

    return (
        <ColorContext.Provider value ={value}> {children} </ColorContext.Provider>
    )
}

const {Consumer : ColorConsumer} = ColorContext;

export {ColorProvider, ColorConsumer};

export default ColorContext;
```

```javascript
const ColorBox = () => {
    return (
        <ColorConsumer>
            {({state}) => (
                <>
                    <div 
                        style ={{
                            width : '64px',
                            height : '64px',
                            background : state.color
                        }}
                    />
                    <div 
                        style = {{
                            width : '32px',
                            height : '32px',
                            background :state.subcolor
                        }}
                    />
                </>
            )}
    )
}
```






