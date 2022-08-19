'use strict';
/*
const bookings = [];
const createb = function (flightNum = 'A3830', passneger, price) {
  const booking = {
    flightNum,
    passneger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createb('3455', 34, 545);
createb('44');

const flight = 'Air456';
const vicky = {
  name: 'vicky',
  passport: 34576,
};

const checkIn = function (flightNo, pasengerName) {
  flightNo = 'afdhhg78';
  pasengerName = vicky.passport;
};

checkIn(flight, vicky);
console.log(flight, vicky);

// callback func

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); // it will replace all spaces with no space
};

const upperFirstWord = function (str) {
  //first spliting the string
  const [first, ...others] = str.split(' ');
  const a = [first.toUpperCase(), ...others].join(' ');
  return a;
};

//creating higher order function

const trans = function (str, fn) {
  return `Trans string ${fn(str)}`;
};

console.log(trans('JavaScript is the best!', upperFirstWord));
console.log(trans('JavaScript is the best!', oneWord));

const example = function (str) {
  str += ' Trust me you will do good';
  return str;
};

const higherorderFun = function (str, fn) {
  return `str  will be added : ${fn(str)}`;
};

console.log(higherorderFun('vikcy what are you doing Man!!', example));

//function returning functio

const greet = function (greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
};

console.log(greet('vicky')('hello'));

const greetA = greetings => {
  return name => {
    console.log(`${greetings} ${name}`);
  };
};

greetA('vicky')('samuari');


const airIndia = {
  airline: 'airIndia',
  code: 'AI',
  bookings: [],

  book: function (flightNum, name) {
    console.log(
      `${name} booked a set on ${this.airline} having code ${this.code}`
    );
    this.bookings.push({ flight: `${flightNum} passendger: ${name}` });
  },
};

airIndia.book('345', 'vicky THakur');
console.log(...airIndia.bookings);
airIndia.book('345', 'sameer');

const airAsia = {
  airline: 'airAsia',
  code: 'AA',
  bookings: [],
};

const book = airIndia.book;
// error bcs this act as function and function inside this is undefined
// book(868, 'vicku');
book.call(airAsia, 4545, 'vicky Thakur');
book.call(airIndia, 78945, 'sameer Ranjan');

const arr = [24, 'aditya'];
book.apply(airIndia, arr);
book.call(airAsia, ...arr);

//bind return new function

const bindReturnAirAsia = book.bind(airAsia);
bindReturnAirAsia(23445, 'vuicky raja');
console.log(airAsia);

//bind in event listener

const lft = {
  name: 'luft',
  code: 7678,
};
console.log(lft);
lft.planes = 300;
console.log(lft);
lft.buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

lft.buyplane();
// document.querySelector('.buy').addEventListener('click', lft.buyplane);
document
  .querySelector('.buy')
  .addEventListener('click', lft.buyplane.bind(lft));

// console.log(addTax(100, 0.23));
/*
const addTax = function (rate, value) {
  return value + value * rate;
};

const addVat = function (val, fn) {
  let vall = 0.23;
  let vat = function (vall, fn) {
    return `${fn(val)}`;
  };
};

console.log(addVat(122, addTax));


const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTax(0.23)(100));
*/
/*
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  // answers: [0, 0, 0, 0],
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`the poll results are ${this.answers.join(', ')}`);
    }
  },

  registerNewAnswer() {
    const prom = prompt(
      'What is your favourite programming language?\n  0: JavaScript \n 1: Python \n  2: Rust \n  3: C++ '
    );
    const val = Number(prom);
    // console.log(val, prom, typeof val, typeof prom);
    if (val === 0) {
      this.answers[0] = this.answers[0] + 1;
      this.displayResults();
      this.displayResults('string');
      // console.log(this.answers);
    } else if (val === 1) {
      this.answers[1] = this.answers[1] + 1;
      // console.log(this.answers);
      this.displayResults();
      this.displayResults('string');
    } else if (val === 2) {
      this.answers[2] = this.answers[2] + 1;
      // console.log(this.answers);
      this.displayResults();
      this.displayResults('string');
    } else if (val === 3) {
      this.answers[3] = this.answers[3] + 1;
      // console.log(this.answers);
      this.displayResults();
      this.displayResults('string');
    } else {
      alert('please put a valid response');
    }
  },
};

// poll.registerNewAnswer();
const fun = poll.registerNewAnswer.bind(poll);
const btn = document.querySelector('.poll');
btn.addEventListener('click', fun);

// last usinmg call to display arrays
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
