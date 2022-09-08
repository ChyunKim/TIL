# SEO (검색엔진최적화)
검색엔진으로부터 웹사이트나 웹페이지에 대한 웹사이트 트래픽 품질과 양을 개선하는 과정

# SSR
server에서 브라우저가 해석가능한 html을 사용자가 요청할 때마다 생성해서 응답하는 것

## 장점
1. SEO 챙기기 쉬움
2. rendering 필요한 js를 번들에서 제외하여 트래픽 줄일수 있는 이점
3. 종단간 network call 횟수를 줄일 수 있음
   
## 단점
1. 서버의 부하가 커짐 (render를 서버에서 수행하므로) => 서버의 사양이 좋지 않다면 속도가 느려질 수 있음

<br> 
<br>

# next.js
SSR 뿐만 아니라 CSR도 지원 => 최초는 SSR로 동작하고 이후 페이지 이동은 CSR로 동작<br>
라우팅, 리액트 렌더링 이미 포함<br>

```
$npx create-next-app@latest --typescipt
```

위와 같이 보일러 플레이트 명령어로 설치 가능<br>
index.js 파일 기반으로 실행<br>

## pages
next.js는 roution이 자동으로 이루어짐
pages 이름 파일명만으로도 이동 가능<br>

a태그 사용시 spa로 이동이아닌 새로고침으로 새로운 페이지 이동<br>

따라서 Link 태그로 이동하기<br>

## useRouter
useRouter().query를 통해 parameter가져올 수 있음<br>

```javascript
import {useRouter} from 'next/router'

const Post = () => {
    const router = useRouter()
    console.log(router.query)

    return <div>Post Id : {router.query.id} </div>
}
```

만약 localhost:3000/post/abc 접속시
router.query 는  ```{"id" : "abc"}``` 라고 출력

## getServerSideProps
