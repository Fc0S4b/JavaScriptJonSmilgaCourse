// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy item

const numbers = [23, 45, 66, 80, 2345];

console.log(Math.max(4, 5, 6, 7, 88)); //88
console.log(Math.max(numbers)); //not a number
console.log(Math.max([...numbers])); //2345

const john = ['john', 'sanders'];

const sayHello = (name, lastName) => {
  console.log(`hello ${name} ${lastName}`);
};

// sayHello(john[0], john[1]):
sayHello(...john); //hello john sanders
