// switch 문
// 월을 한글로 반환.

var month = 1;
var monthName;

switch(month){
    case 1: monthName = '1월' 
        break;
    case 2: monthName = '2월'
        break;
    case 3: monthName = '3월'
        break;
    case 4: monthName = '4월'
        break;
    case 5: monthName = '5월'
        break;
    case 6: monthName = '6월'
        break;
    case 7: monthName = '7월'
        break;
    case 8: monthName = '8월'
        break;
    case 9: monthName = '9월'
        break;
    case 10: monthName = '10월'
        break;
    case 11: monthName = '11월'
        break;
    case 12: monthName = '12월'
        break;
    default : monthName = '해당월 없음'
}

// break 문을 생략한 폴스루가 유용한 예제
/*
    윤년인지 판별해서 2월의 days 계산
    윤년은 연수가 4로 나누어 떨어지는 해는 윤년으로 한다. (1988년, 1992년, 1996년, 2004년, 2008년, 2012년, 2016년, 2020년, 2024년, 2028년, 2032년, 2036년, 2040년, 2044년 ...)
    연수가 4, 100으로 나누어 떨어지는 해는 평년으로 한다. (1700년, 1800년, 1900년, 2100년, 2200년, 2300년...)
    연수가 400으로 나누어 떨어지는 해는 윤년으로 둔다. (1600년, 2000년, 2400년...)
*/

var year = 2000;
var month = 2;
var days = 0;

switch(month){
    case 1:case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = (( year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default : 
        console.log('해당월은 잘못됐습니다.')  
}



