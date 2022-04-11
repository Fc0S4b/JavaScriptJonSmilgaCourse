// Javascript is single threaded, synchronous language
// ejecuta una línea tras otra

console.log(`ì'm first`);
console.log(`ì'm second`);
console.log(`ì'm third`);

console.log(`ì'm first`);
boilingWater();
console.log(`ì'm third`); //se ejcutará solo cuando la función en la línea anterior haya terminado

function boilingWater() {
  console.log('boiling...');
  for (let i = 0; i < 10000; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}
