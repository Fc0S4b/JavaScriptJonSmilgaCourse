// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

let name = 'bobo';

function calculate() {
  const name = ' john';
  const age = 25;
  //code goes here
  becomesGlobal = 'global variable';
}

// calculate();
//console.log(age); //error, no se puede acceder a variable local
//console.log(becomesGlobal); //error, no se ha invocado la función para acceder a la variable
calculate();
console.log(becomesGlobal); //nam y age están "protegidas" del acceso global por const (o puede ser también let)
if (true) {
  const name = ' john';
}
{
  const name = 'john';
  const special = 'special';
}

// console.log(special) // error porque special está entre {}, es local
console.log(`my name is ${name} and I'm awesome`);
