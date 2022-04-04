// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  // linksContainer.classList.toggle('show-links'); comentado porque ahora se hará de forma dinámica
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(linksHeight)
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`; //esto se agrega de forma inline lo que tendrá más especificidad, por lo que en el css, en el mediaquery se debe ajustar la altura de forma auto y con !important
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
