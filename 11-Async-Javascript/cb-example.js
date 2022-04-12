// callbacks, promises, async/await
// PROMISES - pending, resolved, rejected
// then catch - pass another callback
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
  setTimeout(() => {
    heading1.getElementsByClassName.color = 'red';
    setTimeout(() => {
      heading2.getElementsByClassName.color = 'green';
      setTimeout(() => {
        heading3.getElementsByClassName.color = 'blue';
      }, 1000);
    }, 2000);
  }, 1000);
});
