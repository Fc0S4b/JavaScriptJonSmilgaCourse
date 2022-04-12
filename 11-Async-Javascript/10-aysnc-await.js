// otra mejor solución con async/await
// callbacks, promises, async/await
// must have async
// await waits till promise is settled
// error handling - try/catch

// como se usa

// async function someFunction (){
//   await
// }

// const otherFunction = async() =>{
//   await
// }

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'api.unsplash.com/photos';

// async retorna una promise por default
btn.addEventListener('click', async () => {
  // si estas obteniendo la data desde un servidor, por lo general await se asigna a una variable const first = await addColor(1000, heading1, 'red')
  // await addColor(1000, heading1, 'red');
  // await addColor(1000, heading2, 'green');
  // await addColor(1000, heading3, 'blue');
  //  se ejecutará al hacer click el botón, red, gree, y blue
  // console.log(first); //undefined, pero antes se ejecutará red, green y blue. Para quitar el undefined, debes darle algún argumento a resolve en addColor. Si falla un await, el resto que queda será ignorado
  // manejando el error
  // try {
  //   const first = await addColor(1000, heading1, 'red');
  //   await addColor(1000, heading2, 'green');
  //   await addColor(1000, heading3, 'blue');
  //   console.log(first);
  // } catch (error) {
  //   console.log(error);
  // }
  // ya que displayColor retorna una promise (por ser una función async) entonces se puede aplicar then
  // displayColor().then((data) => console.log(data)); //después de ejecutar red, green y blue, veré un hello en consola
  // ya que esta es una función async, tiene más sentido asignarlo a una variable
  const result = await displayColor();
  console.log(result);
});

async function displayColor() {
  try {
    const first = await addColor(1000, heading1, 'red');
    await addColor(1000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
    console.log(first);
  } catch (error) {
    console.log(error);
  }
  // si retorno algo como
  return 'hello';
  // no necesito ponerlo en un resolve('hello') para que no de undefined ya que siempre una función async retornará una promise
}

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve(); // solo puedo ejecutar then si se existe un resolve
      }, time);
    } else {
      reject(new Error(`there is no such element ${element}`));
    }
  });
}
