// Arrow functions or fat arrow functions
// reg function: 'this' refers parent, left of the dot
// arrow function: refers to it's current surrounding scope
// en html
// body{
//   text-transform: capitalize;
// }
// .btn{
//   background: #f15025;
//   color: #fff;
//   border: NamedNodeMap;
//   font-size: 1.5rem;
//   text-transform: capitalize;
//   cursor: pointer;
// }
{
  /* <button class="btn">click me</button> */
}

const btn = document.querySelector('.btn');
// btn.addEventListener('click', function(){
//   this.style.color = 'black'; //se referirá al parent que es a la izquierda del punto, osea btn, ya que se usa reg function
// })
btn.addEventListener('click', () => {
  this.style.color = 'black'; //error, se referirá al window object por usarse arrow function
  // setTimeout(function(){
  //   this.style.color = 'black'; //apuntará al window object
  // }, 2000)
  setTimeout(() => {
    this.style.color = 'black'; //apuntará al btn
  }, 2000);
});
