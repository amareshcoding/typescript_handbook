"use strict";
const strname = 'str';
const age = 30;
const isFetching = true;
const arr2 = [1, 2, 3];
const arr1 = ['', true, 8, false, 9];
//Tuples
const arr3 = [4, 'str', true];
//enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["User"] = "User1";
    CardinalDirections["SuperUser"] = "SuperUser";
    CardinalDirections["Admin"] = "Admin";
    CardinalDirections["SuperAdmin"] = "SuperAdmin";
})(CardinalDirections || (CardinalDirections = {}));
// logs "User"
console.log(CardinalDirections.User);
// logs "SuperAdmin"
console.log(CardinalDirections.SuperAdmin);
const addFun = (a, b) => {
    return a * b;
};
const divFun = (a, b) => {
    return a / b;
};
const printFun = (a) => {
    console.log(a);
};
// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
const getName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
const fullName = getName('Amaresh', 'Barik');
// create a function PhoneBook
// it should accept PersonDetails type argument
// create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
// Push the PersonDetails object in the array, from the function.
const arrOfObj1 = [];
const PhoneBook = (arg) => {
    arrOfObj1.push(arg);
};
const u = {
    type: 'user',
    name: '',
    age: 10,
    occupation: '',
};
console.log(u.type);
