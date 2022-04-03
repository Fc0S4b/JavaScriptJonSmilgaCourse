/* 
innerWith - the read-only window property the interior width of the window in pixels

innerHeight - the read-only property of the window interface returns the interior height of the window in pixels

The element.getBoundimgClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport. */

//tamaño de la ventana de la página  inclusive si se cambia de tamaño
console.log('height : ' + window.innerHeight);
console.log('height : ' + window.innerWidth);

// en html
{
  /* <style>
  .btn{
    margin: 1rem;
    font-size: 1.5rem;
  }
  .box{
    margin: 1rem;
    width: 150px;
    height: 150px;
    background: red;
  }
</style>
<button class="btn">click me</button>
<div class="box"></div> */
}

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', function () {
  const values = box.getBoundingClientRect();
  console.log(values); //un objeto con width, height, left, right, top, bottom, la posición relativa al viewport, etc, se ve cuando se clickea el botón en html
});
