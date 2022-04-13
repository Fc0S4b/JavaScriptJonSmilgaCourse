const url = './api/people.json';

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data); //la data de json
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  // console.log(displayData);
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

// console.log(random)// error no alcanza a llegar al try catch
// try {
//   console.log('hello');
//   console.log(random); //no definida, igual se ejecuta hello
// } catch (error) {
//   console.log(error);
// }

// console.log('hey'); //hey, se ve igual pese a que random no esté definida (se manejó el error y por ende la ejecución del código sigue)
