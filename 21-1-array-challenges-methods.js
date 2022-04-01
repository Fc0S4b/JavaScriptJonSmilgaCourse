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

const updatedStudents = students.map(function (student) {
  // console.log(student);
  student.role = 'student';
  return student;
});

// console.log(updatedStudents);

// uso de filter -- highscores
// 1. filter array and return only scores >= 80
// 2. assign to "highScores" variable and log

const highScores = students.filter(function (student) {
  if (student.score >= 80) {
    return student; // a value that coerces to true
  }
  //returns //function reuturns undefined by default
  // alternative syntax
  // if (student.score >= 80) return student;
  // otra forma
  // return student.score >= 80;
});
// se puede retornar un booleano verdadero o falso o un valor que sea coercionado con verdadero o falso

// console.log(highScores);

// find
// 1. find specific id in array
// 2. assign to "specificId" variable and log

const specificId = students.find(function (banana) {
  return banana.id === 1;
});
const fruits = ['banana', 'orange'];
const random = fruits.find(function (fruit) {
  return fruit === 'orange';
});
// return array vs object
// console.log(random);
// console.log(specificId);

// ejercicio con reduce

// averageScore
// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to "averageScore" and log

const averageScore = students.reduce(function (scoresTotal, student) {
  // console.log(student);
  // console.log(scoresTotal);
  return scoresTotal + student.score;
}, 0); // se puede dividir la expresión por / students.length como ejemplo;

// console.log(averageScore);

//square bracket notation
// 1. list favorite subjects with reduce
// {
//   english: 1
//   history: 1
//   math: 3
// }
// 2. assign to survey and log

const subject = 'math';
const total = {};
total[subject] = 'some value'; // ó total.math = 'some value'
// console.log(total);

// desafío #2 con reduce

const survey = students.reduce(function (survey, student) {
  console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey); //{ math: 3, history: 1, art: 1 }
