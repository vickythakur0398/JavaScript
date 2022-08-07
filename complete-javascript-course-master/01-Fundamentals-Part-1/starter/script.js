/*let js = "amazing";
console.log(40 + 8 - 17);
let $vns = "bhjkhj";
console.log($vns);
let $$$$ = "hello";
console.log($$$$);
let PI = 3.14;
let firstJob = "TCS Assocaite";
let myCountryName = "INDIA";
let continent = " ASIA";
let population = "13000000000";
console.log(
  "my county is " +
    myCountryName +
    " It is in" +
    continent +
    " it has population of " +
    population
);
let hi;
console.log(hi);
*/

//DataType 12
/*
let checkingBoolean = true;
console.log(typeof checkingBoolean);
console.log(typeof "bivj");
*/

/*
// let const var 13

let canBeMutableBlockScope = 'Prime Minister is Mr. Modi';
const Constant = 'PM leads the cabinet';

var itIsFunctnScopeMutable = 'dont use me';

*/
/*
//Basic Operators I already know most of this

console.log(2022 - 1998, 2022 - 1979);

const fName = "vicky";
const sName = "Thakur";

const fullN = fName + " " + sName;
console.log(fullN);
*/

//coding challenge 1
/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK �
*/

let markH, johnH, markW, johnW;
markH = 1.88; //1.69;
markW = 95; //78;
johnH = 1.76; //1.95;
johnW = 85; //92;

let markBmi = markW / markH ** 2;
let johnBmi = johnW / johnH ** 2;

let markHigherBMI;

if (markBmi > johnBmi) {
  markHigherBMI = true;
  console.log("Mark has higher bmi" + markBmi + "fg" + johnBmi);
} else {
  console.log("Mark is fusadi in BMI" + markBmi + "fg" + johnBmi);
}

// 78, 92, 1.69, 1.95;

const d = 4;
console.log(d ** 2);
console.log(d * 2);
console.log(d * d);
