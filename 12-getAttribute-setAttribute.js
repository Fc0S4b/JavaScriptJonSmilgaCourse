// getAttribute();
// setAttribute();

// en html
{
  /* <ul>

<li class="first" id="special">i have class of first</li>
<a href="first.html" id="link">random link</a>
<li>i have no attributes</li>
</ul> */
}
const first = document.querySelector('.first');
const classValue = first.getAttribute('class');
console.log(classValue); //obtengo el valor de la clase o el nombre
const idValue = first.getAttribute('id');
console.log(idValue); //obtengo el valor del id

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink); //first.html (el valor de href)

const last = link.nextElementSibling;
last.setAttribute('class', 'first'); // agrega al último li class= "first"
last.textContent = 'i also have a class of first'; //agrega contenido e texto al último li
console.log(last); //muestra el último li como se formó con la configuración dinámica

const links = document.querySelectorAll('.first');
