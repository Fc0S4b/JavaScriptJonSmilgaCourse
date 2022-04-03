// previousElementSibling
// nextElementSiblign

const first = document.querySelector('.first');
first.nextElementSibling.style.color = 'red'; //no cuenta el nodo de espacio en blanco, selecciona directamente el siguiente elemento después de la clase .first

const last = document.querySelector('#last');
