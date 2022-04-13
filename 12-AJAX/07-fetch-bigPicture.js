const url = './api/people.json';

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// con fetch tenemos la misma funcionalidad en el lugar con menos código ya que por detrás de bambalinas ya está programado de lo que tiene que hacer, nosotros nos preocupamos mas en su implementación
