// Array.from and Array.of - NOT ON THE PROTOTYPE
// Array.from
// Array.of
// of creates a new Array instance from a variable number of arguments

const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);
// [ 'one', 'two', 'three' ]
// [Function: map]
// undefined
// undefined

// the way of works is we create new array instance from a variable number of arguments

const friends = Array.of('john', 2, true);
console.log(friends); //[ 'john', 2, true ]
