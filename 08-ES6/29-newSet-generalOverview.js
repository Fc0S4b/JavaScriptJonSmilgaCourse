// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear() -removes all items
// has(value)

// iterators
// entries(), keys(), values(), forEach()

// const unique = new Set();
// console.log(unique); // Set(0) {}

// const unique = new Set();

// unique.add(`first`);
// unique.add(`first`);
// unique.add(`first`);
// unique.add(`first`);
// unique.add(`first`);

// console.log(unique); //Set(1) { 'first' } solo un tipo de valor agregado

// const unique = new Set();

// const random = 'third';

// unique.add(`first`);
// unique.add(`second`);
// unique.add(random);
// unique.add(`first`);
// unique.add(4);

// console.log(unique); //Set(4) { 'first', 'second', 'third', 4 }

const unique = new Set();

const random = 'third';

unique.add(`first`);
unique.add(`second`);
unique.add(random);
unique.add(`first`);
unique.add(4);

// const result = unique.delete(`third`);
// console.log(result); //true

const result = unique.delete(`five`);
console.log(result); //false

const isValue = unique.has(4);
console.log(isValue); //true

console.log(unique);
