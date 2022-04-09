// Template Strings/Literals
// `` backticks above tab key left of 1 key
// en html
{
  /* <h1>info</h1>
<div id="result"></div> */
}

const person = {
  name: 'kyle',
  job: 'developer',
  hobbies: ['surfing', 'baking', 'bowling'],
};

const result = document.getElementById('result');

// result.innerHTML = '<h2>' + person.name + '</h2>' + '<p>' + person.job + '</p>';

// mucho mejor
result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbies
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join('')}</ul>
`;
