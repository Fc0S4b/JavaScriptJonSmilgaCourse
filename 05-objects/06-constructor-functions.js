// Blue Print
// Factory functions and constructor functions
// constructor functions
// new - creates new object, points to it, omit return
// usar mayúsculas para primera letra en constructores por mejor práctica

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} adn I love React`
    );
  };
  console.log(this);
}

const john = new Person('john', 'anderson');
john.fullName(); //My full name is john anderson adn I love React
const bob = new Person('bob', 'jordan');
bob.fullName(); //My full name is bob jordan adn I love React
//new crea un nuevo objeto, lo apunta y nos permite omitir el return, si se omite el new, entonces habrá un error de que no se puede leer la propiedad fullName de undefined

// factory function de ejemplo
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
