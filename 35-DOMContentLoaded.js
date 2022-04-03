/* 
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

window.addEventListener('DOMContentLoaded', function(){
  //your code goes here
})

document.addEventListener....
*/
// acá habra problemas si el script que importa js en html está definido en el head ya que se está cargando antes que el contenido de html
const heading = document.querySelector('h1');
console.log(heading);
heading.style.color = 'red';

// por eso como mejor práctica siempre importar el js en un script tag antes del final del body en html

window.addEventListener('DOMContentLoaded', function () {
  // nada pasa si se define este código aquí
  const heading = document.querySelector('h1');
  console.log(heading);
  heading.style.color = 'red';
  // console.log('hello'); //se ejecuta cuando se carga la página
});
