// submit event listener
// prevent default
// how to get a value

// en html
{
  /* <form action="" id= "form">
  <input type="text" id="name">
  <input type="password" id="password">
  <input type="submit" value="submit">
</form> */
}
// action indica hacia donde se enviará la data

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //evita que se actualize la página en donde actúa el action y no deja ver el console.log
  console.log('form submitted');
  console.log(name.value); // se verá lo que se escribió en el input
  console.log(password.value); // al igual con password, se verá la contraseña
});
