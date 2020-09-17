// @ts-nocheck
/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};
Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const personOne = new Person("Matt", 39);
const personTwo = new Person("Krista", 33);
const personThree = new Person("Pablo", 35);

personThree.eat("tacos");
personThree.eat("tacos");
personThree.eat("tacos");

console.log(personThree.stomach);

personThree.poop();

console.log(personThree.stomach);
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
console.log("working");
function Car(model, milesPerGallon) {
  this.tank = 0;
  this.odometer = 0;
  this.model = model;
  this.milesPerGallon = milesPerGallon;
}
Car.prototype.fill = function (gallons) {
  this.tank = this.tank + gallons;
};
Car.prototype.drive = function (distance) {
  if (this.tank - (distance/this.milesPerGallon) > 0) {
  this.tank = this.tank - (distance / this.milesPerGallon);
  this.odometer = this.odometer + distance;
}
  else {this.odometer = this.odometer + this.tank * this.milesPerGallon;
  this.tank = 0;
  return (`I ran out of fuel at ${this.odometer} miles!`);
  }
};




const cav = new Car("Cavalier", 35);

console.log(cav);

cav.fill(20);

console.log(cav);

cav.drive(400);
console.log(cav);

cav.drive(400);
console.log(cav);
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, babyAttrs) {
  Person.call(this, babyAttrs);
  this.name = name;
  this.age = age;
  this.favoriteToy = babyAttrs;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return(`${this.name} is playing with ${this.favoriteToy}`);
};

const personFour = new Baby("Peter", 1, "Rattler");

console.log(personFour);
personFour.play();

personFour.eat("tacos");
personFour.eat("tacos");
personFour.eat("tacos");
personFour.eat("tacos");
personFour.eat("tacos");
personFour.eat("tacos");
personFour.eat("tacos");
personFour.eat("tacos");
personFour.eat("tacos");
personFour.eat("tacos");
console.log(personFour);
personFour.eat("tacos");
personFour.eat("tacos");
personFour.poop();
console.log(personFour);
/*
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1.in the global scope, 'this' refers to the window, or in other words the whole enviornment
  2.in a typical method call, 'this' refers to the object using the method, located to the left of the dot like this -> object.method(arg))
  3.in a constructor function it's the new object
  4.in a .call or .apply method call it's always the first argument passed
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
