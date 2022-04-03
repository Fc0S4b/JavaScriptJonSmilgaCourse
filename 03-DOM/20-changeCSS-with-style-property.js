// CSS

// en html

{
  /* <style>
  .title{
    background: blue;
    color: white
    font-size: 3rem;
    text-transform: capitalize;
  }
</style>

<div class="random">i'm just some random div looking for the css</div> */
}

const random = document.querySelector('.random');
console.log(random.style); //objeto con todos los estilos que se pueden aplicar a la clase random

// random.style.backgroundColor = 'blue'; //div con background azul
// random.style.colorr = 'white';
// random.style.fontSize = '3rem';
// random.style.text-transform = 'capitalize';
// mucho mas trabajo añadir un estilo a la vez

// mejor agruparlos por una clase llamada title y agregarle al elemento que tiene clase random otra clase llamada title

random.classList.add('title');
