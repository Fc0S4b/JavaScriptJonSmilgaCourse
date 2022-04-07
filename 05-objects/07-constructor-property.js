// All objects in Javascript have access to constructor property that returns a constructor function that created it
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} adn I love React`
    );
  };
}

const john = new Person('john', 'sanders');
console.log(john.constructor); //[Function: Person] apunta a la función constructora de person

const bob = {};
console.log(bob.constructor); //[Function: Object] hay una función constructora que crea objetos en javascript llamada object
const list = [];
console.log(list.constructor); //[Function: Array] apunta a una función constructora llamada Array
const sayHi = function () {
  //función constructora de funciones constructoras
};
console.log(sayHi.constructor); //[Function: Function] también se obtiene acceso al constructor porque las funciones serían objetos
const susy = new john.constructor(`susy`, 'carpenter'); //estoy usando una instancia de john para construir susy
susy.fullName(); //My full name is susy carpenter adn I love React
