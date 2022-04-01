// use multiple files
// - easer to manage code base (file, project)
// - order matters
// -other ways to achieve the same result (ES6 modules, fetch DB)
// - not limited to just static data

// organizar los datos en archivos aparte hace que el código se ordene y visualize mejor. Para usar una variable de un archivo en otro archivo js, se linkean los dos en etiquetas script en un archivo html. En este caso, data y array-challenges están linkeados en 21-index.html. De esta forma se podría usar la variable students de data en array-challenges sin problemas con el navegador.
// la primera vez que hice esto me resultó sin problemas visualizando los resultados en consola, después como si nada arrojó error no reconociendo la variable student en array-challenges.
//para trabajar sin el navegador y desde consola tendré que copiar estos datos en el archivo array-challenges
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
