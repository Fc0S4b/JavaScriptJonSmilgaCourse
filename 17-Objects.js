// Arrays, Functions and Objects
// Objects - key/value pairs methods
// dot notation

const person = {
  name: 'Banana',
  lastName: 'kong',
  age: 40,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  // greeting: function () {
  //   console.log('hello my name is Banana');
  // } en ES6 ahora se puede escribir así:
  greeting() {
    console.log('hello my name is Banana');
  },
};

const age = person.age;
console.log(age);

person.name = 'bob';

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

// una función dentro de un objeto sería un método
