// parentElement

const heading = document.querySelector('h2');
// console.log(heading.parentElement); //mostrará la clase o el elemento padre de h2 más cercano

// console.log(heading.parentElement.parentElement.parentElement.parentElement); //el padre del padre del padre del padre del elemento h2

const parent = heading.parentElement;
parent.getComputedStyle.color = 'red'; //el contenedor padre de h2 tendrá color rojo para su texto
