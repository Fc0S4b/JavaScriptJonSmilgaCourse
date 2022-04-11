import { random, people } from './utils/data.js';
import showPeople from './utils/showPeople.js';
import get from './utils/getElement.js';
// import $ from './utils/getElement.js' esto se usa en JQuery

const container = get('.container');
const btn = get('.btn');
// en container1 me dará un mensaje de error que no encuentra la clase container1
// const container1 = get('.container1');

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
