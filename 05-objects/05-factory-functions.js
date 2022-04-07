// Blue Print
// Factory functions and Constructor Functions
// Factory functions

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName} adn i love Js`);
//   },
// };

// const bob = {
//   firstName: 'bob',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };
// que pasa si cambiamos un método en un objeto y este mismo cambio lo necesitamos en los otros métodos de otros objetos? con dos objetos es fácil actualizar los cambios, pero con 30000 no, para esto fabricamos una nueva funcion

// function createPerson() {
//   return {
//     firstName: 'john',
//     lastName: 'sanders',
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName} ${this.lastName} adn I love Js`
//       );
//     },
//   };
// }

// const john = createPerson();
// john.fullName(); //My full name is john sanders adn I love Js

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} adn I love Js`
      );
    },
  };
}

const john = createPerson('john', 'anderson');
john.fullName();
const bob = createPerson('bob', 'apple');
bob.fullName();
const susy = createPerson('susy', 'jordan');
susy.fullName();
// My full name is john anderson adn I love Js
// My full name is bob apple adn I love Js
// My full name is susy jordan adn I love Js
