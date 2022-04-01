// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
];

// const ages = people.map(function (person) {
//   console.log(person);
//   return 'hello world';
// });
// console.log(ages);
// por cada objeto en el array se imprime un item en este caso el item tiene un nombre genérico llamado person y al final se retorna un array con 3 hello world.

const ages = people.map(function (person) {
  return person.age;
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

console.log(ages); // [ 20, 25, 30 ]

console.log(newPeople);
// [
//   { firstName: 'BOB', oldAge: 40 },
//   { firstName: 'PETER', oldAge: 45 },
//   { firstName: 'SUSY', oldAge: 50 },
// ];

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

// se mostraría en html los nombres hechos en el array con map
document.body.innerHTML = names.join('');

console.log(names);
