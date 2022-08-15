/*
    일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때, 
    맨 앞에 서 있는 선생님이 볼 수 있는 학생수가 몇 명인지 추출 (앞에 서있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않음.)
    매개변수 nums에 일렬로 선 학생의 키가 앞학생부터 차례대로 주어지면 선생님이 볼 수 있는 학생수를 반환하는 프로그램을 작성
*/
function solution(arr) {
    let result = 1;
    for(let i = 1; i < arr.length; i++){
        let flag = true;

        for(let j = i-1; j >= 0; j--){
            if(arr[j] >= arr[i]) {
                flag = false;
                break;
            } 
        }
        if(flag === true) result ++;
    }
    return result;
}

function solution(arr) {
    let result = 0;

    for(let i = 1; i <arr.length; i++) {
        let max = arr[i-1];
        if (arr[i] > max) {
            result++;
            max = arr[i]
        } 
    }
    return result;
}

/*
    OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제
    여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산
    1번 문제가 맞는 경우에는 1점으로 계산
    앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산
    또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산
    틀린 문제는 0점으로 계산
    예를 들어, 아래와 같이 10 개의 OX 문제에서 답이 맞은 문제의 경우에는 1로 표시하고, 틀린 경우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어, 총 점수는
    1+1+2+3+1+2=10 점
*/
function solution(arr) {
    let result = 1;
    let score = 0;
    for(let x of arr) {
        if(x === 1) {
            score++;
            result += score;
        } else score = 0;
    }
    return result;
}

/*
    수열이 주어지면 이 수열에서 연속된 부분 증가수열
    각 부분증가수열은 높이가 있는데, 증가수열의 높이란 증가수열의 첫항과 마지막항의 차를 의미
    매개변수 nums에 수열이 주어지면 여러 증가수열 중 가장 높은 부분증가수열을 찾아 그 높이를 반환하는 프로그램을 작성
    만약 수열이 [5, 2, 4, 7, 7, 3, 9, 10, 11]이 주어지면 가장 높은 부분증가수열은 [3, 9, 10, 11]이고, 높이는 8
    주의 : 이웃하는 두 수가 같을 경우 증가수열로 보지 않음
*/  
function solution(arr) {
    let result = 0;
    let height = 0;

    for(let i = 0; i < arr.length -1; i++) {

        if(arr[i] < arr[i+1]) {
            height += arr[i+1] - arr[i];
        }else {
            if(result < height)  {
                result  = height;
            }
            height = 0;
        }
    }
    if(result < height)  result  = height;

    return result;
}

/*
    바이토닉 수열이란 수열이 증가했다가 감소하는 수열을 의미
    매개변수 nums에 길이가 n인 수열이 주어지면 이 수열의 연속부분수열 중 가장 긴 바이토닉 수열을 찾아 그 길이를 반환하는 프로그램을 작성
    만약 [1, 3, 2, 5, 7, 4, 2, 5, 1]수열이 주어지면 이 수열의 연속부분수열 중 가장 긴 바이토닉 수열은 [2, 5, 7, 4, 2]이고, 답은 5
*/
function solution(arr) {
    let result  = 0;
    let peak = [];

    for(let i = 1; i < arr.length-1; i++) {
        if(arr[i-1] < arr[i] && arr[i] > arr[i+1]) peak.push(i)
    }
    
    for(let p of peak) {
        let lt = p;
        let rt = p;
        let len = 1;
        while(lt > 0 && arr[lt-1] < arr[lt]) {
            len++;
            lt--;
        }
        while(rt <arr.length-1 && arr[rt] > arr[rt+1]){
            len++;
            rt++;
        }
        result = Math.max(result, len);
    }

    return result;
}

/*
    

*/


