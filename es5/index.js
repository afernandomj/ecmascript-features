// Strict Mode
'use strict';

// JSON Object
var jsonExample = '{"name": "John", "age": 30}';
var parsedData = JSON.parse(jsonExample);
console.log(parsedData.name); // Output: John

// Object.create()
var person = {
	name: 'Alice',
	sayHello: function () {
		console.log('Hello, ' + this.name);
	},
};

var newPerson = Object.create(person);
newPerson.name = 'Bob';
newPerson.sayHello(); // Output: Hello, Bob
