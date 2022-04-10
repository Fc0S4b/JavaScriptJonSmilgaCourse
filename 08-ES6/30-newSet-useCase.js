// new Set() - accepts iterable objects

const products = [
  {
    title: 'high-back bench',
    company: 'ikea',
  },
  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
];

// const companies = products.map((item) => item.company);
// console.log(companies); //[ 'ikea', 'marcos', 'caressa', 'ikea' ]

// // no es necesario usar reduce, como el ejemplo del proyecto de menu,
// // donde se filtraban categorías de menu usando reduce
// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies); //Set(3) { 'ikea', 'marcos', 'caressa' }

// // para guardarlas en un array, puedes añadir una categoría más escribiendo [...uniqueCompanies, 'all']
// const finalCompanies = [...uniqueCompanies];
// console.log(finalCompanies); //[ 'ikea', 'marcos', 'caressa' ]

// misma funcionalidad en una línea
const result = ['all', ...new Set(products.map((item) => item.company))];
console.log(result); //[ 'all', 'ikea', 'marcos', 'caressa' ]
