// JSON Javascript object notation
const btn = document.querySelector('.btn');
const url = './api/people.json';
btn.addEventListener('click', () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);

  xhr.onreadystatechange = function () {
    // console.log(xhr)
    if (xhr.readyState === 4 && xhr.status === 200) {
      // parse
      // stringify
      const data = JSON.parse(xhr.responseText);
      // console.log(typeof xhr.responseText); //string
      // console.log(typeof data); //object
      // console.log(data); //se ve el array json
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join('');
      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        // state: xhr.readyState
      });
    }
  };
  xhr.send();
}
