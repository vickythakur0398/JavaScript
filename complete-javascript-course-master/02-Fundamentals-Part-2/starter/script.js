"use strict";
/*
function logger() {
  console.log("Hello world");
}

logger();

// let a;
// let b;
function hi(a, b) {
  console.log(a + b);
  return a;
}
hi(4, 5);
const val = hi(4, 5);
console.log(val);
*/
/*

//Function declaration // It follows hoisting that menas we can call the
//function before its define
const ageAfter = calAge(1998);
console.log(`your age after 10 years will be ${ageAfter}`);
function calAge(year) {
  return 2032 - year;
}

// const ageAfter = calAge(1998);
// console.log(`your age after 10 years will be ${ageAfter}`);

//Function Expression
const ageA = function (year) {
  return 2079 - year;
};

const num = ageA(1998);
console.log(`your age will be ${num}`);
*/
/*
//Arrow function
const name = (year) => {
  return 2037 - year;
};

console.log(name(1998));
*/
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// let a,b,c;
const average = (a, b, c) => {
  return (a + b + c) / 3;
};

const davg = average(85, 54, 41);
const kola = average(23, 34, 27);

function checkWinner(davg, kola) {
  if (davg >= 2 * kola) {
    console.log(`Dolphins won ${davg} vs ${kola}`);
  } else if (kola >= 2 * davg) {
    console.log(`Kola won ${kola} vs ${davg}`);
  } else {
    console.log(`No one won !!`);
  }
}

checkWinner(davg, kola);
*/
/*
//Array
const arr = [1, 2, 34, 5];
const friends = ["vicky", "tirupati", "batohi"];
console.log(arr);

console.log(friends[0]);
console.log(friends.length);

friends[1] = "Honey";
console.log(friends);

const fName = "vicky";
const arrr = [fName, "thakur", 2022 - 1998, friends];
console.log(arrr);
console.log(arrr.length);
console.log(arrr[3][1]);

//excerice

const calAge = (years) => {
  return years - 1998;
};

const year = [2022, 2025, 2028, 2037, 2043];
const ans = [];

for (let i = 0; i <= year.length - 1; i++) {
  ans[i] = calAge(year[i]);
}

console.log(ans);

*/
/*
//ARRAY operation

const friends = ["vikcy", "sam", "gaurav"];
let nl = friends.push(11);
console.log(nl, friends);
nl = friends.push(5, "ram", "shyam");
console.log(friends, nl);

nl = friends.unshift("Ram", "laxman");
console.log(friends, nl);

let val = friends.pop();
console.log(friends, val);

val = friends.shift();
console.log(friends, val);

val = friends.indexOf("laman");
console.log(friends, val);

val = friends.includes("saam");
console.log(friends, val);

*/
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44*/
/*
const calcTip = (avgV) => {
  if (avgV >= 50 && avgV <= 300) {
    return 0.15 * avgV;
  } else {
    return 0.2 * avgV;
  }
};

const bill = [125, 555, 44];
console.log(bill);
const tip = [];
for (let i = 0; i <= bill.length - 1; i++) {
  let val = calcTip(bill[i]);
  tip.push(val);
  bill[i] += val;
}
console.log(tip);
console.log(bill);
*/
//m-2 - i copied it bcs i did it in a differet way using loop and this is also simple
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

*/
/*
// Object

const vicky = {
  firstname: "vicky",
  age: 2022 - 1998,
  emp: "Tcs",
  job: "developer",
  friends: ["sam", "gaurav", "adi"],
};

console.log(vicky);
console.log(vicky.age, vicky.emp, vicky.job);
//using bracket notation
console.log(vicky["age"], vicky["emp"], vicky["friends"]);

const namek = "name";
console.log(vicky[`first` + namek]);
vicky.location = "India";
vicky.twitter = "@vickythakur0398";
const value = prompt("put any value defined in object");
console.log(vicky.value); //op will be undefined
console.log(vicky[value]);
// const bol = vicky.includes(vicky[value]);
// console.log(bol);
if (vicky[value]) {
  console.log(vicky[value]);
} else {
  console.log("value doesnt exist");
}

//challenge
console.log(
  `${vicky.firstname} has ${vicky.friends.length} "friends name as " ${vicky["friends"]}
  his best friend is  ${vicky.friends[0]}`
);
*/
/*
const vicky = {
  firstName: "vicky",
  job: "tcs",
  role: "developer",
  birthYear: 1998,
  hasDriverLicense: true,
  //ading method
  calcAge: function (birthYear) {
    // console.log(this);
    return 2022 - birthYear; //this.birthYear;
  },

 

};

let age = vicky.calcAge(1999);
console.log(age);
age = vicky["calcAge"](1998);
console.log(age);

*/
/*
const vicky = {
  firstName: "vicky",
  job: "tcs",
  role: "developer",
  birthYear: 1998,
  hasDriverLicense: false,
  //ading method
  calcAge: function () {
    // console.log(this);
    this.age = 2022 - this.birthYear;
    return this.age; //this.birthYear;
  },

  summaryC: function () {
    this.summary = `${this.firstName} is a ${vicky.calcAge()} years old  ${
      this.role
    } and has
    ${this.hasDriverLicense ? "a" : "no"} driver's license.`;

    return this.summary;
  },
};

console.log(vicky.summaryC());

*/
/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.*/
/*
const Mark = {
  fullName: "Mark M",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John S",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const mBMI = Mark.calcBMI();
const jBMI = john["calcBMI"]();

mBMI > jBMI
  ? console.log(`Mark BMI 
is ${mBMI} which is greater than JOhn BMI of ${jBMI}`)
  : console.log(`John BMI 
is ${jBMI} which is greater than mark BMI of ${mBMI}`);
*/
/*
for (let i = 0; i <= 5; i++) {
  console.log("You are helping us alot Thanks!!");
}

const vicky = [
  "vicky",
  2022 - 1998,
  "Tcs",
  "developer",
  ["sam", "gaurav", "adi"],
];

// for (let i = 0; i <= vicky.length - 1; i++) {
//   console.log(vicky[i], typeof vicky[i]);
// }

//cotinue and break;
/*
const ram = [];
for (let ii = 0; ii <= vicky.length - 1; ii++) {
  if (typeof vicky[ii] !== "string") continue;
  console.log(vicky[ii]);
  ram.push(vicky[ii]);
}

console.log(ram);


let no = 10;
var i = 0;
i <= 10;
{
  console.log(`Hi am doing thsi ${i}`);
  i++;
}
*/

/*Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK */

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = [];
const total = [];

const calcTip = (avgV) => {
  if (avgV >= 50 && avgV <= 300) {
    return 0.15 * avgV;
  } else {
    return 0.2 * avgV;
  }
};

for (let i = 0; i < bill.length; i++) {
  let tipp = calcTip(bill[i]);
  tip.push(tipp);
  let totall = tipp + bill[i];
  total.push(totall);
}

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(bill, tip, total);
console.log(calcAvg([2, 3, 7]));
console.log(calcAvg(bill));
console.log(calcAvg(total));
console.log(calcAvg(tip));
