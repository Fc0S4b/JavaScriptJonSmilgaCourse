// truthy and falsy
//  "", '', ``, 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

// if (bool1) {
//   console.log(`Hey it works!`);
// }
// if (bool2 {
//   console.log(`Hey it also works!`);
// }

// const text = 'john'; //true
const text = ''; //falsy

if (text) {
  console.log('hey the value truthy');
} else {
  console.log('hey the value falsy');
}
