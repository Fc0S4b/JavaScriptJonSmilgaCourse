// const showPeople = (people) => {
//   const newPeople = people
//     .map((person) => {
//       // console.log(person);
//       const { name, job } = person;
//       return `<p>${name} <strong>${job}</strong></p>`;
//     })
//     .join('');
//   // console.log(newPeople);
//   // container.innerHTML = newPeople;
//   return newPeople;
// };

// // exportar como default, solo se puede hacer 1 módulo default

// export default showPeople;

// otra forma de exportar
export default (people) => {
  const newPeople = people
    .map((person) => {
      // console.log(person);
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');

  return newPeople;
};
// piensa bien lo que exportas por default si es función
// export default [{}] o si es un array con un objeto
// export defualt {} o si es un objeto
// para evitar bugs
