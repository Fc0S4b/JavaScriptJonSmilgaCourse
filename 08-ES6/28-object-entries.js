// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

const result = Object.entries(person);
console.log(result); //[ [ 'name', 'john' ], [ 'age', 25 ], [ 'status', 'student' ] ]

// map method

const newResult = result.map((item) => {
  // console.log(item); // ['name', 'john'][('age', 25)][('status', 'student')];
  const [first, second] = item;
  console.log(first, second);
  //   name john
  // age 25
  // status student
  return first;
});

console.log(newResult); //[ 'name', 'age', 'status' ]

// for of
for (const [first, second] of result) {
  //[first, second] o si es con item se descomenta la línea de abajo
  // const [first, second] = item;
  console.log(first, second);
}
// name john
// age 25
// status student
