// Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
// JS revisa desde el enfoque local primero para buscar una variable, si esta no se encuentra en el primer entorno, entonces busca en el siguiente entorno que lo envuelve y si no está en ese segundo entorno, buscará en el entorno de más afuera hasta llegar al entorno global. Si en el entorno global no existe, entonces se declara como undefined
