// Make Soup
// boil water 10 min
// chop onion
// add carrots boil for 5 min
// chop carrots
// add onion boil for 5 min
// BROWSER!!!! fetch Data, get geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await

boilWater(10000);
console.log('chop carrots');
// boilWater();
// console.log('chop onion');

// patrón de callback function, un callback function dentro de una callback function
// function boilWater() {
//   console.log('boiling...');
//   setTimeout(() => {
//     console.log('done.');
//     console.log('add carrots');
//     setTimeout(() => {
//       console.log('carrots done');
//     }, 5000);
// console.log('chop onion');

//   }, 10000);
// }
//boiling...
//chop carrot
//done.
//add carrots.
//carrots done

// si agregamos console.log('chop onion) fuera del callback se tiene
// boiling...
// chop carrot
// chop onion
// done.
// add carrots
// carrots done

// si agregamos console.log('chop onion) dentro del callback se tiene
// boiling...
// chop carrot
// done.
// add carrots
// chop onion
// carrots done

function boilWater() {
  console.log('boiling...');
  setTimeout(() => {
    console.log('done.');
    console.log('add carrots');
    setTimeout(() => {
      console.log('carrots done');
      console.log('add onion');
      setTimeout(() => {
        console.log('onion done');
      }, 5000);
    }, 5000);
    console.log('chop onion');
  }, 10000);
}

// boiling....
// chop carrot
// done.
// add carrots.
// chop onion
// carrots done
// add onions
// onion done

// no es sostenible este método porque para setear la siguiente ejecución lo hacemos en un setTimeout dentro de un setTimeout, a esto se le llama callback hell
