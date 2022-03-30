// Arrays, Functions and Objects
// Arrays - [], 0 index based

const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna';

// lo anterior se ve redundante, mejor agruparlos en un arreglo

const friends = [friend1, friend2, friend3, friend4];

console.log(friends);

const friends2 = ['john', 'peter', 'bob', 'susy', 45, undefined, null];

console.log(friends2[0]);
//friends2[7] sería undefined ya que no tiene item en el índice 7 (parte de 0)

friends2[4] = 'anna';
console.log(friends2);
console.log(friends2[4]);
let bestFriend = friends2[2];
console.log(bestFriend);
