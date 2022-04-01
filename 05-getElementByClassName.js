// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementByClassNae('classname');

// HTMLCollection

// toma la clase de un tag de html
const listItems = document.getElementsByClassName('special');
listItems[2].style.color = 'blue'; // el segundo elemento que tenga clase special se le aplicará la propiedad de color azul
console.log(listItems);
