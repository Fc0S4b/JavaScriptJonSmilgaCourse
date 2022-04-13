// Fetch Built-in (no need to install anything)
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects usign xhr. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same. Still get dynamically, behind the scenes

const url = './api/people.json';

// const response  = fetch(url)
// console.log(response); //promise {<pending>}

// fetch(url)
//   .then((resp) => {
//     // response object
//     // useful prop and methdos
//     // console.log(resp); //Response {type: 'basic', url: 'http://127.0.0.1:5555/12-AJAX/api/people.json', redirected: false, status: 200, ok: true, …} (nos enfocamos en el metodo de este objeto de json)
//     // convert response into JSON data
//     // return promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data); //el contenido de json
//   })
//   .catch((err) => console.log(err)); //para atrapar el error)

// mismo resultado
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
