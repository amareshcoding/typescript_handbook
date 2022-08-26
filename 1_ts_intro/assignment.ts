const strname: string = 'str';
const age: number = 30;
const isFetching: boolean = true;

const arr2: Array<number> = [1, 2, 3];

//Tuples
const arr1: Array<string | boolean | number> = ['', true, 8];

//enum
enum CardinalDirections {
  User = 'User',
  SuperUser = 'SuperUser',
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin',
}

// logs "User"
console.log(CardinalDirections.User);
// logs "SuperAdmin"
console.log(CardinalDirections.SuperAdmin);

const addFun: Function = (a: number, b: number): number => {
  return a * b;
};

const divFun: Function = (a: number, b: number): number => {
  return a / b;
};

const printFun: Function = (a: string): void => {
  console.log(a);
};

//2
// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number
interface Obj {
  title: string;
  status: boolean;
  id: number;
}
// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
const getName = (a: string, b: string): string => {
  if (b) {
    return `${a} ${b}`;
  } else return `${a}`;
};

// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types
interface Address {
  houseNumber: number;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  country: string;
}
// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional
interface PersonDetails {
  Prefix?: any;
  phones: number[];
  addresses: string[];
  email?: string;
  firstname: string;
  lastname: string;
  middlename?: string;
}
// create a function PhoneBook
// it should accept PersonDetails type argument
// create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
// Push the PersonDetails object in the array, from the function.
const arrOfObj: Array<PersonDetails> = [];
const PhoneBook: Function = (arg: PersonDetails): void => {
  arrOfObj.push(arg);
};

// Write a function to retrieve the type of the user or admin

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

const u: User = {
  type: 'user',
  name: '',
  age: 10,
  occupation: '',
};
console.log(u.type);




