'use strict';
/*
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
GOOD LUCK 
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


//ES6 classes
//class declaratiom
class PersonCl {
  constructor(fname, byear) {
    this.fname = fname;
    this.byear = byear;
  }

  calAge() {
    console.log(2037 - this.byear);
  }
  get age() {
    return 2037 - this.byear;
  }
}

const vicky = new PersonCl('vicky', 1998);
console.log(vicky);

console.log(vicky.age);

vicky.calAge();
console.log(vicky.__proto__);

const account = {
  owner: 'vicky',
  movements: [100, 200, 300, 400],

  //usinmg getters
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest;
console.log(account.latest);
account.latest = 50;
console.log(account.latest);
*/
/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h


extar 
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
§ Data car 2: 'Mercedes' going at 95 


class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} is going at ${this.speed + 10}`);
  }

  brake() {
    console.log(`${this.make} is going at ${this.speed - 5}`);
  }

  //addimg setter and getter

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const thar = new Car('thar', 140);
console.log(thar.speedUs);
thar.accelerate();
thar.brake();
thar.speedUs;

/*
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20, 
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
you 'accelerate'! Hint: Review the definiton of polymorphism �
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(` new speed = ${this.speed + 10}kmph`);
};

Car.prototype.break = function () {
  console.log(`after brea = ${this.speed - 5}kmph`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// linking both prototype
EV.prototype = Object.create(Car);

EV.prototype.chargeBattery = function (chargeTo) {
  console.log(`battery is charge upto ${this.charge}`);
};

EV.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge = this.charge - 1;
  console.log(
    `${this.make} is going at ${this.speed}km/ph with a charge of ${this.charge} `
  );
};

const Nexon = new EV('Tata-Nexon', 120, 100);
Nexon.accelerate();
Nexon.chargeBattery();

/*
// Inheritance in Constructor classes
const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// const vicky = new Person('vicky', 1998);
// console.log(vicky);

Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (fname, byear, course) {
  Person.call(this, fname, byear);
  this.course = course;
};
//linking student and person prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am puruing ${this.course}`);
};

Student.prototype.constructor = Student;

const vic = new Student('vicky', 1998, 'ECE');
vic.introduce();
vic.calAge();
*/
