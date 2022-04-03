// en DOM cada elemento del html se trata como un objeto o nodo y lo podemos usar para construir con métodos e interactuar con estos nodos usando JS, el cual nos puede dar una representación visual del DOM.

// DOM- general concepts

// similar to css -piensa que es análogo a como se configura css
// Select the element or group of elements the you we want to affect
// Decide the effect we want to apply to the selection

// many different ways

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

// assign to a variable

const element = document.getElementById('element');
// do something

document.querySelector('element'); //do something

// window object
// console.log(window);

// returns a node object or a node list, which is an arraylike object

const btn = document.getElementById('btn');

const name = btn.nodeName; //acceder a una propiedad del objeto btn

const css = btn.style; //un objeto con las propiedades que se pueden aplicar a btn
console.log(btn);
console.log(name);
console.log(css);
