// Spread operator ...
// Allows an iterate to spread/expand individualluy inside reciever
// Split into single items and copy them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters); //un array con [u,d,e,m,y]

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

// const friends  = [boys, girls, bestFriend];
// console.log(friends); [['john', 'peter', 'bob'], ['susan', 'anna'], 'arnold'];
// const friends  = [...boys, ...girls, bestFriend];
// console.log(friends); //[ 'john', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

const friends = [...boys, bestFriend, ...girls];
console.log(friends); //[ 'john', 'peter', 'bob', 'arnold', 'susan', 'anna' ]

// reference
// const newFriends = friends;
// newFriends[0] = 'karina'; //muta el array original también
// console.log(newFriends); //[ 'karina', 'peter', 'bob', 'arnold', 'susan', 'anna' ]
// console.log(friends); //[ 'karina', 'peter', 'bob', 'arnold', 'susan', 'anna' ]
const newFriends = [...friends];
newFriends[0] = 'karina'; //muta el array original también
console.log(newFriends); //[ 'karina', 'peter', 'bob', 'arnold', 'susan', 'anna' ]
console.log(friends); //[ 'john', 'peter', 'bob', 'arnold', 'susan', 'anna' ]
