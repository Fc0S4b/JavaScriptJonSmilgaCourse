// String includes() - checks if a string contains another string

const products = [
  { title: 'modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'leather Chair' },
];

// const firstName = 'john';
// const result = firstName.includes('jo');
// console.log(result); //true
// const firstName = 'john';
// const result = firstName.includes('j', 1); //segundo argumento es la posición de donde empieza a buscar includes
// console.log(result); //false

// const firstName = 'john';

// const product = {
//   title: 'Leather Chair',
// };

// const result = product.title.includes('Le')
// console.log(result); //true

// const text = 'ad';
const text = 'a';
const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(text)
);

console.log(filteredProducts); // con text = ad entonces no hay nada[], pero con a
// [{ title: 'Bar Stool' }, { title: 'Armchair' }, { title: 'leather Chair' }];
