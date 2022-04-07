/*
In Regular Functions (not arrow) "this" determined by "HOW"!!! a function is invoked (left of .) (essentialy who invoked the function)

defaults to global - window //cuando no hay nada a la izquierda que invoque
arrow functions - pump the breaks
*/

// console.log(this); //window object

function showThis() {
  console.log(this);
}

const john = {
  name: 'john',
  showThis: showThis,
};
const bob = {
  name: 'bob',
  showThis: showThis,
};

john.showThis(); //apunta al objeto john
bob.showThis(); //apunta al objeto bob

showThis(); // window object

// en html
{
  /* <h1>objects</h1>
<button class="btn-1">click me</button>
<button class="btn-2">click me</button> */
}

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', showThis); //apunta al btn-1 si se hace click en el botón1
btn2.addEventListener('click', showThis); //apunta al btn-2 si se hace click en el botón 2
btn2.addEventListener('click', function () {
  //apunta al objeto global de window
  showThis(); //porque no tiene un objeto al que le apunta directamente a la izquierda (en cambio con arrow functions si)
});
