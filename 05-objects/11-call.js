// call - runs instantly, arguments -list of items

const john = {
  name: 'john',
  age: 24,
  greet: function () {
    console.log(this); //{ name: 'john', age: 24, greet: [Function: greet] }
    console.log(`hello, I'm ${this.name} and I'm ${this.age} years old`);
  },
};

const susan = {
  name: 'susan',
  age: 21,
};

// john.greet(); //hello, I'm john and I'm 24 years old
// this will fail
// susan.greet(); //susan.greet is not a function

function greet() {
  console.log(this); //{ name: 'john', age: 24, greet: [Function: greet] }
  console.log(`hello, I'm ${this.name} and I'm ${this.age} years old`);
}

// greet(); //un objeto global de window y hello, I'm undefined and I'm undefined years old

// const secondGreet = john.greet;
// secondGreet(); //no funciona la invocación

greet.call(john); //{ name: 'john', age: 24 }
// hello, I'm john and I'm 24 years old
//el parámetro de call es un this que apunta a john
greet.call(susan); //{ name: 'susan', age: 21 }
// hello, I'm susan and I'm 21 years old
greet.call({ name: 'peter', age: 30 }); //{ name: 'peter', age: 30 }
// hello, I'm peter and I'm 30 years old

john.greet.call(susan); //{ name: 'susan', age: 21 }
// hello, I'm susan and I'm 21 years old
