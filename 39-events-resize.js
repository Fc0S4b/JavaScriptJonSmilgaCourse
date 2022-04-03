// The resize event fires when the document view (window ) has been resized

window.addEventListener('resize', function () {
  console.log(window.innerWidth); //a medida que cambia el view, van apareciendo los valores del ancho con innerWidth
});
