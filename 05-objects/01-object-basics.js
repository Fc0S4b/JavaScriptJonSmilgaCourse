// Objects Basics

/* 
Objects are collections of key (property) value pairs 
property values can be strings, numbers, booleans, arrays and
functions however if the property value is a function it's called a method
*/

// object literal sytanx, {}
// dot notation

const person = {
  name: 'john',
  age: 25,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello, my name is ${name}`);
  },
};

console.log(person); //todo el objeto
console.log(person.name); //john
const name = person.name;
console.log(name); //john
person.age = 60;
console.log(person); //objeto con el age : 60;
// delete property
// delete person.siblings;
// console.log(person); //se eliminó siblings del objeto
const siblings = delete person.siblings;
console.log(siblings); //true, indica que se eliminó correctamente siblings
