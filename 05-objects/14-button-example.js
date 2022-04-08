// en html

{
  /* <button class="increment">increment</button> */
}

const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector('.increment');

// fail
// btn.addEventListener('click', counter.increment); //NaN al hacer click en el botón increment
//porque apunta a lo que tiene a la izquierda del punto, osea al btn y no al objeto con método counter

// some edge cases
// btn.addEventListener('click', counter.increment.bind(counter)); //1, runs nicely
// cuando uses removeEventListener, no tendrás referencia a esa función counter, por lo que esta sería una solución para tener referencias:

const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);
btn.removeEventListener('click', increment);
