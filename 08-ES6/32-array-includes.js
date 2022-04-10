// Array includes() - checks if the item is an array
// useful in the conditional statements

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'lemon'; //console.log(isIncluded); //false
randomItem = 'milk'; //console.log(isIncluded); //true

// const isIncluded = groceries.includes(randomItem);
// const isIncluded = groceries.includes(randomItem, 1);

// console.log(isIncluded); //false

if (groceries.includes(randomItem)) {
  console.log(`Yeahh it's on the list`);
}
