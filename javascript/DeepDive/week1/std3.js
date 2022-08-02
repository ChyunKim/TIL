// for문, while문, do while문
// for 반목문을 while 반복문과 do while문으로 바꿔보세요.

for (var i = 0; i<3; i++){
    console.log(`number ${i}!`);
}

var i = 0;
while(true) {
    console.log(`number ${i}!`);
    i++;
    if(i === 3) break;
}
// break 문은 코드 블록을 탈출한다.
// 레이블문, 반복문, switch 문을 제외한 블록에서 사용시 SyntaxError 가 발생한다.

var i = 0;
do  {
    console.log(i);
    i++;
}while(i < 3)


// 1~100 사이 숫자 중 7로 나누었을 때 나머지가 2 혹은 5인 숫자만 출력하기
for(var i = 0; i < 100; i++) {
    let a = i % 7;
    if( a === 2 || a === 5 ) console.log(i) 
}



