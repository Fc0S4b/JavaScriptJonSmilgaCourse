// var, let, const
// let, const - blocked scoped {} - anything within {}
// var - function scoped

// global scope
console.log(amount); //undefined, pero si fuese amount declarada con let o const entonces arrojaría un error diciendo que no se puede acceder a la variable antes de inicializarla
var amount = 100;

function greet() {
  // local scope
  var random = 'some random value';
  console.log(`hello there ${amount} ${random}`);
}
// console.log(random); //random is not defined, solo disponible dentro de la función
// greet(); //hello there

// var total = 1000;
// var test = true;

// if (test) {
//   var total = 'oranges and onions';
//   console.log('hello there'); //hello there
// }
// console.log(total); //1000, antes de cambiar total dentro de if
// console.log(total); //oranges and onions

let total = 1000;
let test = true;

if (test) {
  // local scope
  let total = 'oranges and onions';
  let value = 'some random value';
  console.log('hello there');
}
{
  let total = 100;
  console.log(total);
}
{
  // not idea about the previous curly brace
  let total = 100;
  console.log(total);
}
console.log(total); // hello there
//1000

// console.log(value); //not defined
