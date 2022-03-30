// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Non-primitive data types:  Arrays, Function, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the first value is ${number2}`);

let person = { name: 'bob' };
// let person2 = { ...person }; //the name of the first person is bob
let person2 = person;

// ahora si se usa una referencia como son los objetos
person2.name = 'susy'; //esto afectará a la referencia person igual ya que se está asignando non-primitive data type value a una variable
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the first person is ${person2.name}`);

// otro ejemplo

let a = 'hola';
let b = a; // asignamos valor de 'a' a 'b'
a += '!'; // cambiamos valor de  'a' añadiendo ! al final

console.log(a); // hola!
console.log(b); // hola
// cada variable guarda su propio valor, b no se actualiza porque a se actualizó

const c = [1, 2, 3];
const d = c;

c.push(4);
console.log(c); //[1,2,3,4]
console.log(d); //[1,2,3,4]
// el valor en sí no se copia, lo que se asgina es una referencia. Cambios en una referencia afectan a su valor original
