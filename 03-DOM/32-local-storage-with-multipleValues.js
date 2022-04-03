// JSON.stringify(), JSON.parse()

const friends = ['john', 'peter', 'bob'];

localStorage.setItem('friends', friends); //al ver en applications devtools no se guarda friends como array

const values = localStorage.getItem('friends');
console.log(values[0]); //j (no es lo que queremos)

// se arregla con
localStorage.setItem('friends', JSON.stringify(friends)); // ahora se guarda como arreglo

const values2 = JSON.parse(localStorage.getItem('friends'));
console.log(values2[0]); //john

// veamos si un valor esta en el localStorage, si no está entonces lo vamos registrar
// creamos un array vacío
let fruits;

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

console.log(fruits); //[]

// fruits.push('apple');
fruits.push('orange'); //se agregará orange al array value
localStorage.setItem('fruits', JSON.stringify(fruits)); //se pasa apple en el localStorage como value de fruits
