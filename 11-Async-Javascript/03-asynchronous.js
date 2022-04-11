// Make Soup
// boil water 10 min
// chop onion
// add carrots boil for 5 min
// chop carrots
// add onion boil for 5 min
// BROWSER!!!! fetch Data, get geolocation, setTimeout, setTimer etc (el navegador nos provee estas funciones)

// javascript le pasa al navegador el setTimeout para que se haga cargo del callback function, mientras tanto sigue ejecutando las demás lineas.
// cuando el navegador termina de procesar el callback, entonces se la pasará a javascript
// boilWater(10000); //este es un tiempo mínimo, cuando se desocupe javascript, entonces ejecutará la respuesta de esta función
// console.log('chop carrots'); //se muestra en seguida, cuando termine boilWater(10000) se mostrará después de chop carrots

// function boilWater(time) {
//   console.log('boiling...');
//   setTimeout(() => {
//     console.log('done.');
//   }, time);
// }

// boilWater(1000);
// console.log('chop carrots');
// for (let i = 0; i < 100000; i++) { //si javascript está ocupado con alguna ejecución, no tomará en cuenta boilWater hasta que se haya desocupado
//   console.log('still busy');
// }

// function boilWater(time) {
//   console.log('boiling...');
//   setTimeout(() => {
//     console.log('done.');
//   }, time);
// }

boilWater(0); //inclusive si no se demora nada la ejecución que tiene a cargo el navegador, javascript lo dejará en la fila de espera y primero ejecutará su pila para luego tomar en cuenta la pila del navegador
console.log('chop carrots');

function boilWater(time) {
  console.log('boiling...');
  setTimeout(() => {
    console.log('done.');
  }, time);
}
