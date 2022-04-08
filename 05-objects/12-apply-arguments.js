// call - runs instantly, arguments -list of items
// apply - runs instantly, arguments - array of items

const john = {
  name: 'john',
  age: 24,
};

const susan = {
  name: 'susan',
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
  );
}

greet.call(john, 'san diego', 'us'); //sigue siendo el primer parámetro un this que apunta al objeto john
greet.call(susan, 'san diego', 'us');
greet.call({ name: 'peter', age: 30 }, 'san diego', 'us');

// si paso , 'san diego', 'us' habrá error porque tiene que ser en un []
greet.apply(john, ['san diego', 'us']);
greet.apply(susan, ['san diego', 'us']);
greet.apply({ name: 'peter', age: 30 }, ['san diego', 'us']);
