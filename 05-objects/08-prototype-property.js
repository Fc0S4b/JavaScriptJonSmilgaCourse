/* 
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any property and methods or prototype can be accesed by every instance. prototype property returns a objetc
*/

function Account(name, initialBalance) {
  (this.name = name), (this.balance = initialBalance);
  // this.deposit = function (amount) {
  //   this.balance += amount;
  //   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  // };
}

const john = new Account('john', 200);
const bob = new Account('bob', 0);

console.log(john); //Account { name: 'john', balance: 200, deposit: [Function (anonymous)] }
console.log(bob); //Account { name: 'bob', balance: 0, deposit: [Function (anonymous)] }

// console.log(Account.prototype);
Account.prototype.bank = 'CHASE'; //asigné la propiedad bank con valor CHASE al prototipo de account, esto es necesario ya que no se necesita agregar cada vez que se crea una instancia
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
console.log(john.bank); // CHASE

john.deposit(300); //Hello john, your balance is 500
bob.deposit(1000); //Hello bob, your balance is 1000
