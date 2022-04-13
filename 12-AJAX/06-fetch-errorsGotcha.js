const url = './api/people.jsons';

// el error no es por la url mal escrita, es por que no se puede convertir a json la response
fetch(url)
  .then((response) => console.log(response) /*response.json()*/)
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); //por lo que no hacemos login al error
