// String properties and methdos
// wrapper string object, don't memorize methods
let text = 'Peter Jordan';

let result = text.length;
console.log(result);
console.log(text.length);
console.log(text.toLocaleLowerCase());
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('p')); //case sensitive, si no está el carácter devolverá -1, si está el caracter, devolverá el índice de ese carácter en el string
console.log(text.trim()); //recorta los espacios blancos
console.log(text.startsWith('peter')); //false
console.log(text.startsWith('Peter')); //true
console.log(text.trim().toLowerCase().startsWith('peter')); //true
console.log(text.includes('eter')); //true
console.log(text.slice(0, 2)); //inicio, final, resultado "Pe"
console.log(text.slice(-1)); //negativo, desde final hacia atrás

// const person = {
//   name: 'peter', //property
//   greeting() {
//     //method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();
