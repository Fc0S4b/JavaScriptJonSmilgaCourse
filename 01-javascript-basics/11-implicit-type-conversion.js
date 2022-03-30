// Implicit Type Conversion

const name = 'john';
const lastName = 'jordan';
const fullName = name + ' ' + lastName;
console.log(fullName);

const number = 4;
const number2 = 10;
const result = number + number2;
console.log(result);

const value = name - lastName;
console.log(value); //NaN

let number3 = '10';
let number4 = '23';

const result2 = number3 - number4; // si sumo ambas variables entonces se concatenarán los strings o los numbers con strings
console.log(result2); //-13, JS hizo conversión implícita

//ejemplo de un bug por problemas en la conversión

const randomNumber = 13;

document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();
  let value = document.getElementById('amount').value;
  // value = parseInt(value) //esto arregla el bug ya que el input es un string y con esto se convierte a número
  console.log('Input Value Type');
  console.log(value);
  console.log('Sun of Two Values');
  console.log(randomNumber + value);
});
