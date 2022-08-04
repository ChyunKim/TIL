// Set 객체
// Set 객체는 중복되지 않는 유일한 값들을 저장하는 집합
// Set 객체 메서드

const set = new Set([1,2,2,3]);
// 위와 같은 배열을 Set 객체를 활용하면 set에 1,2,3 만 들어감
let size = set.size;            // 3
set.add(4)                      // 4 원소 추가 => set = [1,2,3,4]
let p1 = set.has(2);            // 찾고자 하는 아이템이 있으면 true, 없으면 fasle
let p2 = set.has(5);            // false


// 중복문자제거 함수1
function norepeatStr(s) {
    // Set으로 배열화 시킨후, join 함수로 string 반환
    let result = [...new Set(s.split(''))].join('');
    return result;
}

// 중복문자제거 함수2 filter 활용
function norepeatStr2(s) {
    let result = s.split('').filter((item, index, self)=>self.indexof(item) === index).join('')
    return result;
}

// 공통문자열
// N개의 문자열이 주어지면 이 문자열의 최대 공통 접두사를 출력하는 프로그램
function commonStr(s) {
    let result = ""
    let len = Number.MAX_SAFE_INTEGER;
    s.forEach(item => len = Math.min(len, item.length))
    for(let i = 0; i < len; i++){
        let set = new Set();
        s.forEach(item => set.add(item[i]))
        if(set.size === 1) result += s[0][i]
        else break;
    }
    return result;
}
console.log(commonStr(["long", "longtime", "longset"]))                 // "long" 출력



