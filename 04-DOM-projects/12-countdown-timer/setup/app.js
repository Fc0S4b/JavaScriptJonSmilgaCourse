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
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items); //objeto NodeList con h4.days h4.hours...
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 4, 24, 11, 30, 0);
// console.log(futureDate); //muestra la fecha configurada para la fecha actual elimina los números dentro de Date()
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0); //esta es una modificación que se hizo al final del proyecto, en donde ya no se usa una fecha random o actual, se usa una fecha tal que siempre sea 10 días los que faltan, solo esta línea es agregada mas las variables temp
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(month); //enero parte en index 0, entonces no sería mes 1
// console.log(months[month]); //May
month = months[month];
const date = futureDate.getDate();
// const weekday = futureDate.getDay();
// console.log(weekday); //0 a 6 días de la semana
const weekday = weekdays[futureDate.getDay()]; //usar el arreglo con los nombres de la semana

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month}
${year} ${hours}:${minutes}am `;

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime); //1905867000000

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today); //1649124566625
  const t = futureTime - today;
  // console.log(t); //256742446293 diferencia no exacta porque va pasando el tiempo a medida que copio y pego el valor
  // 1s = 1000 ms
  // 1m = 60s
  // 1hr =  60min
  // 1d = 24h

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  // console.log(oneDay); //86400000
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array;
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    //por si ya pasó el tiempo y no muestre el tiempo negativo
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class= "expired">sorry, this giveaway has expired</h4>`;
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
