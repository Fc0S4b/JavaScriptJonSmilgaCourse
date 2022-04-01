// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element','location'); alternativa para appendChild (igual se deben usar los métodos anteriores), insertar antes el elemento en el lugar definido

// en html
{
  /* <style>
  .red{
    background: red;
    color: white;
  }
  .blue{
    background: blue;
    color: white;
  }
</style>
<div id="result">
  <h1 class="red">i'm the child of result</h1>
</div> */
}

const result = document.querySelector('result');
const first = document.querySelector('.red');
// create empty element

const bodyDiv = document.createElement('div');

// create text node

const text = document.createTextNode('a simple body div');

bodyDiv.appendChild(text); //añade el texto como hijo del div

///////////////////
document.body.insertBefore(bodyDiv, result);
//////////////////

console.log(result.children); //solo tiene un hijo h1 con la clase red

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first); //first se seleccionó con un querySelector para que heading se sitúe antes de este elemento con la clase .red
