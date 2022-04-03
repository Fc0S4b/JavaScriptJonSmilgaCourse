// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

// en html
{
  /* <input type="text" id="name"> */
}

const nameInput = document.getElementById('name');

nameInput.addEventListener('keypress', function () {
  console.log('you pressed a key'); //se ve el mensaje en consola cuando se escribe en el input html
});
nameInput.addEventListener('keydown', function () {
  console.log('you pressed a key'); //aparece cuando se presiona la keydown
});
nameInput.addEventListener('keyup', function () {
  console.dir(nameInput); //se ve un objeto que posee la propiedad value=  0
  console.log(nameInput.value); //al soltar la keyup 3 veces se ve "k" "ke" y "key"
});
