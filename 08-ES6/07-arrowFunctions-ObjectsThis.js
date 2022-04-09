// Arrow functions or Fat arrow Functions
// reg function : 'this' refers parent, left of the dot
// arrow function : referes to it's current surrounding scope

const bob = {
  firstName: 'bob',
  lastName: 'smith',
  sayName: function () {
    console.log(this);
    const self = this;
    // setTimeout(function () {
    //   console.log(this); //apunta a window object
    //   console.log(self); //apunta a bob
    //   // console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    //   console.log(`Hello, my name is ${self.firstName} ${self.lastName}`);
    // }, 2000);
    setTimeout(() => {
      console.log(this); //apunta al objeto bob
      // console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

const anna = {
  firstName: 'anna',
  lastName: 'sanders',
  sayName: () => {
    console.log(this); //referes to it's current surrounding scope
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName(); //{ firstName: 'bob', lastName: 'smith', sayName: [Function: sayName] }
// Hello, my name is bob smith
// anna.sayName(); //{} //window object
// Hello, my name is undefined undefined //en window no tenemos firstName ni lastName por eso aparece undefined
