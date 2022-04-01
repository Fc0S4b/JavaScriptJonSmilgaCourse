// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
  { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500 },
  { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc; //siempre debes retornar el acc porque la funcionalidad depende de esto sino habrá undefined
}, 0); //el segundo parámetro es el valor inicial de acc que fácilmente podría ser 500, 1000, etc, lo importante del segundo parámetro es que debe ser coherente con lo que retorna reduce, si se retorna un número, el segundo parámetro debe ser un número, si se quiere retornar un arreglo entonces el segundo parámetro sería un [] o un objeto sería un objeto {}. La idea es que sea coherente el retorno con el tipo de dato del segundo parámetro

console.log(total); //1500
