## position
요소의 위치를 지정해주는 기준<br>
**속성** 
- static : 기준없음 (상속등으로 설정된 position 리셋시 사용)
- relative : 요소자신을 기준
- absolute : 위치상 부모 요소를 기준 <span style="color:#FE9D20">
위치상 부모요소이므로, 기준 부모에 position: relative; 선언 필요</span>
- fixed : 뷰포트 (브라우저) 기준
- sticky : 스크롤 영역 기준
<br>top, bottom, lefr, right, z-index 와 같은 속성들과 같이 사용
<br>

>
**_실제 적용_**

```html
<div class = container>
  <div class = item>1</div>
  <div class = item>2</div>
  <div class = item>3</div>
</div>
```
상기와 같이 1개의 container 부모요소안 3개의 item 자식요소.

```css
.container {
    width: 300px;
    background-color: royalblue;
}

.container .item {
    border: 4px dashed red;
    background-color:orange;
}
.container .itme:nth-child(1) {
    width : 100px;
    height: 100px;

}
.container .itme:nth-child(2) {
    width : 140px;
    height: 70px;

}
.container .itme:nth-child(3) {
    width : 70px;
    height: 120px;

}
```

### Position 속성값
**1. position : relative; **

```css
.container .itme:nth-child(2) {
    width : 140px;
    height: 70px;
    position: relative;
    top: 50px;
    left : 120px;
}
```
2번째 박스요소만 position을 relative로 변경시,
자기 자신 요소를 기준으로 위치가 이동

즉, 그림에 2번째 박스위치를 기준으로 위에서 50px, 왼쪽에서 120px 만큼 이동하게 됨.

이러한 방식은 3번박스가 붕떠보이는 현상이 나타나 요소 자신을 기준으로 한 방식은 배치의 기준으로는 사용되지 않음.

그렇다면, position:relative는 어떠한 방식으로 사용되는가?
아래를 확인.

**2. position: absolute;**
```css
.container {
    width: 300px;
    background-color: royalblue;
    position: relative;
}

.container .itme:nth-child(2) {
    width : 140px;
    height: 70px;
    position: absolute;
    top: 30px;
    right: 100px;
}
```

위와 같이 2번째 박스를 absolute인 위치상 부모요소 기준으로 배치되므로 기준이 되는 부모요소에 position:relative; 로 지정해야 함.

만약 부모요소인 container에 position:static; 으로 지정시
position:relative; 로 선언된 부모요소를 찾게됨.

만약 position:relative; 선언된 부모요소가 없다면 뷰포트가 위치상 부모요소 기준으로 삼아 정렬될 수 있음.



## Z-index
요소의 쌓임 정도를 지정 
(요소 쌓임 조건에 2번째에 해당, 1번째 조건은 position)
숫자가 높을수록 위에 쌓임

z-index보다 postion의 값이 1번째 조건이므로, position의 속성값을 우선 따름

position 값이 static 이라면 position 값이 없음을 의미
아래와 같이 스타일을 선언했다고 가정

```css
.container {
    position : relative;
    width: 300px;
    background-color: royalblue;
}

.container .itme:nth-child(1) {
    position : static;
    z-index: 3;
    width : 100px;
    height: 100px;

}
.container .itme:nth-child(2) {
    position : absolute;
    z-index : 2;
    width : 140px;
    height: 70px;
v
.container .itme:nth-child(3) {
    position : absolute;
    z-index : 1;
    width : 70px;
    height: 120px;

}
```

위와 같이 스타일을 지정했다면,
1번째박스는 position이 static으로 지정되어 있어 z-index를 아무리 높게 설정하더라도 가장 뒷면에 쌓이게 된다.

1번째 박스를 position: relative; 로 변경된다면
z-index의 값의 수가 높을 수록 상단에 위치됨.
따라서 1번째박스가 가장 상단에 위치.


