'use strict';

const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   console.log(this);
  //   console.log(this.firstName, this.birthYear);
};

const vicky = new Person('vicky', 1998);
console.log(vicky);

Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(vicky.calAge);
vicky.calAge();
const ram = new Person('ram', 1);
console.log(ram);

ram.calAge();

console.log(ram.__proto__);
console.log(vicky.__proto__ === Person.prototype);
console.log(Person.prototype);
console.log(Person.prototype.isPrototypeOf(vicky));

Person.prototype.species = 'Homo Sapiens';
console.log(ram.species);

console.log(ram.hasOwnProperty('species'));
console.log(vicky.__proto__.__proto__.__proto__);

const arr = [1, 2, 4, 6, 5, 4, 7, 7, 2];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const a = document.querySelector('h1');
console.log(a);

/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK */
console.log(`question`);
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  console.log(` new speed = ${this.speed + 10}kmph`);
};

car.prototype.break = function () {
  console.log(`after brea = ${this.speed - 5}kmph`);
};

const tata = new car('tata', 120);
tata.accelerate();
tata.break();

const mahi = new car('mahindra', 100);
mahi.accelerate();
mahi.break();
