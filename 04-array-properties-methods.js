// Array properties and Methods

let names = ['john', 'bobo', 'barry', 'olga', 'ben'];

console.log(names.length);
console.log(names[4]);
console.log(names[names.length - 1]);

// concat
const lastNames = ['pepper', 'onion', 'banna'];
const allNames = names.concat(lastNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());

// unshift
allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);
// shift
allNames.shift();
allNames.shift();
console.log(allNames);
// push
allNames.push('susy');

console.log(allNames);
// pop
allNames.push();

console.log(allNames);
// splice - mutates original array
const specificNames = allNames.splice(2, 1); //index, número de items a remover, la mtriz queda sin el elemento

console.log(specificNames);
console.log(allNames);
