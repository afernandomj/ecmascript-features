// Optional Chaining
const user = {
	name: 'Alice',
	address: {
		city: 'Wonderland',
		postalCode: 12345,
	},
};

const postalCode = user.address?.postalCode;
console.log(postalCode); // Output: 12345

// Nullish Coalescing Operator
const value1 = null;
const value2 = 'Default Value';

const result = value1 ?? value2;
console.log(result); // Output: Default Value

// Dynamic Import
(async () => {
	const mathModule = await import('./math.js');
	console.log(mathModule.add(5, 3)); // Output: 8
})();

// BigInt
const bigIntValue = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
console.log(bigIntValue); // Output: 9007199254740992n
