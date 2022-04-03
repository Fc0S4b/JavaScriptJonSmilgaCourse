// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

// en html
{
  /* <button class="btn">click me</button>
<h1>some heading</h1>
<a href="#" id="link">random link</a> */
}

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');
// heading.addEventListener('click', function(){
//   heading.classList.add('blue'); //agrega la clase blue al heading cada vez que se hace click, si heading está mal escrito no se aplicará ninguna propiedad con event objects se puede hacer que siempre se aplique los cambios
// })
heading.addEventListener('click', function (event) {
  // console.log(event); //objeto gigante, una de sus propiedades es currentTarget
  console.log(event.currentTarget); //si se hace click en el h1, entonces lo muestra en consola como <h1>some heading</h1>
  console.log(this); //hace lo mismo que lo de arriba
  // la diferencia en usar uno u otro primero porque puede ser relevante para estar conciente del evento que se maneja y segundo el this con arrow function no funciona
});
btn.addEventListener('click', function (event) {
  // console.log(event.currentTarget); //<button class="btn">click me</button>
  event.currentTarget.classList.add('blue'); //el botón cambia a azul cuando se clickea
  console.log(event.type); //click (muestra el tipo de evento)
});

// para prevenir que se ejecute algún evento por default
function someFunc(e) {
  e.preventDefault();
}

link.addEventListener('click', someFunc);
