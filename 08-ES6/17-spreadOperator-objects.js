// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them
// ES2018 - ES8

// const person = {name: 'john', job: 'developer'};
// const newPerson = {...person};
// console.log(newPerson); //{ name: 'john', job: 'developer' }

// const person = { name: 'john', job: 'developer' };
// const newPerson = { ...person, city: 'chicago' };
// console.log(person); //{ name: 'john', job: 'developer' }
// console.log(newPerson); //{ name: 'john', job: 'developer', city: 'chicago' }

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(person); //{ name: 'john', job: 'developer' }
console.log(newPerson); //{ name: 'peter', job: 'developer', city: 'chicago' }
