// this
// points to the left of the dot

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function (name) {
//     console.log(`My full name is ${name}`);
//   },
// };
// const bob = {
//   firstName: 'bob',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`My full name is Bob Sanders`);
//   },
// };

// john.fullName('John Anderson'); //hacerlo así no apunta directamente a firstName y lastName
// bob.fullName();

const john = {
  firstName: 'john',
  lastName: 'anderson',
  fullName: function () {
    //     console.log(this); //{
    //   firstName: 'john',
    //   lastName: 'anderson',
    //   fullName: [Function: fullName]
    // }
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};
const bob = {
  firstName: 'bob',
  lastName: 'sanders',
  fullName: function () {
    // console.log(`My full name is Bob Sanders`);
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

// solo si a la izquierda del punto es el objeto actual entonces apuntarás a ese objeto
john.fullName('John Anderson'); //hacerlo así no apunta directamente a firstName y lastName
bob.fullName();
//this siempre apuntará al objeto de forma dinámica
