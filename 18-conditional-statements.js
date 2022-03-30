// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===

if (true) {
  console.log('hello world');
}

if (2 > 1) {
  console.log('hello world');
}

const value = 2 > 1;

if (value) {
  console.log('hello world');
}

const value2 = 1 > 2;

if (value2) {
  console.log('hello world');
} else {
  console.log('hello people');
}

const num1 = 4;
const num2 = 6;
const result = num1 >= num2;

if (num1 > num2) {
  console.log('first number is bigger than second');
} else if (result) {
  console.log('first number equal to a second');
} else {
  console.log('second numner is bigger than first');
}

const value3 = true;
if (!value3) {
  console.log('value is true');
}
