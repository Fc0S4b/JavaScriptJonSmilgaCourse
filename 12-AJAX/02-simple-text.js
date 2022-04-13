const xhr = new XMLHttpRequest(); //provide by the browser, objeto de JS, proporciona una forma fácil de obtener información de una url sin tener que recargar la página completa. Una página web puede actualizar solo una parte de la página sin interrumpir lo que el usuario está haciendo. Al ser un objeto entonces tiene métodos.

// console.log(xhr);

xhr.open('GET', './api/sample.txt');

// La propiedad XMLHttpRequest.readyState devuelve el estado en el que se encuentra un cliente XMLHttpRequest. Existe un cliente XHR en uno de los siguientes estados:

// 0	UNSENT	El cliente ha sido creado. open()no llamado todavía.
// 1	OPENED	open()ha sido llamado.
// 2	HEADERS_RECEIVED	send()ha sido llamado, y los encabezados y el estado están disponibles.
// 3	LOADING	Descargando; responseTextcontiene datos parciales.
// 4	DONE	La operación está completa.

xhr.onreadystatechange = function () {
  // console.log(xhr)
  if (xhr.readyState === 4 && xhr.status === 200) {
    // console.log('done');
    // console.log(xhr.responseText);
    const text = document.createElement('p');
    text.textContent = xhr.responseText;
    document.body.appendChild(text);
  } else {
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      // state: xhr.readyState
    });
  }
};
xhr.send();

console.log('hello world'); //runs first hello world, porque la función anterior es async
