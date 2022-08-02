// 타입 변환 (TypeCasting)
// 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환 = 타입캐스팅 이라 한다.
{ 
    var x = 10;
    var str = a.toString();
    // 숫자를 문자열로 타입 캐스팅

    console.log(typeof str, str);           // sting 10

    // 변수 x의 값은 변경되지 않음
    console.log(typeof x, x);               // number 10

}

{
    var x = 10;
    var str = x + '';
    // 암묵적 타입 변환

    console.log(typeof str, str);           // string 10
    console.log(typeof x, x);               // number 10
}


// 암묵적 타입 변환
// 더하기 연산자는 숫자보다 문자열이 우선시 되기 때문에 숫자형이 문자형을 만자면 문자혀으로 변환하여 연산된다. (!! Symbol + '문자열' 은 TypeError)
// 다른 연산자는 숫자형이 문자형보다 우선시 되기 때문에 문자형으로의 변환이 일어나지 않는다.
{
    var a = '10' + 2        // '102'      
    var b = 5 * '10'        //  50

}

// Boolean 
{
    Boolean(100);           //true
    Boolean('1');           //true
    Boolean('false');       //빈 문자열이 아니기 때문에 true
    Boolean(true);          //true
    Boolean(Object);        //true
    Boolean([]);            //true
    Boolean({});            //true
    Boolean(Infinity);      // true

    Boolean(0);             //false
    Boolean(NaN);           //false
    Boolean(null);          //false
    Boolean(undefined);     //false
    Boolean( );             //false
    Boolean('');            //빈 문자열 false

    const numb1 = 0;
    Boolean(numb1);         // false
    !!numb1;                // false
    !numb1;                 // true

    var a = !0              // true
    var b = !!0             // false
}


// 숫자 타입으로 변환
// 산술연산시 => -, /, * 연산을 할때 피연산자는 모두 코드 문맥상 숫자 타입이어야함
// 만약 숫자 타입로 변환이 어렵다면 NaN 값이 된다.
{
    var a = 1 - '1';        // a = 1-1 = 0
    var b = 1 * '10';       // b = 1*10 = 10    
    var c = 1 * 'one';      // c = 1 * one = NaN
}

// 각 타입 변환
{
    // 문자열 변환 2가지 방법
    String(1);              
    (1).toString();         

    // 숫자형 변환 2가지 방법
    Number('1');            
    parseInt('1');          

    // 불리언 타입 변환 방법
    Boolean('x');           // true
    !!'x';                  // true
}



