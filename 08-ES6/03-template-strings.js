// Template Strings/Literals
// `` backticks above tab key left of 1 key

const name = 'bob';
const lastName = 'sanders';
const age = 25;

const phrase =
  'My full name is ' +
  name +
  ' ' +
  lastName +
  " and I'm " +
  age +
  ' years old.';
const phrase2 = `My full name is ${name} ${lastName.toUpperCase()} and I'm ${
  age * 2
} years old `;
console.log(phrase); //My full name is bob sanders and I'm 25 years old.
console.log(phrase2); //My full name is bob SANDERS and I'm 50 years old
