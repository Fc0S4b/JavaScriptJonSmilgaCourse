{
  /* <h1 class="one">hello world</h1>
<h1 class="two">hello people</h1>
<h1 class="three">hello Javascript</h1>
<button class="btn">click me</button> */
}

{
  /* <div class="img-container"> 
  // <img src="api.unsplash.com/photos" alt="random image"> se utilizará en la lógica js al momento de hacer click  un botón
</div> */
}

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'api.unsplash.com/photos';

btn.addEventListener('click', () => {
  // console.log(loadImage(url));
  loadImage(url)
    .then((data) => container.appendChild(taco))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => {
      // console.log('hey everything worked');
      resolve(img);
    });
    img.addEventListener('error', () => {
      // console.log('hey was an error');
      reject(new Error(`failed to load image from the source : ${url}`));
    });
    img.src = url;
  });
  // return promise
}
