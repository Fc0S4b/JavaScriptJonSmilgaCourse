// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

newAccount('susan', 500)(); //Hey susan, your balance is 500

const john = newAccount('john', 300);
const bob = newAccount('bob', 1000);

//always remember the values
john(); //Hey john, your balance is 300
bob(); //Hey bob, your balance is 1000
