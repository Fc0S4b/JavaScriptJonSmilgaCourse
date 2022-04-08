// hoisting
// function and var declarations are hoisted
// safer to access only after initialized

display(); //se inicializa igual porque JS busca la función y la mueve por encima de display pero funciona diferente para const, let y var
moreComplex(); //error porque no puede acceder a las variables antes que se inicialicen (si estuviese random solo habría un undefined)
console.log(display); //[Function: display]
// console.log(firstName); error
// console.log(lastName); //error
console.log(random); // undefined, se accede a la variable pero no al valor

const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

// console.log(firstName);//john

function display() {
  console.log('hello world');
}

// display();

function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${random}`);
}
// moreComplex(); //john, jordan, random
