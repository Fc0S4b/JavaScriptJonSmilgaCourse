// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const { first, last, city, zip } = bob;
console.log(first, last, city, zip); //bob sanders chicago undefined
// const { first: firstName, last, city, zip } = bob;
// console.log(firstName, last, city, zip); //bob sanders chicago undefined
// const {
//   first: firstName,
//   last,
//   city,
//   zip,
//   siblings: { sister: favoriteSibling },
// } = bob;
// console.log(firstName, last, city, zip, favoriteSibling); //bob sanders chicago undefined jane
// const [] para arrays

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);
