const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  // console.log('hello');
  document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles
  .map((article) => {
    //  console.log(article);
    const { title, date, length, snippet } = article;
    // format date
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
      <h2>${title}</h2>
      <div class="post-info">
        <span>${formatDate}
          <span>${length}</span>
        </span>
      </div>
      <p>${snippet}</p>
    </article>`;
  })
  .join('');

// console.log(articles)

articlesContainer.innerHTML = articlesData;
