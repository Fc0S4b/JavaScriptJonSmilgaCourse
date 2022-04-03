// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

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

// create empty element

const bodyDiv = document.createElement('div'); //crea algún elemento para el body html

// create text node

const text = document.createTextNode('a simple body div');

bodyDiv.appendChild(text); //añade el texto como hijo del div
document.body.appendChild(bodyDiv); //añade el div al body del html

console.log(result.children); //solo tiene un hijo h1 con la clase red

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.appendChild(heading);
