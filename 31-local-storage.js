// web storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'john'); //provee data al abrir y cerrar el navegador, por lo que puedo cerrar y abrir el navegador, cargar la app y seguirá teniendo la data en el almacenamiento local
// sessionStorage.setItem('name','john'); //solo provee data entre las sesiones
// se pueden encontrar las herramientas en devtools (application, selecciona local storage por ejemplo y verás el key y value)

localStorage.setItem('name', 'john'); //se ve en keys name y value john
//en ambos métodos, pero si se cambia de pestaña o si se cierra el navegador, los valores en sessionStorage no estarán
sessionStorage.setItem('name', 'john');
// ambos trabajan igual

// como ejemplo sirve para hacer un carro de compras, en donde las compras añadidas al carro no se pierden al actualizar la página

localStorage.setItem('name', 'john');
localStorage.setItem('name', 'peter'); //si se mantienen los mismos name y value, estos se sobrescribirán procura usar nombres distintos
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');
// como acceder a esos keys y values

const name = localStorage.getItem('name');
console.log(name); //john

localStorage.removeItem('name'); //se eliminará name del local storage
const anotherName = localStorage.getItem('name');
console.log(anotherName); //null porque se eliminó name
localStorage.clear(); //limpiar todo el localStorage
