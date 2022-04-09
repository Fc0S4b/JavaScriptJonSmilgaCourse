// closure
// closure gives you an access to an outer function's scope form an inner function
// make private variables with closures

// function outer() {
//   // console.log('hello world');
//   function inner() {
//     console.log(`hello there secret is: `);
//   }
//   return inner;
//   inner(); //después del return todo es ignorado
// }

// outer(); //hello world

// const value = outer();
// console.log(value); //[Function: inner]
// value(); //hello there secret is:
// outer()() //hello there secret is:
// outer(); //nada

function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`hello there secret is:${privateVar} `);
  }
  return inner;
  inner(); //después del return todo es ignorado
}

// console.log(privateVar); //privateVar is not defined
outer()(); //hello there secret is:secret
outer();
