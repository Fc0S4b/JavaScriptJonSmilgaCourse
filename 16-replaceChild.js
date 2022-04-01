// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// replaceChild('new', 'old') nuevo elemento y el elemento que deseamos reemplazar

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
document.body.insertBefore(bodyDiv, result);

console.log(result.children);

// result element
const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode("i'm small heading text");
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
/////////////
document.body.replaceChild(smallHeading, bodyDiv);
/////////////
console.log(result.children);
