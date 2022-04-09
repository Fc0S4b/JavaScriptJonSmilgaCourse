// Arrow functions or Fat arrow functions
// no name, always expression, assign to variable
// no function keyword
// "this"
// en html y css
// body{
//   text-transform: capitalize;
// }
// .btn{
//   background: #f15025;
//   color: #fff;
//   border: NamedNodeMap;
//   font-size: 1.5rem;
//   text-transform: capitalize;
//   cursor: pointer;
// }
{
  /* <button class="btn">click me</button> */
}

// function sayHi() {
//   console.log('hello');
// }

// sayHi();

// const hello = function (name) {
//   console.log(`Hello ${name}`);
// };
// hello('bob');

// function triple(value1, value2) {
//   return value1 * value2 * 3;
// }

const sayHi = () => console.log('hello');
sayHi(); // hello

const double = (value) => value * 2;
const num = double(4);
console.log(num); // 8;

// two parameters and more than one line
const multiply = (num1, num2) => {
  const result = num1 * num2;
  // more code here
  return result;
};

const sum = multiply(4, 6);
console.log(sum); //24

// return objetc
// const object = () => {name:'john', age: 25} //error
const object = () => ({ name: 'john', age: 25 });
const person = object();
console.log(person); //{ name: 'john', age: 25 }

// arrow functions as callback functions
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number) => number > 2);
console.log(big); // 2,4 ,6
const big2 = numbers.filter((number, index) => {
  console.log(index);
  return number > 2;
});

// con addEventListener

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => console.log('you clicked me')); //mensaje de you clicked me cada vez que se hace click en el botón configurado en el html
