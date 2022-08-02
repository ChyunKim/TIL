// 조건문(if문)

// if 문
// X가 짝수이면 result 변수에 문자열 '짝수'를 할당하고 홀수이면 '홀수'를 할당한다.
var x = 2;
var result;

if(x%2 === 0) result = '짝수'
else result = '홀수'

console.log(result);

// 삼항연산자로 표현
x % 2 === 1 ? result = '홀수' : result = '짝수';
result = x % 2 ? '홀수' : '짝수';


// '음수', '양수', '영' 3가지 경우의 수인 경우 삼항연산자로 표현
result = x ? (x > 0 ? '양수' : '음수') : '영';


