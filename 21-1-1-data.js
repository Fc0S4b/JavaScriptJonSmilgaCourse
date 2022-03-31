// use multiple files
// - easer to manage code base (file, project)
// - order matters
// -other ways to achieve the same result (ES6 modules, fetch DB)
// - not limited to just static data

const students = [
  {
    id: 1,
    name: 'peter',
    score: 80,
    favoriteSubject: 'math',
  },
  {
    id: 2,
    name: 'susan',
    score: 99,
    favoriteSubject: 'history',
  },
  {
    id: 3,
    name: 'anna',
    score: 85,
    favoriteSubject: 'math',
  },
  {
    id: 4,
    name: 'john',
    score: 34,
    favoriteSubject: 'art',
  },
  {
    id: 5,
    name: 'bobo',
    score: 74,
    favoriteSubject: 'math',
  },
];

function sayName(name) {
  console.log(name);
}

