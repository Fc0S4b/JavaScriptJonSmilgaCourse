// Numbers
// Loosely Typed = don't declare type

const number = 34;
let pants = 2.466;
pants = 'are great';

const number2 = 2.456;
const number3 = '2.456';
// en consola los números serán azules y los strings estarán en negro

// basic operations
const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(number);
console.log(pants);
console.log(number2);
console.log(number3);

// additional features

// numbers
// +=, -=, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division

let numbeR = 40;
// number = number + 5 -->
numbeR += 5;

// numbeR = number + 1 -->
numbeR++;

const slices = 10;
const children = 3;
// módulo sería el resto de la división
const amount = slices % children;
console.log(amount);

// orden de operaciones
const random2 = 4 + 6 + 10 * 10;
const random3 = (4 + 6 + 10) * 10;

console.log(random2);
console.log(random3);
