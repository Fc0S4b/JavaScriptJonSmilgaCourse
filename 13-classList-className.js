// en html
{
  /* <style>
  .colors{
    background: red;
    color: white;
  }
  .text{
    font-size: 2rem;
    letter-spacing: 1rem;
  }
</style> */
}
{
  /* <h1 id="first" class= "colors" >i'm first element</h1>
<h1 id="second">i'm second element</h1>
<h1 id="third">i'm third element</h1> */
}

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className;
console.log(classValue); //se obtiene la clase del elemento que tiene el id first que sería colors

second.className = 'colors'; //h1 con id second tendrá una clase llamada colors

// como poner más de una clase
second.className = 'colors text';

//solución con classList
third.classList.add('colors');
third.classList.add('text');
// forma corta
third.classList.add('text', 'colors');
// para eliminar clases
third.classList.remove('text');

let result = third.classList.contains('colors');
if (result) {
  console.log('hello world');
} else {
  console.log('does not have the class');
}
//'hello world' porque el h1 con el id third no contiene la clase colors

const classValue2 = third.classList;
console.log(classValue2); //se muestra las clases que tiene el h1 con id third
