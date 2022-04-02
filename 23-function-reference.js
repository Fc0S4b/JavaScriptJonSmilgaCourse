// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors() {
  // console.log('hello');
  // funcionalidad para que se ejecute el botón cada vez que se hace click, tanto para hacer aparecer las propiedades como desactivarlas
  let hasClass = heading.classList.contains('red');
  if (hasClass) {
    heading.classList.remove('red');
  } else {
    heading.classList.add('red');
  }
}

btn.addEventListener('click', changeColors); //referencia el callback no lo invoques, esto significa que debes escribirlo sin paréntesis changeColor (no changeColors()) para no ejecutar enseguida el código
