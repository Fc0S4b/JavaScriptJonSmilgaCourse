// for of - loops through the values of an iterable object
// String, array, map, set etc - not object
// unlike for Each - we can use break, continue

const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'John Smith Peoper III';
let shortName = '';

for (const letter of longName) {
  // console.log(letter); //se verá cada carácter de longName incluyendo los espacios
  if (letter === ' ') {
    continue;
  } else {
    shortName += letter;
  }
}

// console.log(shortName); //JohnSmithPeoperIII

for (const fruit of fruits) {
  if (fruit === 'banana') {
    // break;
    continue;
  }
  console.log(fruit); //apple orange peach (se detiene antes de banana si tiene el break)
}
