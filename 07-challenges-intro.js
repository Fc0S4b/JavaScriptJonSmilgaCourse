// Variables #1

const firstName = 'fco';
const last_name = 'sbo';
let address = 'main street';
address = 'first street';

console.log(firstName, last_name, address);

// concatenate strings #2

const street = 'main street';
const country = 'USA';

const fullMailingAddress = street + ' ' + country;

console.log(fullMailingAddress);

// numbers #3

const score1 = 98;
const score2 = 75;
const score3 = 45;

const totalScore = score1 + score2 + score3;
const avgScore = totalScore / 3;
console.log(totalScore, avgScore);

const plates = 20;
const people = 7;

let remainingPlates = plates % people;
console.log(remainingPlates);
remainingPlates++;

const message = 'There are ' + remainingPlates + ' plates avaible';

console.log(message);
