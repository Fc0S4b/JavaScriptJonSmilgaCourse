// setInterval - runs function repeatedly, at specific intervals

// - pass function reference
// - duration in ms (1000 ms = 1 second)
// - default 0, will cover more extensively in async/await section
// - returns unique identifier
// - clearInterval to cancel

function showScore(name, score) {
  console.log(`hello ${name}, your score is  ${score}`);
}

// setInterval(showScore, 2000); //se ejecuta cada dos segundos

setInterval(showScore, 1000, 'bobo', 45); //con argumentos

// para cancelar se asigna un id único

const firstID = setInterval(showScore, 1000, 'bobo', 45);
const secondID = setInterval(showScore, 4000, 'susan', 88);

clearInterval(firstID);
