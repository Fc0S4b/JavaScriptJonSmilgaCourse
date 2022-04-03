// nodeValue
// textContent

// en el ejemplo html se tiene
{
  /* <h1 id="special">this is special content</h1> */
}

const item = document.getElementById('special');
const value = item.nodeValue;
// console.log(value); //null
// console.log(item.childNodes); //un objeto con las propiedades text en 0, length en 2 y proto
// console.log(item.childNodes[0].nodeValue); //this is special content (el texto contenido en el nodo)

console.log(item.firstChild.nodeValue); //lo mismo que buscar por index 0, mostrará el texto
// al final se puede declarar value así:
// const value = item.firstChild.nodeValue;

const easyValue = item.textContent;
console.log(easyValue); //también muestra el contenido del heading

// lo que hay que tener cuidado es evitar los valores nulos
