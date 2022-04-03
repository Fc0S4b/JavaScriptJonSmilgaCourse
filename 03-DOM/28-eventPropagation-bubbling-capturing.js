// allows select dynamic elements (sin tener que acudir a un target directamente)
// event propagation -order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

// en html
{
  /* <div class="container">
  <ul class="list-items">
    <li class="item"><a href="#" class="link">link</a></li>
    <li class="item"><a href="#" class="link">link</a></li>
    <li class="item"><a href="#" class="link">link</a></li>
  </ul>
</div> */
}

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
  console.log('current target', e.currentTarget);
  console.log(' target', e.Target);
  if (e.Target.classList.contains('link')) {
    console.log('you clicked on the link');
  }
}

list.addEventListener('click', showBubbling); // current target: <ul class = "list-items">...</ul> target <a href="#" class="link">link</a>
container.addEventListener('click', showBubbling); // current target <div class ="container">...</div> target: <a href="#" class="link">link</a>
document.addEventListener('click', showBubbling); //current target mostrará #document y target el a link
window.addEventListener('click', showBubbling); //current target mostrará el objeto window y el target a link

// para detener el efecto burbuja, que lo entendí como el despliegue de los contenedores hasta cierto nivel se puede usar stopPropagation
function stopPropagation(e) {
  console.log('you click on list');
  e.stopPropagation();
}
list.addEventListener('click', stopPropagation); //solo muestra la interacción con el link no con sus contenedores padres

list.addEventListener('click', showBubbling, { capture: true }); //sucede desde la raíz en adelante (desde window)
