// typescript static type 
// Type
let a : number;
a = 39;
// a = 'Mark';  String 형태 불가능

function hello(b : number ) {
    console.log(`Hello ${b}`)
}
hello(12);          
//hello('kim');  String 형태 불가능


// boolean type
let isDone : boolean = false;
isDone = true;
console.log(typeof isDone);


// number type
let decimal : number = 6;
let hex : number = 0xf00d;
let binary : number = 0b1010;
let notANumber : number = NaN;
let underscoreNum : number = 1_000_000;

// String type
let firstname : string = 'kim';
let age : number = 20;

let sentencs : string = `Hello, My name is ${firstname}. I'm ${age}`


// null & undefined
// 모든 타입의 subtype으로 사용
let u : undefined = undefined;
let n : null = null;

let v : void = undefined;

let union : string | null = null;

union = "kim";

// object
const person1 : object | null = ({name : 'lee'})

const person2 = Object.create({name : 'kim', age : 20})
// primitive type 이 아닌 것을 나타내고 싶을때 사용하는 타입


// Array
let list : number[] = [1,2,3];
let arr : (number|string)[] = [1,2,3,"lee"];

let list2 : Array<number> = [1,2,3];  // js, jsx 파일과 충동날 수 있으므로 사용 자제


//Tuple
let x : [string, number];
x = ['hello', 20];

// x = [10,'kim'];      error
// x[2] = "world"       tuple이 2자리이므로 error

const user : [string, number] = ['kim', 20]
let [first, second] = user;

first = 'lee'
second  = 19;


// any
// 어떠한 타입이여도 상관없는 타입
function returnAny(msg: any) :any {
    console.log(msg);
}


// unknown
// 모르는 변수의 타입을 묘사해야 할때
// any보다 Type-sage한 타입
declare const maybe : unknown;

if(maybe === true) {
    const aBoolean : boolean = maybe;
}

if(typeof maybe === "string") {
    const aString : string = maybe;
}


// never
// 일반적으로 리턴에 사용
// 모든 타입의 subtype
// any 조차도 never에 할당 불가
function error(msg:string) : never {
    throw new Error(msg);
}

function fail() {
    return error("failed")
}

function infiniteLoop() : never {
    while(true) {

    }
}

let hi : string = 'hello'

if(typeof hi !== 'string') {
    hi;
}

declare const nv : string | number;

if(typeof nv !== 'string') {
    nv;
}


// void
// 리턴 타입 (undefined) 으로 많이 사용
function returnVoid(msg:string):void {
    console.log(msg);

    return undefined;
}

returnVoid('리턴이 없음')

