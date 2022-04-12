// callbacks, promises, async/await
// PROMISES - pending, resolved, rejected
// then catch - pass another callback
// en html
{
  /* <h1 class="one">hello world</h1>
<h1 class="two">hello people</h1>
<h1 class="three">hello Javascript</h1>
<button class="btn">click me</button> */
}
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {});

// cuando vas a comer y pagas, te dan un recibo, algo que comprueba que ordenaste comida
// una promesa puede ser pendiente, resuelta o rechazada, entonces
// en el ejemplo de la comida, cuando te rechazan una promise, es análogo cuando te dicen que no pueden preparar lo que pediste por falta de ingredientes, si ese es el caso, entonces se usa catch para obtener un error

// en promise se pasa una callback con dos funciones como parámetros (con cualquier nombre)

// const promsise = new Promise((resolve, reject)=>{})
// console.log(promise) //PromiseStatus: pending, aún no ha resuelto nada

// const promsise = new Promise((resolve, reject)=>{
//   let value = true;
//   if(value){
//     resolve(`hey value is true`)
//   }
//   else{
//     reject(`there was a error, value is false`)
//   }
// })
// console.log(promise) //PromiseStatus: resolved
// PromiseValue: 'hey value is true'
// console.log(promise.value) //undefined

const promsise = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve(`hey value is true`);
  } else {
    reject(`there was a error, value is false`);
  }
});
// promise.then((data)); //tendrá acceso al string de resolve, inclusive si se cambia data por taco

// promise.then((taco)=>{
//   console.log(taco);
// }); //hey value is true

promise
  .then((taco) => {
    console.log(taco);
  })
  .catch((err) => {
    console.log(err);
  }); //there was a error, value is false (si es que value es false, se recupera el error con catch)
