// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const hjl = 'jhhlh';
// console.log();
// const temp = prompt('eneter cvaue');
// const measureKelvin = function (temp) {
//   return temp + 273;
// };

// console.log(measureKelvin(temp));
/*
for (let i = 0; i < 10; i++) {
  console.log('this will work');
  console.log(i);
  console.log(i + 2);
}
*/ /*Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]*/

const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`temp is ${arr[i]} on ${i + 1} day`);
  }
};

printForecast([17, 21, 23]);

printForecast([12, 5, -5, 0, 4]);
