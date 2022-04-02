// innerHTML
// textContent

// en html
{
  /* <ul id="first">
  <li class="item">list item</li>
  <li>list item</li>
</ul>

<div id="second">
  i have some text content
</div> */
}
const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textcontent); //i have some text contnet
console.log(list.innerHTML); //<li class="item">list item</li>
// <li>list item</li>

console.log(list.textContent); //list item list item

const randomVar = 'random value';

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item"> ${randomVar} list item</li>
  <li>list item</li> <li>list item</li>`;

document.body.appendChild(ul); //se agregará ul.innerHTML al body

div.textContent = 'hello world';
div.innerHTML = 'hello people';
// ambos hacen los mismo, sin embargo, si se trata de contenido de html, se debe usar innerHTML

// cuidado con las inyecciones de códico a través de innerHTML!!
