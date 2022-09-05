// 타입별칭
// Interfece 비슷

type MystringType = string;
const str = 'world'
let myStr : MystringType = 'hello'
myStr = str;

// union 타입
let person : string | number = 0;
person = 'kim'

type StringOrNumber = string | number;
let another:StringOrNumber = 0;
another = 'Anna';

// tuple
let p : [number, string] = [20,'kim']

type PTuple = [number, string];
let other:PTuple = [18,'lee']

// Function
type EatType = (food: string) => void;

const func:EatType = (abc) => {
    console.log(abc)
}

func('kim');

// func(18)
// error