const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
  // console.log(e.target); //<button class="tab-btn" data-id="vision">vision</button> (si hago click en vision) lo que lo hace único cada botón es el data-id, entonces podemos usar el dataset
  // console.log(e.target.dataset.id); //tengo el valor del data-id
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
