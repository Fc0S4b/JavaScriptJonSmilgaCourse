const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

  {
    id: 10,
    title: 'steak dinner',
    category: 'dinner',
    price: 39.99,
    img: './images/item-10.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');
// const filterBtns = document.querySelectorAll('.filter-btn');
// console.log(filterBtns); //NodeList is empty (despúes de activar los botones dinámicos), se arregla dejando filterBtns dentro de categories

// load items
window.addEventListener('DOMContentLoaded', function () {
  // console.log('shake and bake');
  displayMenuItems(menu);
  // const categories = menu.map(function (item) {
  //   return item.category;
  // });
  // console.log(categories); se ven todas las categorías en consolas pero no están reducidas a categorías no repetidas
  displayMenuBtns();
});

// refactorizando filter dentro de categories
// // filter items
// filterBtns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     // console.log(e.currentTarget.dataset.id)
//     const category = e.currentTarget.dataset.id;
//     const menuCategory = menu.filter(function (menuItem) {
//       // console.log(menuItem.category);
//       if (menuItem.category === category) {
//         return menuItem;
//       }
//     });
//     if (category === 'all') {
//       displayMenuItems(menu);
//     } else {
//       displayMenuItems(menuCategory);
//     }
//   });
// });
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    // return item;
    // return `<h1>${item.title}</h1>`
    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>

          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join(''); //si no agregas "" se agregarán comas entre las etiquetas en el html insertado
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}

// Para agregar botones de categoría de forma dinámica
// el archivo naive-txt tiene un "pantallazo" de lo que era el código antes de hacer esta modificación
// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

function displayMenuBtns() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  ); //reduce toma values con valor inicial en ['all'], por cada item que recorre en menu y si este no está en values, se agrega al array, creando un array con valores únicos, cuando ya no encuentre más valores repetidos, retornará el array completo
  // console.log(categories);
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join('');
  // console.log(categoryBtns);
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll('.filter-btn'); //cambié a container ya que ahora se accede desde container y no document, aunque el resultado es el mismo es para mejorar la práctica para una selección más específica
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset.id)
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
