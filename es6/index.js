// let and const
let x = 5;
const PI = 3.14;

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

// Template Literals
const name = 'World';
console.log(`Hello, ${name}!`); // Output: Hello, World!

// Default Parameters
function greet(name = 'World') {
	console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, World!
greet('Alice'); // Output: Hello, Alice!

// Destructuring Assignment
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(firstName, lastName); // Output: John Doe

// Classes
class Animal {
	constructor(name) {
		this.name = name;
	}

	makeSound() {
		console.log('Some generic sound');
	}
}

class Dog extends Animal {
	makeSound() {
		console.log('Woof! Woof!');
	}
}

const myDog = new Dog('Buddy');
myDog.makeSound(); // Output: Woof! Woof!

// Promises
function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = 'Some asynchronous data';
			resolve(data);
		}, 2000);
	});
}

fetchData()
	.then((result) => console.log(result))
	.catch((error) => console.error(error));

// Modules (Assuming this code is in a separate file named 'math.js')
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Main file
import { add, subtract } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

// Symbol
const id = Symbol('id');
const user = {
	name: 'Alice',
	[id]: 123,
};

console.log(user[id]); // Output: 123
