// 입력된 값이 해당 값이랑 같은지 확인하는 함수
function sameStr2(s,c) {
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) result++ 
    }    
    return result;
}

// 입력된 값이 해당 값이랑 같은지 확인하는 함수2 - split 활용 => 찾는 문자가 해당 문자열에 있는 경우 해당 문자를 기준으로 나눔 => 배열 길이가 찾고자 하는 문자 + 1
function sameStr(s,c) {
    let result = 0;
    result = s.split(c);
    return result.length-1;
}

// 주어진 문자가 대문자인지 확인하는 함수
function soultionUpper(s) {
    let result = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i].charCodeAt() > 64 ) result++
    } 
    return result;
}

// 주어진 문자가 대문자인지 확인하는 함수2
function soultionUpper2(s) {
    let result = 0;
    for(let x of s) {
        let num = x.charCodeAt()
        if(num >= 65 && num <= 90) result++
    }
    return result;
}

// 주어진 문자가 대문자인지 확인하는 함수3
function soultionUpper3(s) {
    let result = 0;
    for(let x of s) {
        if(x === x.toUpperCase()) result++
    }
    return result;
}

// 대소문자 변환
function upperFunc(s) {
    let result = '';
    for(let x of s) {
        if(x ===x.toUpperCase()) result  += x.toLowerCase();
        else result  += x.toUpperCase(); 
    }
    return result;
}

// 가징 긴 문자열 찾아 반환 하는 함수
function longStr(s) {
    let result = '';

    //Number.MIN_SAFE_INTEGER => JavaScript에서 안전한 최소 정수값
    let max = Number.MIN_SAFE_INTEGER;

    for(let x of s){    
        if(x.length > max) max = x.length;       
    }
    return result;
}

// 입력된 알파벳 숫자가 몇개인지 출력하는 함수
// 예, "KKHSSSSSE" => "K2H1S5E1" => "K2HS5E" => 1은 생략 
function numAlp() {
    let result = ''
    let cnt = 1;
    s  = s+''
    for(let i = 0; i < s.length-1; i++){
        if(s[i] === s[i+1]) cnt++
        else {
            result += s[i]
            if(cnt > 1) result += String(cnt);
            cnt = 1;
        }
    }
    return result;
}

// 앞으로 읽거나 뒤로 읽어도 같은 문자! 회문문자는 YES 출력하는 함수
// 대소문자 구문하지 않음
function roundRobin1(s) {
    let result = "YES"
    let left = 0;
    let right = s.length-1;

    let str = s.toLowerCase();

    while(left < right) {
        if(str[left] === str[right]){
            left++;
            right--;
        }
        else return "NO";
    }
    return result;
}

// 앞으로 읽거나 뒤로 읽어도 같은 문자! 회문문자는 YES 출력하는 함수2
// split 사용
function roundRobin2(s) {
    let result = "YES"
    let str = s.toLowerCase();
    if(str.split('').reverse().join('')!== s) return "NO"
    return result;
}

// 문자열 하나를 삭제하면 회문 문자가 되는지 확인하는 함수
// 회문문자가 아니여도 문자 하나만 삭제해도 회문이 되는지 확인
function ciecleRobin1(s) {
    let result = "YES"
    let left = 0;
    let right = s.length-1;

    let str = s.toLowerCase();

    while(left < right) {
        if(str[left] === str[right]){
            left++;
            right--;
        }
        else {
            if(str[left] === str[right-1]){
                right = right -2;
                left++;
            }
            else if(str[left+1] === str[right]){
                left = left+2;
                right--;
            }
            else return "NO"
        }
    }
    return result;
}

// 문자열 하나를 삭제하면 회문 문자가 되는지 확인하는 함수2
// 회문문자가 아니여도 문자 하나만 삭제해도 회문이 되는지 확인
function ciecleRobin2(s) {
    let result = "YES"
    let str = s.toLowerCase();
    while(left < right) {
        if(str[left] !== str[rigth]){
            let s1 = s.substring(left,right);
            let s2 = s.substring(left+1, right+1)
            if(s1 !== s1.split('').reverse().join('') && s2 !== s2.split('').reverse().join('')) return "NO"
            else{
                left++;
                right--;
            }
        }
    }
    return result;
}





