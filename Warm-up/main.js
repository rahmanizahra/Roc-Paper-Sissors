// Using ALERT() METHOD:

//alert('Hello World');

// Using different methods for console:
console.log("This is a print");
console.error("This is an error");
console.warn("This is a warn");

// Difference between var/let/const: we could not change the value of a const variable.
// We have to assign a number to a const variable otherwise we will get an error. for var and let we do not have this rule. 

//let name;
//var Name;

// Different data types: String, Number, Boolean, null, undefined, Symbols

const name = "zahra";
const age = 30;
const rating = 3.5;
const iscOOL = true;
const x = null;
const y = undefined;
let z;

// get the type of variables:

console.log(typeof x);

// concatination ("old method "):

// console.log("my name is " + name + " and I am " + age);

// template string :

const hello = `My name is ${name} and I am ${age} years old `;
console.log(hello);

// methods for String:

const s = 'hello world!';
console.log(s.length);
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));


// Arrays: variables that hold multiple values:
// first way:
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
// second way: 
const nums = [1, 2, 3, 4, 5];
const fruits = ["apple", "orange", "banana"];
console.log(fruits[1]);
// add an element into the list:
fruits.push("mango");
console.log(fruits);
// add an element into the first:
fruits.unshift("strawberries");
console.log(fruits);
// remove the last element from the array
fruits.pop();
console.log(fruits);
// check sth is array:
console.log(Array.isArray('hello'));

// defining an object:

const person = {
    firstName: "john",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sport"],
    address: {
        street: "50 avenue",
        city: "Boston",
        state: "MA",
    }
}

console.log(person.firstName, person.lastName);
console.log(person.address.city);

// destruction of an object:

const { firstName, lastName } = person;
const { address: { city } } = person;
console.log(firstName);
console.log(city);

/// Define an array with object elements:

const todos = [{
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appt",
        isCompleted: false
    }
];
console.log(todos);

// change our codes to JSON:

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For loop

for (let i = 0; i < 6; i++) {
    console.log(i);
}

for (let n of todos) {
    console.log(n.text);
}

//while loop

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// forEach, map, filter

todos.forEach(function(n) {
    console.log(n.id);
})

const todoText = todos.map(function(n) {
    return n.text;

});
console.log(todoText);

const todoFilter = todos.filter(function(n) {
    return n.isCompleted;
})
console.log(todoFilter);

//If statments

let num = 30;
if (num < 20) {
    console.log(num);
} else {
    num = num - 5;
    console.log(num);
}

//ternary operator:

const first = 20;
const color = first > 10 ? 'red' : 'blue';
console.log(color);

//switch statment:

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
}

//Functions/ arrow functions:
function addNumbers(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}
addNumbers(1, 10);

const addNum = (num1, num2) => num1 + num2;

console.log(addNum(2, 3));

/// Object Oriented Programming (OOP)

//1. FUNCTION CONSTRUCTOR

function Person(lastName, dob) {

    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getfullName = function() {
        return `${this.firstName}${this.lastName}`;
    }
}

// Instantiate object

const person1 = new Person('rahmani', '2-9-1985');
console.log(person1.getBirthYear());

// class
class Student {
    constructor(id, course) {
        this.id = id;
        this.course = course;
    }
    getStudent() {
        return `${this.id}=${this.course}`;
    }
}
const student1 = new Student(1, "math");
console.log(student1.getStudent());