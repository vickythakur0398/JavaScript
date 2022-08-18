'use strict';

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
