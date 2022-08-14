'use strict';
/*
console.log(calAge);


let a = 'ram';
console.log(a);
function calAge(byear) {
  const age = 2022 - byear;
  function printAge() {
    console.log(`you are ${firstname} born in ${age} ok ${byear}`);

    if (byear >= 1990 && byear <= 2000) {
      var any = 'hi tyoy hjk s';
      let st = `you yes u ${firstname} you are ${age} years old and born in ${byear}`;
      console.log(st);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
    // console.log(add(2, 3));
    // console.log(st);
    console.log(any);
  }

  printAge();
  return age;
}

const firstname = 'vicky';
calAge(1998);

//variable hoisting
console.log(me);
// console.log(job);
// console.log(role);
var me = 'vicky';
let job = 'tcs';const role = 'developer';

console.log(add(2, 3));
console.log(add);

function add(a, b) {
  return a + b;
}
*/

//using This keyword
console.log(this);
// op will be widow object

// this inside nowmal function
const calAge = function (year) {
  console.log(2022 - year);
  console.log(this); // as we know inside function this is undefined in strict mode in
  //soppy mode this will give window object
};

// calAge(1998);

// this inside arrow function
const calAgArow = year => {
  console.log(2022 - year);
  console.log(this); //In arrow function there is no this keyword i.e it dont have thier own
  // this keyword so it uses parent scope this which is global this keyword i.e window object
};

calAgArow(1998);

// this inside method
const vicky = {
  year: 1998,
  calAgee: function () {
    console.log(this); // year and calAge function
    return 2022 - this.year;
    // here the this keyword is used inside a method so it acceses the object that is calling
    //the method so if we change the ,ethod or borrow the method it will
    //access those propeties ex i am creating another sameer
  },
};

console.log(vicky.calAgee());

const sameer = {
  year: 1999,
};

// here i am borrowing a method
sameer.calAgee = vicky.calAgee;
console.log(sameer.calAgee()); // here the same this keyowrd is accesing year = 1999
//which proves thios keyword always points to the object that is calling the method
// so here it is pointing to sameer

// if we will copy a function and it will simpley become a normal functionb
// so again this will be undefined in normal function
const normalF = vicky.calAgee;
console.log(normalF);
normalF(); // undefiend and  error bcs this.year will be undefined.year will cause an error
