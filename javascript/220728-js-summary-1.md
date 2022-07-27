# 정리
API 연동 프로젝트를 진행하면서 여러가지 개념들에 대해 더 정확히 알아보고 싶어 글을 쓰게 됩니다.

## input event 값
input 창에 사용자로부터 입력을 받고, 받은 입력에 대한 이벤트를 발행하는 구문을 구현하다가 change 이벤트와 input 이벤트는 정확히 다른 점을 알고 싶어 정리합니다.

### change, input
- change : 보통 change 이벤트는 요소 변경이 끝나면 발생합니다.
하지만 input과 같은 텍스트 입력 요소인 경우에는 요소 변경이 끝날 때가 아닌 포커스를 잃었을때 이벤트가 발생합니다.

- input : 사용자가 값을 수정할 때마다 발생합니다.
키보드 이벤트와 달리 input 이벤트는 어떤 방법으로든 값을 변경할 때 마다 발생합니다. 
※ 마우스를 사용하여 글자를 붙어 넣는 등과 같이 키보드가 아닌 다른 수단으로 값을 변경시킬 때도 input 이벤트가 발생합니다.

## Dom API
자바스크립트에서 Dom에 접근하고 수정하는 부분을 구현하다 항상 innerHTML로만 요소를 추가했으므로, innerText, innerHTML, textcontent 가 정확히 어떤 점이 다른지 정리해보겠습니다.

### innerHTML, innerText, textcontent
``` html
<div>
  	Hello, World!!!     Nice Me you
  <span style='display:none'>Bye</span>
</div>
```
- innerHTML : 요소 안에 있는 HTML 전체 내용을 가져옵니다.
- innerText : 요소 안에서 사용자에게 보여지는 텍스트 값을 읽어옵니다.
- textcontent : 요소 안의 모든 텍스트 값을 읽어옵니다.

코드를 살펴보면, 

```javascript
const div = document.querySelector('div');

console.log(div.innerHTML);						
console.log(div.innerText);
console.log(div.textContent);

```

```javascript 
console.log(div.innerHTML);
```
```
Hello, World!!!     Nice Me you
<span style='display:none'>Bye</span>
```

위와 같이 출력됩니다.
즉, 요소안의 모든 HTML 내용을 그대로 가지고 온다고 이해하면 됩니다.

```javascript 
console.log(div.innerText);
```

innerText는 보여지는 텍스트만을 출력합니다.
따라서, 

```
Hello, World!!! Nice Me you
```

위와 같이 출력됩니다.
공백도 사라지며 display:none은 값의 텍스트는 사용자가 볼수 없기에 출력되지 않음을 확인할 수 있습니다.

```javascript 
console.log(div.textContent);
```
```
Hello, World!!!     Nice Me you
Bye
```
textContent는 요소가 갖고 있는 모든 텍스트를 출력함으로 display:none의 값은 상관없이 기입된 텍스트를 모두 출력한다고 이해할 수 있습니다.


