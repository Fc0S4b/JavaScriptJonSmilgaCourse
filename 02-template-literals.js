// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// interpolation ${} - insert expression(value)

const name = 'john';
const age = 25;
const sentence = "Hey it's" + name + ' and he is ' + age + ' years old';

const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
  4 + 4
}`;

console.log(sentence);
console.log(value);
