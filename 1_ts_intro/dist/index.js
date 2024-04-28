"use strict";
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
const num = 10;
//string
const str = 'str';
//boolean
const isDone = true;
//add two number
const x = 4;
const y = 5;
console.log(x + y);
//block scope variable
{
    let obj = { a: 1 };
}
//Array
let b = [1, 3, 4];
let c = [true, 'c', 1];
//Array of Objects
let d = [
    { id: 1, name: 'amaresh' },
    { id: 2, name: 'amaresh' },
];
let e = [{ a: 10 }, true];
//Object
let f = {
    x: 1,
    y: 'str',
    z: [1, 2, 3],
};
//Array of different values
let g1 = [{ a: 1 }, { a: 2, b: '', c: 1 }, { a: 3, b: '', c: '' }];
//function
const sum = (a, b) => a + b;
const sub = (a, b) => Math.abs(a - b);
let g2 = [{ a: 1 }, { a: 2, b: '', c: 1 }, { a: 3, b: '', c: '' }];
const sumcat = (a, b) => {
    return {
        x: a.x + b.x,
        y: `${a.y + b.y}`,
    };
};
console.log(sumcat({ x: 1, y: 2 }, { x: 2, y: 2 }));
//any- if you dont know the return type
const fn1 = () => {
    console.log('print');
};
//void- if a function returns nothing
const fn2 = () => {
    console.log('print');
};
//tuple - A tuple in TypeScript is a data structure that allows you to store a collection of values with different types.
//tuples are fixed in size and you cannot dynamically add or remove elements from a tuple.
var employee = [1, 'Steve'];
var user; // declare tuple variable
user = [1, 'Steve', true, 20, 'Admin'];
const user1 = [
    { name: 'A', age: 23, occupation: 'jdf' },
    { name: 'B', age: 20, occupation: 'jdf' },
    { name: 'C', age: 27, occupation: 'jdf' },
];
//keyof Interface
//The keyof operator takes an object type and produces a string or numeric literal union of its keys
const sortBay = (arr, key) => {
    let result = arr.sort((a, b) => {
        return a[key] < b[key] ? -1 : 1;
    });
    return result;
};
sortBay(user1, 'name');
let p2 = {
    name: 'Amaresh',
    age: 25,
    roll: '',
    phone: 1122,
    occupation: '',
    address: '',
};
let p1 = {
    name: 'Amaresh',
    age: 25,
    roll: '',
    phone: 1122,
    occupation: '',
    extra: '',
};
let teachers = [
    { name: 'b', age: 20, id: '1' },
    { name: 'a', age: 30, id: '2' },
    { name: 'c', age: 40, id: '3' },
];
let students = [
    { name: 'Aa', age: 20, roll: '3' },
    { name: 'Ab', age: 10, roll: '1' },
    { name: 'Ac', age: 15, roll: '2' },
];
//generic
// An Art of designing re-usable functions in Typescript, where we pass type along with function call
const sortByKey = (arr, key) => {
    const typeOfKey = typeof key;
    return [...arr].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};
const res1 = sortByKey(teachers, 'name');
console.log('res1: ', res1);
const res2 = sortByKey(students, 'roll');
console.log('res2: ', res2);
//Record
// In TypeScript, the Record type is a way to create an object
// type with a set of properties, where the keys of the properties
// are of a specific type, and the values of the properties are of another specific type.
let p4 = {
    loading: true,
    error: false,
};
//enum
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.
//TypeScript provides both numeric and string-based enums.
var GenderTypes;
(function (GenderTypes) {
    GenderTypes[GenderTypes["Male"] = 0] = "Male";
    GenderTypes[GenderTypes["Female"] = 1] = "Female";
})(GenderTypes || (GenderTypes = {}));
let newUser = [
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
let n = 12;
let s = 'str';
let bl = false;
let nl = null;
//Array
let arr19 = ['str1', 'str2'];
let arr191 = ['str1', 'str2'];
//Union - any amoung these
let marr = [2, 'str', [1, 3]];
//Object
let p3 = {
    loading: true,
    error: false,
    data: [],
};
//Array of Objects
let arrOfObj = [
    { name: 'Mr. A', age: 40, place: 'India' },
    { name: 'Mr. B', age: 50, place: 'USA' },
];
//function
const add = (a, b) => {
    return a + b;
};
add(2, 4);
//Literal Type - defaulty value
let country = ['INDIA', 'CHINA'];
let country1 = ['INDIA', 'CHINA'];
//optional value
//enum
var UserType;
(function (UserType) {
    UserType[UserType["User"] = 0] = "User";
    UserType[UserType["SuperUser"] = 1] = "SuperUser";
    UserType[UserType["Admin"] = 2] = "Admin";
    UserType[UserType["SuperAdmin"] = 3] = "SuperAdmin";
})(UserType || (UserType = {}));
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let User5 = [
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
let Ar = [
    ['a', 1],
    ['b', 2],
];
//Void
const sub1 = (a, b) => {
    console.log('sub:', Math.abs(a - b));
};
//any | unknow - any value
let n3;
n3 = 10;
n3 = 'str';
let n4;
n4 = 10;
n4 = 'str';
let n5;
n5 = n3;
console.log('n5: ', n5);
// n5 = n4; //Type 'unknow' is not assignable to type number
if (typeof n4 === 'number') {
    n5 = n4;
}
//never | void
//void - return undefined
//never - code break | internal error | throw Error
const Ar1 = [];
let teachers1 = [
    { name: 'b', age: 20, id: '1' },
    { name: 'a', age: 30, id: '2' },
    { name: 'c', age: 40, id: '3' },
];
let students1 = [
    { name: 'Aa', age: 20, roll: '3' },
    { name: 'Ab', age: 10, roll: '1' },
    { name: 'Ac', age: 15, roll: '2' },
];
//generic
const sortByKey1 = (arr, key) => {
    const typeOfKey = typeof key;
    return [...arr].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};
const res3 = sortByKey(teachers, 'name');
function login(cred) {
    console.log(cred);
}
const cred1 = { username: 'abc@test.com', password: 'secret' };
login(cred1);
const auth = {
    username: 'abc@test.com',
    password: 'secret',
    login(username, password) { },
};
//inference: variable automatic taking type of assigned value
console.log('hello world');
