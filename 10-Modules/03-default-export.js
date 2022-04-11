// si no ejecutas con un local server (por ejemplo hacer click derecho y abrir los archivos directamente con un navegador), no se podrá acceder a los módulos js (cuando está subido a un servidor a internet no hay problemas)

import { random, people } from './utils/data.js';
// import default, se puede hacer con cualquier nombre
import showPeople from './utils/showPeople.js';

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
