# 별찍기 실습
반복문을 활용한 별찍기는 알고리즘 기초 문제로 자주 등장하는 실습 예제중 하나입니다. 아래 예제를 통해 반복문으로 별을 찍어보도록 하겠습니다.

## 라인별 별찍기

               *****
               *****
               *****
               *****
               *****
           
위와 같이 별을 찍어봅시당!

```javascript

let linecount = 5;
let star = '';

for (let i = 0; i < linecount; i++){ 
  for(let j = 0; j < linecount; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);

```


## 직각삼각형 별찍기-1

                *
                **
                ***
                ****
                *****
                  
```javascript
for(i = 0; i < linecount; i++) {
	for(j = 0; j <= i; j++) {
      star += '*';
    }
  	star += '\n';
}
console.log(star);

```

## 직각삼각형 별찍기-2

                 *****
                 ****
                 ***
                 **
                 *


```javascript
for(i = 0; i < linecount; i++) {
	for(j = 0; j < linecount - i; j++) {
      star += '*';
    }
  	star += '\n';
}
console.log(star);
```

## 피라미드 별찍기

                   *
                  ***
                 *****
                *******
               *********

위와 같이 출력하기 위해서는 공백을 출력하는 for문이 하나 더 필요합니다. 

```javascript
for(i = 0; i < linecount; i++) {
	for(j = linecount; j > i; j--) {
      	star += ' ';
    }
  	for(k = 0; k < (2*i)+1; k++){
   		star += '*';
    }
  	star('\n');
}
console.log(star);

```


