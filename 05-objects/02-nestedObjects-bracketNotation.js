// nested objects
// set variable as property value
// dot notation vs bracket notatio
//se puede reusar nombres de propiedades

// set variable as property value

const age = 60;
let random = 'random-value';
random = 'age';
const person = {
  name: 'john',
  // age: age, //// set variable as property value
  age, // ES6, si el key == value
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello, my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'coding addict',
      address: '123 main street',
    },
  },
  'random-value': 'random', //puede ser sin guión también
};

console.log(person.job.company.name); //coding addict
// console.log(person.work); //undefined
// console.log(person.work.title); //typeError, cannot read property tittle of undefined
console.log(person.job.title); //developer
console.log(person.job.company.address); //123 main street
console.log(person['random-value']); //mas de una palabra se accede con []
console.log(person['name']); //john
console.log(person[random]); //random, la diferencia está en que se asignará este valor a la variable random
