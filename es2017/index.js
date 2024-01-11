// ES2017: Object.values() and Object.entries()
const obj = { one: 1, two: 2, three: 3 };
const values = Object.values(obj);
const entries = Object.entries(obj);
console.log('values: ', values, 'entries: ', entries);
// ^ [1, 2, 3] [ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] ]
