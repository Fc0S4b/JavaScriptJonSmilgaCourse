// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them

// en html
{
  /* <h1>ES6</h1>
<h1>Javascript</h1>
<h1>HTML</h1>
<h1>CSS</h1>
<h2 id="result"></h2> */
}
const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');
console.log(headings); //un nodelist
console.log(headings.map((item) => console.log(item))); //error, heading.map is not a function (porque no es un array)

const text = [...headings];
console.log(text); //ahora es un array y se puede usar map
const text2 = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join('');

result.innerHTML = text;
