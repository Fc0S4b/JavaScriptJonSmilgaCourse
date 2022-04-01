//Date

const date = new Date();
// console.log(date) //2022-04-01T02:24:29.897Z
// para obtener un formato específico:
// es nuestro trabajo referenciar valores en nombres ya que date no entregará el nombre del mes

const month = date.getMonth();
console.log(month); //2, es marzo ya que empieza de 0= enero

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// console.log(months[month]); //March
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const day = date.getDay();

console.log(days[day]); //thursday

console.log(date.getDate()); //31
console.log(date.getFullYear()); //2022

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()} `;

console.log(sentence); //Thursday, 31 2022

// document.body.innerHTML = sentence  //para insertarlo en html

// const date = new Date('1/12/2004') //set the date
