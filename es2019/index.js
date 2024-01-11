// ES2019: Array.prototype.flat
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
