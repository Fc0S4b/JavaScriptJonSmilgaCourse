// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy';
console.log(Array.from(udemy)); //[ 'u', 'd', 'e', 'm', 'y' ]

// function countTotal() {
//   console.log(arguments); //arguments es keyword
// }

// countTotal(67, 89, 54); //[Arguments] { '0': 67, '1': 89, '2': 54 } un array como un objeto no se puede usar map o reduce

function countTotal() {
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(total);
}

countTotal(67, 89, 54, 100); //310
