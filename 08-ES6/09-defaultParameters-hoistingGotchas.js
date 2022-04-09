// default parameters, arrow function gotchas
// sayHi(); se ejecutará igual aquí arriba por el hoisting no así el arrow function
const john = 'john';
const peter = 'Peter';

function sayHi(person = 'Susan') {
  console.log(`Hi ${person}`);
}

const sayHello = (person = 'Bob') => console.log(`Hello ${person}`);

sayHi(); //Hi undefined sin el = 'Susan, con eso sería Hi Susan
sayHello(peter); //Hello Peter si no tiene un input entonces Hello Bob
