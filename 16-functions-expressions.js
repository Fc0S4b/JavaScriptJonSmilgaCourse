// Arrays, Functions and Objects
// expressions - another way define a function
// create a variable, assign to Function (not value), use var
// diff - hoisting, use - arrow func, libraries.

// function definition/declaration

function addValues(num1, num2) {
  return num1 + num1;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);
// function expression

const values = [firstValue, secondValue];
console.log(values);
