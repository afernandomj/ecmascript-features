// Rest/Spread Properties for Objects
const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	city: 'New York',
};

// Using Rest/Spread Properties to create a new object
const { firstName, lastName, ...rest } = person;

console.log('First Name:', firstName);
console.log('Last Name:', lastName);
console.log('Additional Info:', rest);
