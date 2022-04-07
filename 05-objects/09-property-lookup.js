/*
property lookup
if child does not have ask parent
everything in JS is an object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  this.bank = 'Bank Of America'; //esta propiedad tiene más precedencia que la misma propiedad en prototype, si no está acá entonces buscará en prototype y si no terminará la búsqueda
}

const john = new Account('john', 200);
const bob = new Account('bob', 0);

Account.prototype.bank = 'CHASE';

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
// console.log(john.bank); // CHASE

console.log(bob);
console.log({}); // creamos una instancia de objetos que por ende tiene un proto de objetos
console.log([]); //creamos una instancia de array y por ende tenemos acceso al prototype de array que serían los métodos que se pueden usar para operar arrays
