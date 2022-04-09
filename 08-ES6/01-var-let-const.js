// var, let, const
// define, udpate, redifine
// const cannot mutate primitive type

// define
var number = 100;
// console.log(number);//100
number = 200;
// console.log(number);//200
// redifine
var number = 'orange';
// console.log(number); //orange

let amount = 100;
console.log(amount); //100
amount = 200;
console.log(amount); //200
// let amount = 'orange'; //Identifier 'amount' has already been declared

const total = 100;
// console.log(total);
// total = 200; //Assignment to constant variable.
const person = { name: 'bob' };
person.name = 'john';
// person = 'orange' not allowed
console.log(person.name); //john
// const cannot mutate primitive type solo en reference type como array, valores en objetos
