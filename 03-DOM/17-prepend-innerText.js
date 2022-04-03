// prepend
// innerText

const heading = document.createElement('h2');
heading.innerText = `i'm a dynamic heading`;

document.body.prepend(heading); //insertará heading antes del primer child del contenedor, en este caso de body
