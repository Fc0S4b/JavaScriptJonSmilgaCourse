// Rest operator ...
// gathers/collects the items
// destructuring arrays y objects and gathering the primaries in a function

// arrays
const fruit = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...rest] = fruit; //...rest o ...banana
console.log(first, rest); //apple[('lemon', 'banana', 'pear')];

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest2 } = person;
// console.log(job, rest); //developer [ 'lemon', 'banana', 'pear' ]
// const {...rest, job} = person;//error, rest operator must be the last item
console.log(job, rest);

const testScores = [78, 90, 56, 43, 99, 65];

// gathering parameters
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};
getAverage(person.name, 78, 90, 56, 43); //john
// [ 78, 90, 56, 43 ] john's average score is 66.75

// passing as an arguments
getAverage(person.name, ...testScores); //john's average score is 71.83333333333333
