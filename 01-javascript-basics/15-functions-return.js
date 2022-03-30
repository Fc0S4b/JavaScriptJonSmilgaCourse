// Arrays, Functions and Objects
// return
// default undefined, shortcuts, ignores after
// 1 inch 2.54cm
const wallHeight = 80;

function calculate(value) {
  // const newValue = value * 2.54;
  // console.log('The value in cm is : ' + value * 2.54 + ' cm');
  // return newValue
  // si no colocas return, el resultado de la función será undefined
  return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

calculate(200); //nada aparece, porque debe ser asignada a una variable
