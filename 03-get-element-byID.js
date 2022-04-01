// Select the element or group of elements that we want
// decide the effect we want to apply to the selection

// debe coincidir con un id que tenga algún tag de html que está en el body
// get ElementById('element')

const h1 = document.getElementById('title');
h1.style.color = 'red'; //se ve el título h1 con id title en rojo

document.getElementById('btn').style.backgroundColor = 'blue'; //el fondo del botón con el id btn se pone azul

document.getElementById('btn').style.color = 'white';
// acceder al id btn escribiendo a cada rato document.getElementById puede ser molestoso, para esto se puede condensar con una asignación de esta acción a una variable

const btn = document.getElementById('btn');
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';
