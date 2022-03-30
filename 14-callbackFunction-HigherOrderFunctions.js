// Callback functions, higher order functions, functions as first Class objects/Citizens
// functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// higher order function - accepts another function as an argument or returns another function as a result

// Callback function - passed to a another function as an argument and executed inside that function

// function greetMorning(name) {
//   const myName = 'john';
//   console.log(`Good morning ${name}, my name is  ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'john';
//   console.log(`Good afternoon ${name}, my name is  ${myName}`);
// }

// morning y afternoon serían los callbacks
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon  ${name.repeat(3)}`;
}
// greet sería función higher order
function greet(name, cb) {
  const myName = 'john';
  console.log(`${cb(name)}, my name is  ${myName}`);
}

// invocar las funciones no las hace ser callbacks
greet('bobo', morning);
greet('peter', afternoon);
