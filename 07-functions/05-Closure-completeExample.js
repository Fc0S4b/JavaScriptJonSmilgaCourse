// Closure

// function newAccount(name, initialBalance) {
//   let balance = initialBalance;
//   function showBalance() {
//     console.log(`Hey ${name}, your balance is ${balance}`);
//   }
//   return { showBalance: showBalance };
// }

// const john = newAccount('john', 300);
// const bob = newAccount('bob', 1000);

// john.showBalance(); //Hey john, your balance is 300
// bob.showBalance(); //Hey bob, your balance is 1000

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount('john', 300);
const bob = newAccount('bob', 1000);

john.showBalance(); //Hey john, your balance is 300
john.deposit(400); //Hey john, your balance is 700
john.deposit(1000); //Hey john, your balance is 1700
john.withdraw(2100); //Hey, john, sorry not enough funds
bob.showBalance(); //Hey bob, your balance is 1000
