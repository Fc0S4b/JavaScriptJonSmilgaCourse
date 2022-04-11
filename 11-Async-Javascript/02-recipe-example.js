// Make Soup
// boil water 10 min
// chop onion
// add carrots boil for 5 min
// chop carrots
// add onion boil for 5 min

// no se ejecutará las demás tareas hasta que boilWater(10000) esté listo
boilWater(10000);
console.log(`chop onion`);
boilWater(5000);
console.log(`chop carrot`);
boilWater(5000);

console.log(`ì'm first`);
boilingWater();
console.log(`ì'm third`); //se ejcutará solo cuando la función en la línea anterior haya terminado

function boilWater(time) {
  console.log('boiling...');
  for (let i = 0; i < time; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}
