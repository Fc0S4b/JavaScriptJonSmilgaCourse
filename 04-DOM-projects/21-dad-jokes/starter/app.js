throw new Error('there was an error');

const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

// console.log(btn, result)

btn.addEventListener('click', () => {
  // console.log('hello');
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';
  try {
    const response = await fetch(url, {
      // doc de esta api piden headers
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    // console.log(response)
    if (!response.ok) {
      console.log('there was an error');
    }
    const data = await response.json();
    // console.log(data)
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = 'There was an error...';
  }
};

fetchDadJoke();
