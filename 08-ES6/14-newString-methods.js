// new String methods
// startsWith(), endsWith(), includes(), repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-ODE';

// startsWith
// console.log(person.startsWith('Pet')); //true (ojo es caseSensitive)
// console.log(person.startsWith('peter')); //false
// console.log(employee.startsWith('EMP')); //false porque empieza con un número employee
// console.log(employee.startsWith('EMP', 6)); //true porque empieza desde el sexto carácter empieza con EMP

// endsWith

// console.log(manager.endsWith('ODE')); //true
// console.log(manager.endsWith('MAN', 9)); //true, termina en el carácter 9 contando igual de izquierda a derecha

// includes
// console.log(employee.includes('PETER')); //true, si lo incluye

const multiplyPeople = (person, amount = 5) => person.repeat(amount);

// repeat

const people = multiplyPeople(person, 10);
console.log(people); //Peter SmithPeter SmithPeter SmithPeter SmithPeter SmithPeter SmithPeter SmithPeter SmithPeter SmithPeter Smith
