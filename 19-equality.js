const num1 = 6;
const num2 = '6';

const value = num1 == num2; //check only value
const value2 = num1 === num2; //check value and type
const value3 = num1 != num2; //not equal
const value4 = num1 !== num2; //is not checking for the type it's just checking for valid

console.log(value); //true
console.log(value2); //false
console.log(value3); //false
console.log(value4); //true
