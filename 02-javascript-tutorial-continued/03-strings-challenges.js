// strings #8

// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }

// console.log(fullName('john', 'smith'));
// console.log(fullName('jordan', 'peter'));

// refactorizar la función para que el resultado no dependa del orden de los inputs

function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: 'jordan', firstName: 'peter' }));
