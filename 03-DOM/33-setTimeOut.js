/* setTimeout - runs function once after specific time
 - pass function reference
 - duration in ms (1000 ms = 1 second)
 - default 0, will cover more extensively in async/await section
 - returns unique identifier
 - clearTimeout to cancel
 - on window object
 */

function sayHello() {
  console.log('hello john');
}

// sayHello(); //se ejecuta al instante

setTimeout(sayHello, 1000); //se ejecuta a los 1000 ms
// setTimeout(sayHello(), 1000) //error porque estas invocando la función inmediatamente

// alternative approach, ES6 arrow functions

setTimeout(function () {
  console.log('hello john');
}, 2000);

// pass arguments

function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

setTimeout(showScore, 1000, 'john', 34); //tercer y cuarto argumento son parámetros de la función del primer argumento

const firstID = setTimeout(showScore, 1000, 'john', 34);
const secondID = setTimeout(showScore, 1000, 'peter', 80);

console.log(firstID);
console.log(secondID);

clearTimeout(firstID); //previene que se ejecute el firstID
