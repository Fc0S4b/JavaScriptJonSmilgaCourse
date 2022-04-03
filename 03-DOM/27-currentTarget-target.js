// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occurred

// en html
{
  /* <button class="btn">first button</button>
<button class="btn">
  second <strong>button <strong>more nested</strong> </strong>
</button>
<button class="btn">third button</button> */
}

const btns = document.querySelectorAll('.btn');

btns.forEach(function () {
  btn.addEventListener('click', function (e) {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green'; //cambia el color del texto en el boton que clickeas
    console.log('target', e.target);
    e.target.style.color = 'green'; //solo cambiará a color verde el elemento que estés clickeando, si clickeas el strong que está en el button 2, entonces solo eso se pondrá verde, no el texto completo del botón, esa es la diferencia entre target y currentTarget
  });
});
