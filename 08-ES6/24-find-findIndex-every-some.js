// find -gets specific item //no retorna un nuevo array como filter
// findIndex - get's index of the item;
// every - every item in the array //true o false según criterio
// some - at least one item

const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'anna' },
];

// const anna = people.filter((person) => person.name === 'anna');
// console.log(anna); //[ { id: 3, name: 'anna' }
// console.log(anna[0].name); //anna
// console.log(anna[0].id); //3

// usando find
// const anna = people.find((person) => person.name === 'anna');
// console.log(anna.name); //anna, si no hay match entonces undefined

// const person = people.findIndex((item) => item.id === 3);
// console.log(person); //2

// const newPeople = people.slice(0, person);
// console.log(newPeople); //[ { id: 1, name: 'john' }, { id: 2, name: 'peter' } ]
const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

const allGoodGrades = grades.every((grades) => grades != 'C');
const allGoodGrades2 = goodGrades.every((grades) => grades != 'C');
console.log(allGoodGrades); //false, no todos coinciden con C
console.log(allGoodGrades2); //true, no hay C

const oneBadGrade = grades.some((grade) => grade === 'C');
console.log(oneBadGrade); //true, al menos hay una C
const oneBadGrade2 = goodGrades.some((grade) => grade === 'C');
console.log(oneBadGrade); //false, no hay C
