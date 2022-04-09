// destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon); //orange banana lemon

const [john, peter, bob] = friends; //si hay más variables que items en el array entonces se le asignará undefined. Puede asignarse cualquier nombre
console.log(john, peter, bob); //john peter bob
const [enemy, , bob2, , kelly] = friends; //para saltarse un item del array
