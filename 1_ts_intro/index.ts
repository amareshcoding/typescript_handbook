//typescript

//number
var num: number = 10;
//string
var str: string = 'string';
//boolean
var isDone: boolean = true;

//add two number
var x: number = 4;
var y: number = 5;
console.log(x + y);

//block scope variable
{
  let a: { a: number } = { a: 1 };
}

//Array
let b: number[] = [1, 3, 4];
let c: Array<boolean | string | number> = [true, 'c', 1];

//Array of Objects
let d: Array<{
  id: number;
  name: string;
}> = [{ id: 1, name: 'amaresh' }];
let e: Array<{ a: number } | boolean> = [{ a: 10 }, true];

//Object
let f: {
  x: number;
  y: string;
  z: number[];
} = {
  x: 1,
  y: 'str',
  z: [1, 2, 3],
};

//Array of different values
let g1: Array<{
  a: null | undefined | number; //null // undefined
  b?: string; //optional
  c?: number | string; //between number and string
}> = [{ a: 1 }, { a: 2, b: '', c: 1 }, { a: 3, b: '', c: '' }];

//function
const sum: Function = (a: number, b: number) => a + b;

const sub: Function = (a: number, b: number) => Math.abs(a - b);

// console.log(sum(3, 5));
// console.log(sub(8, 5));

//INTERFACE
interface Obj1 {
  a: null | undefined | number;
  b?: string;
  c?: number | string;
}
let g2: Array<Obj1> = [{ a: 1 }, { a: 2, b: '', c: 1 }, { a: 3, b: '', c: '' }];

//ARGUMENT INTERFACE
interface arg {
  x: number;
  y: number;
}
//RESULT INTERFACE
interface result {
  x: number;
  y: string;
}
//
const sumcat: Function = (a: arg, b: arg): result => ({
  x: a.x + b.x,
  y: `${a.y}${b.y}`,
});

console.log(sumcat({ x: 1, y: 2 }, { x: 2, y: 2 }));

//CAR INTERFACE
interface Car {
  wheels: 4 | 6;
  engine: 'v8' | 'v6';
  stearing: 'a' | 'b';
  doors: 4;
}
interface suv extends Car {
  lengrn: '10m';
}

//any- if you dont know the return type
const fn1 = (): any => {
  console.log('print');
};
//void- if a function returns nothing
// const fn2 = (): void => {
//   console.log('print');
// };

//topel - TypeScript introduced a new data type called Tuple.
//Tuple can contain two values of different data types.
//Tuple type variable
var employee: [number, string] = [1, 'Steve'];
var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, 'Steve', true, 20, 'Admin'];

//
interface User2 {
  name: string;
  age: number;
  occupation: string;
}
const user1: User2[] = [
  { name: 'A', age: 23, occupation: 'jdf' },
  { name: 'B', age: 20, occupation: 'jdf' },
  { name: 'C', age: 27, occupation: 'jdf' },
];

const sortBay = (arr: User2[], key: keyof User2): User2[] => {
  let result = arr.sort((a, b) => {
    return a[key] < b[key] ? -1 : 1;
  });
  return result;
};

//inheritance
interface User1 {
  name: string;
  age: number;
  roll: string;
}
interface Admin1 {
  phone: number;
  occupation: string;
}
//type
type Person = User1 &
  Admin1 & {
    extra: string;
  };
let p1: Person = {
  name: 'Amaresh',
  age: 25,
  roll: '',
  phone: 1122,
  occupation: '',
  extra: '',
};
//
interface Person1 extends User1, Admin1 {
  address: string;
}
let p2: Person1 = {
  name: 'Amaresh',
  age: 25,
  roll: '',
  phone: 1122,
  occupation: '',
  address: '',
};

//
interface Teacher {
  name: string;
  age: number;
  id: string;
}
interface Student {
  name: string;
  age: number;
  roll: string;
}
let teachers: Teacher[] = [
  { name: 'b', age: 20, id: '1' },
  { name: 'a', age: 30, id: '2' },
  { name: 'c', age: 40, id: '3' },
];
let students: Student[] = [
  { name: 'Aa', age: 20, roll: '3' },
  { name: 'Ab', age: 10, roll: '1' },
  { name: 'Ac', age: 15, roll: '2' },
];

//generic
const sortByKey = <T>(arr: T[], key: keyof T): T[] => {
  const typeOfKey = typeof key;
  return [...arr].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};
const res1 = sortByKey<Teacher>(teachers, 'name');
console.log('res1: ', res1);
const res2 = sortByKey<Student>(students, 'roll');
console.log('res2: ', res2);

//dayatypes in Js?
//number
//string
//boolean
//undefined
//null
//array Array<>
//object {} //Record
//
//npx tsc index.js
//
//
//
