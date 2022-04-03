// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

{
  /* <style>
  .red{
    background: red;
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .blue{
    background: blue;
    color: white;
    text-transform: capitalize;
    letter-spacing: 10px;
  }
  .btn{
    background: #f15025;
    color: white;
    font-size: 1.2rem,
    border: none;
  }
</style> */
}
{
  /* <h1>events in javascript</h1>
<button class="btn">click me</button> */
}

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  console.log('you click me');
});
btn.addEventListener('mousedown', function () {
  console.log('down');
});
btn.addEventListener('mouseup', function () {
  console.log('up');
});

// como un hover effect:
heading.addEventListener('mouseenter', function () {
  heading.classList.add('.blue');
});
heading.addEventListener('mouseleave', function () {
  heading.classList.remove('.blue');
});
