// en html
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
  /* <h2>events in javascript</h2>
<p onclick="this.classList.add('red')">hey, i can trigger an event</p>
<button class="btn">click me</button> */
}

// tres principios
// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2'); //se puede hacer desde la misma callback

// addEventListener recibe un evento y devuelve un callback
btn.addEventListener('click', function () {
  // console.log('hey you clicked me');
  heading.classList.add('red');
});

// esta forma es una manera antigua de como programar un addEventListener en línea con html, pero no es recomendable seguir esta práctica
{
  /* <p onclick="this.classList.add('red')">hey, i can trigger an event</p>; */
}
