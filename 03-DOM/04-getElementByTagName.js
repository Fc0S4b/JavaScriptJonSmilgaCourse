// Select the element or group of elements the we want
// decide the effect we want to apply to the selection

// getElementByTagName('tagname'); //por nombre de etiqueta
// HTMLCollection = array-like object //lo que se obtiene
// index, length property but not array methods (forEach) //no se puede usar métodos de arrays

// querySelectorAll() in most cases
// NodeList - objects are collections of nodes //en vez de htmlcollections, tenemos nodelist
// can run forEach
// turn them into array - spread operator (...) //para ambos htmlcollections y nodelist
// after that can use any array properties

const headings = document.getElementsByTagName('h2');
headings[0].styles.color = 'red'; //el primer heading h2 se pondrá en rojo

console.log(headings.length); //2 que son los 2 headings en ejemplo html

const items = document.getElementsByTagName('li');

items.forEach(function (item) {}); //item forEach is not a function, no se pueden usar arrays methods, querySelectorAll es una buena alternativa (ver la descripción de arriba)
items[2].style.color = 'orange'; //tercer li se pone naranjo
const betterItems = [...items];

betterItems.forEach(function (items) {
  console.log(items);
});

console.log(items); // htmlCollections
console.log(betterItems); //convertido en un array, ahora se puede usar arrays methods (como forEach)
