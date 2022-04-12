// callbacks, promises, async/await
// en html
{
  /* <h1 class="one">hello world</h1>
<h1 class="two">hello people</h1>
<h1 class="three">hello Javascript</h1>
<button class="btn">click me</button> */
}
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  // console.log('you clicked the button');
  // setTimeout(() => {
  //   heading1.getElementsByClassName.color = 'red';
  // }, 1000);
  // setTimeout(() => {
  //   heading2.getElementsByClassName.color = 'green';
  // }, 2000);
  // setTimeout(() => {
  //   heading3.getElementsByClassName.color = 'blue';
  // }, 1000);
  // se ejecuta al hacer click red, blue y green pero queremos que green vaya después de red
  setTimeout(() => {
    heading1.getElementsByClassName.color = 'red';
    setTimeout(() => {
      heading2.getElementsByClassName.color = 'green';
      setTimeout(() => {
        heading3.getElementsByClassName.color = 'blue';
      }, 1000);
    }, 2000);
  }, 1000);
  // en este caso se ejecutaría red, green y blue, pero son muchos callback dentro de otro callback, por esta razón se empezaron a usar más los promises y async/await
});

// console.log(`i'm second`);
