// 타입호환성

let sub :1 = 1;
let sup:number = sub;
// sub1 = sup1 
// error! Type 'number' is not assignable to type '1'

let sub2:number[] = [1];
let sup2:object = sub2;
// sub2 = sup2 
// error! Type '{}' is missing the follwing properties from type 'number[]' : length, pop, push, concat, and 16 more

let sub3: [number,number] = [1,2];
let sup3: number[] = sub3;
// sub3 = sup3;
// error! Type 'numberp[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.

let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;
// any 때문에 가능

// never는 일반적으로 함수의 리턴 타입으로 사용 => 함수의 리턴 타입으로 never가 사용될 경우,
// 항상 오류를 출력하거나 리턴값을 절대로 내보내지 않음을 의미 => 무한루프
let sub5: never = 0 as never;
let sup5: number = sub5;


// 1. 공변 => 같거나 서브 타입인 경우 할당이 가능
let sub7:string = '';
let sup7:string | number = sub7;

let sub8:{a:string; b:number} = {a:'',b:1};
let sup8:{a:string|number; b:number} = sub8;

let abc:string ='abc'
let e:number =1
let efg:string|number = abc;
efg = e;

// array
let sub9:Array <{a:string; b:number}> = [{a:'', b:1}]
let sup9:Array <{a:string|number; b:number}> = sub9


// 2. 반병 => 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능
class Person {}
class Developer extends Person {
    conding() {}
}
class StartupDevelper extends Developer {
    burning() {}
}
function tellme(f : (d:Developer) => Developer) {}

tellme(function dtoD(d:Developer):Developer {
    return new Developer();
})

tellme(function person(d:Person):Developer{
    return new Developer();
})

// strictFunctionTypes 옵션을 켜면 error
/*
tellme(function sToD(d:StartupDevelper):Developer {
    return new Developer();
})
*/

