// Variables #1

const firstName = 'fco';
const last_name = 'sbo';
let address = 'main street';
address = 'first street';

console.log(firstName, last_name, address);

// concatenate strings #2

const street = 'main street';
const country = 'USA';

const fullMailingAddress = street + ' ' + country;

console.log(fullMailingAddress);

// numbers #3

const score1 = 98;
const score2 = 75;
const score3 = 45;

const totalScore = score1 + score2 + score3;
const avgScore = totalScore / 3;
console.log(totalScore, avgScore);

const plates = 20;
const people = 7;

let remainingPlates = plates % people;
console.log(remainingPlates);
remainingPlates++;

const message = 'There are ' + remainingPlates + ' plates avaible';

console.log(message);

// arrays #4

const fruits = ['apple', 'banana', 'orange', 45];

const firstFruit = fruits[0];

fruits[3] = 'lemon';
console.log(firstFruit, fruits);

// functions #5

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(25, 5);

console.log(order1, order2, order3);

// const calculateTotal = function (subTotal, tax){
//   return subTotal + tax;
// }

// objects #6

const car = {
  make: 'Dodge',
  model: 'Challenger',
  year: 1970,
  colors: ['black', 'red'],
  hybrid: false,
  drive: function () {
    console.log('driving....');
  },
  stop() {
    console.log('stopped!!!');
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();

//conditional statemens #7

const person1 = {
  name: 'susan',
  age: 25,
  status: 'resident',
};
const person2 = {
  name: 'bobo',
  age: 17,
  status: 'tourist',
};

if (person1.age > 18 && person1.status === 'resident') {
  console.log('you can cast a vote');
} else {
  console.log('you are not eligible');
}
if (person2.age > 18 && person2.status === 'resident') {
  console.log('you can cast a vote');
} else {
  console.log('you are not eligible');
}
