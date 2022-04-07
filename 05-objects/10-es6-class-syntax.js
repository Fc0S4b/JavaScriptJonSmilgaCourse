/*
ES6 Classes - syntactic sugar
prototypal inheritance
*/

// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
//   // this.bank = 'Bank Of America';
// }

// const john = new Account('john', 200);
// const bob = new Account('bob', 0);

// Account.prototype.bank = 'CHASE';

// Account.prototype.deposit = function (amount) {
//   this.balance += amount;
//   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
// };
// // console.log(john.bank); // CHASE

// console.log(john.bank);
// console.log(bob);

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = 'Chase';
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

// const john = new Account();
// console.log(john); //Account {} el objeto creado y su prototype
const john = new Account('john', 0);
console.log(john); //Account { name: 'john', balance: 0 }
console.log(john.name); //john
john.deposit(500); //Hello john, your balance is 500
console.log(john.bank); //Chase

const bob = new Account('bob', 0);
console.log(bob); //Account { bank: 'Chase', name: 'bob', balance: 0 }
console.log(bob.name); //bob
bob.deposit(1000); //Hello bob, your balance is 1000
console.log(bob.bank); //Chase
