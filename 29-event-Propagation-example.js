// en html

{
  /* <div class="container">
  <h1 class="heading">i'm sitting inside container</h1>
</div>
<button class="btn">click me</button> */
}

// allows select dynamic elements
// event propagation -order the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');

function sayHello() {
  console.log('hello there');
}
// heading.addEventListener('click', sayHello); //hello there en consola
// que pasa si creamos el heading dinámicamente

btn.addEventListener('click', function () {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `i'm inside the container`;
  container.appendChild(element);
});
// debes comentar el heading actualmente en el html
// comenté heading.addEventListener('click', sayHello); porque hay un error ya que si el heading de html no está entonces no se puede hacer un addEventListener a eso, la solución está en el efecto bubbling enfoncado en el div container, (también comenté el heading definido al principio)
// se hace target al parent element para tener acceso al heading
container.addEventListener('click', function (e) {
  if (event.target.classList.contains('heading')) {
    console.log('hello there');
  }
});
