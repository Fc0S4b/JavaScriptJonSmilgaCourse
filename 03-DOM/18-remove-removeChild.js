// remove
// removeChild

// en html
{
  /* <h1>hello world</h1>
<div class="result">
  <h1>second heading</h1>
</div> */
}
const result = document.querySelector(`#result`);
result.remove(); //remueve el div con el id result

const heading = result.querySelector('h1'); //seleccionas el child de la clase result y lo guarda en heading
result.removeChild(heading); //lo elimina el child de result
console.log(heading); //hello world
