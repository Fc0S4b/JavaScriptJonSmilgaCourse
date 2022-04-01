// Select the element or group of elements that we want
// decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

// si es id el que seleccionas, asegúrate de empezar con el #, si es clase con el .
const result = document.querySelector('#result');

result.style.backgroundColor = 'blue'; //convertirá el fondo azul el contenedor que tenga el id result

const item = document.querySelector('.special');
console.log(item);
//querySelector solo selecciona la primera instancia

// elegir la última instancia de tag li
const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

// cada item con la clase special se le aplicará la propiedad color amarillo
const list = document.querySelectorAll('.special');
list.forEach(function (item) {
  console.log(item);
  item.style.color = 'yellow';
});
