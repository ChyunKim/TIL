/*
    Map 객체
    1. Map 객체는 키와 값의 쌍으로 정보를 저장하는 자료구조
    2. Map은 키 값으로 문자, 문자열 뿐만 아니라 숫자도 사용가능
*/

// Map 객체 메서드
const map = new Map();

/*
    학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록
    투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표
    매개변수 s에 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 주어지면, 
    어떤 기호의 후보가 학급 회장이 되었는지 반환하는 프로그램을 작성
    반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합
*/
function solution(s) {
    let result;
    let tmp = 0;
    const str = new Map(); 

    for(let x of s) {
        str.set(x, (str.get(x) || 0)+1)
    }
    for(let [key, value] of str) {
        if(tmp < value) {
            tmp = value;
            result  = tmp;
        }
    }
    return result;
}


/*
    문자열에서 한번만 사용한 문자
    한번만 사용한 문자 중 문자열에서 가장 먼저 나타난 문자의 인덱스 번호를 반환하는 프로그램을 작성
    인덱스는 1부터 시작 한번만 사용한 문자가 없을 경우 -1를 반환
*/
function solution(s) {
    const str = new Map(); 

    for(let x of s) {
        str.set(x, (str.get(x) || 0)+1)
    }

    for(let i = 0; i <s.length; i++){
        if(str.get(s[i]) === 1) return i+1;
    }
    return -1;
}


/*
    문자열에서 두 번 이상 사용한 문자
    두 번 이상 사용한 문자 중 문자열에서 가장 먼저 두 번 이상 나타난 문자를 반환하는 프로그램을 작성
    두 번 이상 사용한 문자가 없을 경우 -1를 반환
*/
function solution(s) {
    const str = new Map();

    for(let x of s) {
        str.set(x, (str.get(x) || 0) + 1 )
        if(str.get(x) === 2) return x;
    }
    return -1;
}

/*
    빈도수가 1인 가장 큰 숫자 => 수열의 원소 중 빈도수가 1인 가장 큰 숫자
    매개변수 nums에 수열이 주어지면 빈도수가 1인 숫자 중 가장 큰 숫자를 찾아 반환하는 프로그램을 작성
    빈도수가 1인 숫자가 없으면 -1를 반환
*/
function solution(nums) {
    let cnt = Array(1001).fill(0)                               // 크기가 크면 map 을 사용하는 것 권장 ( 만이상일때 )
    for(let x of nums) {
        cnt[x]++
    }    
    for(let i = 1000; i >=1; i--){
        if(cnt[i] === 1) return i;
    }
    return -1;
}

/*
    자기 분열수란 배열의 원소 중 자기 숫자만큼 빈도수를 갖는 숫자를 의미
    만약 배열이 [1, 2, 3, 1, 3, 3, 2, 4] 라면 1의 빈도수는 1, 2의 빈도수는 2, 3의 빈도수는 3, 4의 빈도수는 1
    매개변수 nums에 자연수가 원소인 배열이 주어지면 이 배열에서 자기 분열수 중 가장 작은 수를 찾아 반환하는 프로그램을 작성
    자기 분열수가 존재하지 않으면 -1를 반환
    제한사항 : nums의 원소는 1,000,000,000 을 넘지 않음
*/
function solution(nums) {

    const n = new Map()
    let result = Number.MAX_SAFE_INTEGER

    for(let x of nums) {
        n.set(x, (n.get(x)|| 0)+1)
    }

    for(let [key, value] of n) {
        if(key === value) {
            if(result > key) result = key;
        }
    }
    if(result = Number.MAX_SAFE_INTEGER) return -1;
    return result;
}

/*
    같은 빈도수 만들기
    소문자 a, b, c로 이루어진 문자열이 주어지면 해당 문자열에서 a, b, c의 최소의 개수를 추가하여 a, b, c의 빈도수가 동일하게 만들기
    동일빈도수가 되는 최소 추가 개수를 알파벳 a, b, c순으로 배열에 저장하여 반환하는 프로그램을 작성
    만약 주어진 문자열이 "aaabc" 라면 빈도수는 a:3 , b:1, c:1 이고 최소 개수를 추가하여 동일하게 하려면,
    b를 2개 추가, c를 2개 추가하면 모두 빈도수가 3개로 동일
*/
function solution(s) {
    const alp = new Map()
    let result = []
    let max = 0;

    for(let x of s) {
        alp.set(x, (alp.get(x)|| 0)+1)
    }
    
    for(let [key, value] of alp) {
        if(value > max) max = value; 
        result.push(max - value);
    }
    return result;
}

/*
    서로 다른 빈도수 만들기
    소문자로 이루어진 문자열이 주어지면 해당 문자열의 문자를 지워서 모든 문자의 빈도수가 서로 다르게 만들기
    만약 주어진 문자열이 "aaabbbcc" 라면 빈도수는 a:3 , b:3, c:2 이고 b문자를 2개 지우면 a:3 , b:1, c:2 가 되어 빈도수가 모두 다름
    매개변수 s에 문자열이 주어지면 s의 모든 문자의 빈도수가 서로 다르도록 하기 위해 지워야 할 최소 개수를 반환하는 프로그램을 작성
*/
function solution(s) {
    const str = {}
    const set = new Set()
    let result = 0;

    for(let x of s){
        str[x] = (str[x] || 0) + 1;
    }

    for(let x of Object.keys(str)){
        while(set.has(str[x])){
            result++;
            str[x]--;
        }
        if(str[x] === 0) continue;
        set.add(str[x])
    }

    return result;
}
