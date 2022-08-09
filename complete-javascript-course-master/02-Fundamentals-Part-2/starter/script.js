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
*/
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
