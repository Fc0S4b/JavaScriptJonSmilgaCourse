// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// As function arguments

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// function printPerson(person) {
//   console.log(person.first);

// }

// printPerson(bob); //bob

function printPerson({ first, last, city }) {
  //usado frecuentemente en react pasar un objeto de parámetro con las propiedades que se desea extraer
  // const { first, last, city } = person;
  console.log(first, last, city);
}

printPerson(bob); //bob sanders chicago
