// previousSibling
// nextSibling
// return whitespace

// en html se tiene
{
  /* <ul id="result">
  <li class="first">first</li>
  <li >list item 2</li>
  <li >list item 3</li>
  <li id='last'>last</li>
</ul> */
}

const first = document.querySelector('.first');
console.log(first); //asegúrate que elegiste bien el tag

// const second = first.nextSibling;
// console.log(second); //return whitespace
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second); //return el segundo li con color rojo

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third); //return el tercer li
console.log(last.nextSibling.nextSibling); //null porque no hay más elementos después del último li
