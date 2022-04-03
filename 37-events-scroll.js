/*
Scroll Event - on element or document

window.addEventListener('scroll', function(){
  console.log(window.scrollY + 'px');
  console.log(window.scrollX + 'px');
});

document

scrollY - returns the number of pixels the document is currently scrolled along the vertical axis (pageYOffset)

scrollX - returns the number of pixels scrolled along the horizontal axis (pageXOffset) */

// se ejecutará solo si se puede hacer scroll en la página
window.addEventListener('scroll', function () {
  // console.log('hello'); //se verá cuando se haga scroll
  console.log(window.scrollY + 'px'); //se ve cuando se mueve en eje Y
  console.log(window.scrollX + 'px'); //se ve cuando se mueve en eje X
});
