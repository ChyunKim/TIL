## Flex

보통 요소표시 방법으로 ```display:block;```  ```display:inline-block;```
위와 같은 방식으로 사용하지만, block 이나 inline이 아닌 flex로 정의.
```display:flex;``` ```display:inline-flex;``` 로 사용 가능


**Flex는 container, Item으로 나눌 수 있음**
- Container : Item을 감싸는 부모요소
- Item : container에 포함된 자식요소 (Item을 정렬하기 위해선 Contaienr 필수)

### Flex Container 속성
- flex-direction
- flex-wrap
- jusify-content
- align-content
- align-items

#### flex-direction 속성값
- ```flex-direction:row;``` : Items를 왼쪽에서 오른쪽으로 표시(default 값)
- ```flex-direction:row-reverse;```: Items를 왼쪽에서 오른쪽으로 row의 반대축으로 표시
- ```flex-direction:column;``` : Items를 위에서 아래쪽으로 표시
- ```flex-direction:column-reverse;```: Items를 왼쪽에서 오른쪽으로 column 반대축으로 표시

### flex-wrap 속성값
Items 여러줄 묶음을 설정
- ```flex-wrap:nowrap;``` : 모든 Items를 여러줄로 묶지 않음 (default 값)
- ```flex-wrap:wrap;``` : 모든 Items를 여러줄 묶음
- ```flex-wrap:wrap-reverse;``` : 모든 Itemsf를 여러줄로 묶고 역방향으로 표현

기본적으로 Items는 줄바꿈이 되지 않음
따라서, 한줄안에서 모든 Items를 표현하기 위해 지정된 크기를 무시하여 가변하여 한줄로 표현됨
줄바꿈을 위해선 ```flex-wrap:wrap;``` 사용 필요

### justify-content 속성값
주축의 정렬 방법 설정
주축을 수평정렬 한다는 조건하에 수평정렬이라 이해할 수 있음
- ```justify-content:flex-start;```:Items를 시작점 정렬
- ```justify-content:flex-end;```:Items를 끝점 정렬
- ```justify-content:center;```:Items를 가운데 정렬

### align-content 속성값
```flex-wrap:wrap;```으로 여러줄일때만 사용 가능한 속성
교차축을 여러줄로 정렬, 주축을 수평정렬 한다는 조건 하에 수직정렬 방법이라 이해할 수 있음
- ```align-content:stretch;``` : Container를 교차축을 채우기 위해 Items 늘림 (default 값)
- ```align-content:flex-start;``` : 상단 시작점으로 정렬
- ```align-content:flex-start;``` : 하단 끝점으로 정렬
- ```align-content:center``` : 가운데 정렬

### align-items 속성값
Item 한줄일때 사용
만약 Item이 2줄이상이라면 ```align-content``` 속성 우선 적용
- ```align-content:stretch;``` : Container를 교차축을 채우기 위해 Items 늘림 (default 값)
- ```align-content:flex-start;``` : 상단 시작점으로 정렬
- ```align-content:flex-start;``` : 하단 끝점으로 정렬
- ```align-content:center``` : 가운데 정렬
- ```align-content:baseline``` : 문자 기준선에 정렬



## Flem Items 속성
- order : Item들간의 순서 결정
- flex-grow : Item 증가 너비 비율 설정
- flex-shrink : Item 감소 너비 설정
- flex-basis : Item들의 너비 비율 공간 배분을 하기전 너비 설정


### order 속성값
Item들간의 순서를 결정하며 숫자가 작을수록 우선순위가 높음
음수값 허용되므로 음수값일수록 우선순위 높음

### flex-grow / flex-shrink / flex-basis 사용
```flex-grow```의 기본값은 0
```flex-shrink```의 기본값은 1
```flex-grow``` 값을 주면 해당 비율로 너비가 증가

단, flex-basic의 값을 어떻게 주냐에 따라서 같은 값으로 ```flex-grow``` 값을 주더라도 다른 비율로 나타나게 됨

```flex-basic: 1;``` 로 설정해야 내부의 content와 상관없이 주어진 grow의 비율대로 너비가 증가함


