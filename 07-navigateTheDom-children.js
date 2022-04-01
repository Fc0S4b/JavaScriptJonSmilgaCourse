// Select the element or group of elements the we want
// decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace
// which is treated as a text node

// children
// firstChild
// lastChild
// en este ejemplo el id result lo tiene una lista ul con varios li
const result = document.querySelector('#result');

const allChildren = result.childNodes;
console.log(allChildren); //de 5 elemeento li, se muestra el resultado de 11 ya que childNodes considera los espacios en blanco ya que son considerados como un nodo de texto

const children = result.children;
console.log(children); //acá se muestrna los 5 items sin contar los espacios

console.log(result.firstChild);
console.log(result.lastChild);
// ambos mostrarán el nodo de texto de espacio en blanco
