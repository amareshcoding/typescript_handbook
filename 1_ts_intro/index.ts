//typescript
//command: tsc index.ts
//command: tsc index.ts --watch
//command: npx tsc index.ts

//command: npm init -y
//command: tsc --init
//Configure tsconfig.json file

//dayatypes in Js?
//number
//string
//boolean
//undefined
//null
//array Array<>
//object {}

//number
const num: number = 10;
//string
const str: string = 'str';
//boolean
const isDone: boolean = true;

//add two number
const x: number = 4;
const y: number = 5;
console.log(x + y);

//block scope variable
{
  let obj: { a: number } = { a: 1 };
}

//Array
let b: number[] = [1, 3, 4];
let c: Array<boolean | string | number> = [true, 'c', 1];

//Array of Objects
let d: Array<{
  id: number;
  name: string;
}> = [
  { id: 1, name: 'amaresh' },
  { id: 2, name: 'amaresh' },
];
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
const sum: Function = (a: number, b: number): number => a + b;

const sub: Function = (a: number, b: number): number => Math.abs(a - b);

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

const sumcat: Function = (a: arg, b: arg): result => {
  return {
    x: a.x + b.x,
    y: `${a.y + b.y}`,
  };
};

console.log(sumcat({ x: 1, y: 2 }, { x: 2, y: 2 }));

//CAR INTERFACE
interface Car {
  wheels: 4 | 6;
  engine: 'v8' | 'v6'; //String literal
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
const fn2 = (): void => {
  console.log('print');
};

//tuple - A tuple in TypeScript is a data structure that allows you to store a collection of values with different types.
//tuples are fixed in size and you cannot dynamically add or remove elements from a tuple.
var employee: [number, string] = [1, 'Steve'];
var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, 'Steve', true, 20, 'Admin'];

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

//keyof Interface
//The keyof operator takes an object type and produces a string or numeric literal union of its keys
const sortBay = (arr: User2[], key: keyof User2): User2[] => {
  let result = arr.sort((a, b) => {
    return a[key] < b[key] ? -1 : 1;
  });
  return result;
};
sortBay(user1, 'name');

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

//extends: interface inheritance
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

//type inheritance
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

//Generic
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
// An Art of designing re-usable functions in Typescript, where we pass type along with function call
const sortByKey = <T>(arr: T[], key: keyof T): T[] => {
  const typeOfKey = typeof key;
  return [...arr].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};
const res1 = sortByKey<Teacher>(teachers, 'name');
console.log('res1: ', res1);
const res2 = sortByKey<Student>(students, 'roll');
console.log('res2: ', res2);

//Record
// In TypeScript, the Record type is a way to create an object
// type with a set of properties, where the keys of the properties
// are of a specific type, and the values of the properties are of another specific type.
let p4: Record<string, boolean> = {
  loading: true,
  error: false,
};

//enum
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
//TypeScript provides both numeric and string-based enums.
enum GenderTypes {
  'Male',
  'Female',
}
type UsersType = {
  name: string;
  age?: number; //optional field
  email: string;
  gender: GenderTypes; //enum field
};
interface UsersType1 {
  name: string;
  age?: number; //optional field
  email: string;
  gender: GenderTypes; //enum field
}

let newUser: Array<UsersType> = [
  {
    name: 'Mr. A',
    age: 30,
    email: 'a@a.com',
    gender: GenderTypes.Male,
  },
];

//Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
//Almost all features of an interface are available in type,
//the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

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
const add: Function = (a: number, b: number): number => {
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
  userType: UserType;
  age?: number; //optional field
  email: string;
  gender: Gender; //enum field
};
let User5: Array<U> = [
  {
    userType: UserType.Admin,
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
console.log('n5: ', n5);
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
// class Car {
//   constructor(n, b) {
//     this.name = n;
//     this.wheels = 4;
//     this.brand = b;
//   }
//   printName() {
//     console.log(this.name);
//   }
// }

// const car1 = new Car('duster', 'renault');

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


//fetch data
// interface IPost {
//   title: string;
//   description: string;
//   id: number;
// }
// const fetchData = async <ResponseType>(
//   path: string
// ): Promise<ResponseType[]> => {
//   const res = await fetch(`http://example.com${path}`);
//   return res.json();
// };

// (async () => {
//   const posts = await fetchData<IPost>('/post');
//   posts[0].id;
// })();

//structural typing or duck typing
interface Icred {
  username: string;
  password: string;
}
function login(cred: Icred) {
  console.log(cred);
}

const cred1 = { username: 'abc@test.com', password: 'secret' };
login(cred1);

//define type of methods
interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): void;
}
const auth: IAuth = {
  username: 'abc@test.com',
  password: 'secret',
  login(username: string, password: string) {},
};

//inference: variable automatic taking type of assigned value

console.log('hello world');
