var strname = 'str';
var age = 30;
var isFetching = true;
var arr = [1, 2, 3];
//Tuples
var arr1 = ['', true, 8];
//enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["User"] = "User";
    CardinalDirections["SuperUser"] = "SuperUser";
    CardinalDirections["Admin"] = "Admin";
    CardinalDirections["SuperAdmin"] = "SuperAdmin";
})(CardinalDirections || (CardinalDirections = {}));
// logs "User"
console.log(CardinalDirections.User);
// logs "SuperAdmin"
console.log(CardinalDirections.SuperAdmin);
var addFun = function (a, b) {
    return a * b;
};
var divFun = function (a, b) {
    return a / b;
};
var printFun = function (a) {
    console.log(a);
};
// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
var getName = function (a, b) {
    if (b) {
        return "".concat(a, " ").concat(b);
    }
    else
        return "".concat(a);
};
// create a function PhoneBook
// it should accept PersonDetails type argument
// create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
// Push the PersonDetails object in the array, from the function.
var arrOfObj = [];
var PhoneBook = function (arg) {
    arrOfObj.push(arg);
};
var u = {
    type: 'user',
    name: '',
    age: 10,
    occupation: ''
};
console.log(u.type);
