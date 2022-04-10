// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array -string.nodeList, Set
// los nodeList se obtienen al seleccionar múltiples elementos
// en html
{
  /* <p>john</p>
<p>peter</p>
<p>susan</p>
<h2 id="result"></h2>
<h1 id="second"></h1> */
}

const p = document.querySelector('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

let newText = Array.from(p);
console.log(newText); //[p,p,p]
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');

result.innerHTML = newText; //se inserta john Peter Susan en el h2 con id result

// fasted option
const text = Array.from(document.querySelector('p'), (item) => {
  // console.log(item);
  // return 'hello world';
  return `<span>${item.textContent}</span>`;
}).join(' ');

// console.log(text); //hello world hello world hello world

second.innerHTML = text; //se inserta en el h1 con id second "John Peter Susan"
