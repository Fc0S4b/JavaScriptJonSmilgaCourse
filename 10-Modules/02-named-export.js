// global nae space / hard to navigate

import { random, people } from './utils/data.js'; //se debe agregar type module al script de app.js en index.html si nó habrá error de importación
// console.log(random);

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      // console.log(person);
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');
  // console.log(newPeople);
  container.innerHTML = newPeople;
};

btn.addEventListener('click', () => {
  showPeople();
});
