//typescript
//command: tsc index.js
//command: tsc index.js --watch
//command: npx tsc index.js

//dayatypes in Js?
//number
//string
//boolean
//undefined
//null
//array Array<>
//object {}

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
//
//
//
//
//WEB_19
let n: number = 12;
let s: string = 'str';
let bl: boolean = false;
let nl: null = null;

//Array
let arr19: string[] = ['str1', 'str2'];
let arr191: Array<string> = ['str1', 'str2'];

//Union - any amoung these
let marr: Array<number | string | number[]> = [2, 'str', [1, 3]];

//Object
let p3: {
  loading: boolean;
  error: boolean;
  data: [];
} = {
  loading: true,
  error: false,
  data: [],
};

//Record
let p4: Record<string, boolean> = {
  loading: true,
  error: false,
};

//Array of Objects
let arrOfObj: Array<{
  name: string;
  age: number;
  place: string;
}> = [
  { name: 'Mr. A', age: 40, place: 'India' },
  { name: 'Mr. B', age: 50, place: 'USA' },
];

//function
const add = (a: number, b: number): number => {
  return a + b;
};
add(2, 4);

//Literal Type - defaulty value
let country: Array<'INDIA' | 'CHINA'> = ['INDIA', 'CHINA'];

//type
type C = 'INDIA' | 'CHINA';
let country1: Array<C> = ['INDIA', 'CHINA'];

//optional value
//enum
enum UserType {
  'User',
  'SuperUser',
  'Admin',
  'SuperAdmin',
}
enum Gender {
  'Male',
  'Female',
}
type U = {
  name: string;
  age?: number; //optional field
  email: string;
  gender: Gender; //enum field
};
let User5: Array<U> = [
  {
    name: 'Mr. A',
    age: 30,
    email: 'a@a.com',
    gender: Gender.Male,
  },
  // {
  //   name: 'Mr. A',
  //   email: 'a@a.com',
  //   gender: Gender.Male,
  // },
];

//Tuple - restrict the number of item in an array
type A = [string, number];

let Ar: A[] = [
  ['a', 1],
  ['b', 2],
];

//Void
const sub1 = (a: number, b: number): void => {
  console.log('sub:', Math.abs(a - b));
};

//any | unknow - any value
let n3: any;
n3 = 10;
n3 = 'str';
let n4: unknown;
n4 = 10;
n4 = 'str';
let n5: number;
n5 = n3;
// n5 = n4; //Type 'unknow' is not assignable to type number
if (typeof n4 === 'number') {
  n5 = n4;
}

//never | void
//void - return undefined
//never - code break | internal error | throw Error
const Ar1: [] = [];
// Ar1.push(8) //Error

//class
// class Car{
//   constructor(n,b){
//        this.name = n;
//        this.wheels = 4;
//        this.brand = b;
//   }
//   printName(){
//        console.log(this.name);
//   }
// }

// const car1 = new Car("duster", "renault");


//Generic
//
interface Teacher1 {
  name: string;
  age: number;
  id: string;
}
interface Student1 {
  name: string;
  age: number;
  roll: string;
}
let teachers1: Teacher1[] = [
  { name: 'b', age: 20, id: '1' },
  { name: 'a', age: 30, id: '2' },
  { name: 'c', age: 40, id: '3' },
];
let students1: Student1[] = [
  { name: 'Aa', age: 20, roll: '3' },
  { name: 'Ab', age: 10, roll: '1' },
  { name: 'Ac', age: 15, roll: '2' },
];

//generic
const sortByKey1 = <T>(arr: T[], key: keyof T): T[] => {
  const typeOfKey = typeof key;
  return [...arr].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};
const res3 = sortByKey<Teacher>(teachers, 'name');
console.log('res1: ', res1);



