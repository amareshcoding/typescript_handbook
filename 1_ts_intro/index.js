//typescript
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//number
var num = 10;
//string
var str = 'string';
//boolean
var isDone = true;
//add two number
var x = 4;
var y = 5;
console.log(x + y);
//block scope variable
{
    var a = { a: 1 };
}
//Array
var b = [1, 3, 4];
var c = [true, 'c', 1];
//Array of Objects
var d = [{ id: 1, name: 'amaresh' }];
var e = [{ a: 10 }, true];
//Object
var f = {
    x: 1,
    y: 'str',
    z: [1, 2, 3]
};
//Array of different values
var g1 = [{ a: 1 }, { a: 2, b: '', c: 1 }, { a: 3, b: '', c: '' }];
//function
var sum = function (a, b) { return a + b; };
var sub = function (a, b) { return Math.abs(a - b); };
var g2 = [{ a: 1 }, { a: 2, b: '', c: 1 }, { a: 3, b: '', c: '' }];
//
var sumcat = function (a, b) { return ({
    x: a.x + b.x,
    y: "".concat(a.y).concat(b.y)
}); };
console.log(sumcat({ x: 1, y: 2 }, { x: 2, y: 2 }));
//any- if you dont know the return type
var fn1 = function () {
    console.log('print');
};
//void- if a function returns nothing
// const fn2 = (): void => {
//   console.log('print');
// };
//topel - TypeScript introduced a new data type called Tuple.
//Tuple can contain two values of different data types.
//Tuple type variable
var employee = [1, 'Steve'];
var user; // declare tuple variable
user = [1, 'Steve', true, 20, 'Admin'];
var user1 = [
    { name: 'A', age: 23, occupation: 'jdf' },
    { name: 'B', age: 20, occupation: 'jdf' },
    { name: 'C', age: 27, occupation: 'jdf' },
];
var sortBay = function (arr, key) {
    var result = arr.sort(function (a, b) {
        return a[key] < b[key] ? -1 : 1;
    });
    return result;
};
var p1 = {
    name: 'Amaresh',
    age: 25,
    roll: '',
    phone: 1122,
    occupation: '',
    extra: ''
};
var p2 = {
    name: 'Amaresh',
    age: 25,
    roll: '',
    phone: 1122,
    occupation: '',
    address: ''
};
var teachers = [
    { name: 'b', age: 20, id: '1' },
    { name: 'a', age: 30, id: '2' },
    { name: 'c', age: 40, id: '3' },
];
var students = [
    { name: 'Aa', age: 20, roll: '3' },
    { name: 'Ab', age: 10, roll: '1' },
    { name: 'Ac', age: 15, roll: '2' },
];
//generic
var sortByKey = function (arr, key) {
    var typeOfKey = typeof key;
    return __spreadArray([], arr, true).sort(function (a, b) { return (a[key] > b[key] ? 1 : -1); });
};
var res1 = sortByKey(teachers, 'name');
console.log('res1: ', res1);
var res2 = sortByKey(students, 'roll');
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
