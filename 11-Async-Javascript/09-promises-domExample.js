{
  /* <h1 class="one">hello world</h1>
<h1 class="two">hello people</h1>
<h1 class="three">hello Javascript</h1>
<button class="btn">click me</button> */
}
// callbacks, promise, async/await
// what if no resolve, one is rejected

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'api.unsplash.com/photos';

btn.addEventListener('click', () => {
  addColor(1000, heading1, 'red')
    .then(() => addColor(2000, heading2, 'green'))
    .then(() => addColor(1000, heading3, 'blue'))
    .catch((err) => console.log(err));
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve(); // solo puedo ejecutar then si se existe un resolve
      }, time);
    } else {
      reject(new Error(`there is no such element ${element}`));
    }
  });
}
