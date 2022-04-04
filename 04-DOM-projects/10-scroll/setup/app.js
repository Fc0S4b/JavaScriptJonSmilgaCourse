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

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', function () {
  // console.log(window.pageYOffset); //si este valor es gande más grande que la altura del navbar entonces se hará el navbar fixed
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault(); //prevent default, no navegará automáticamente por la página al hacer click en los enlaces
    // navigate to specific spot
    // const id =  e.currentTarget.getAttribute('href');
    const id = e.currentTarget.getAttribute('href').slice(1);

    // console.log(id); //#about si haces click en about el slice es para omitir el #
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');

    let position = element.offsetTop - navHeight; //calza justo la sección por debajo del navbar
    // console.log(position); //el valor del top de esa sección
    // console.log(position);
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      //nav tiene 82px de alto en pantalla chica
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0; //quitar el navbar cuando saltas a una sección
  });
});
