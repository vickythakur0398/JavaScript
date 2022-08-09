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

//solution 
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

*/
/*
//strings
fName = "vicky";
lName = "Thakur";
cYear = 2022;
bYear = 1998;

const full = `I'm ${fName} and I am ${cYear - bYear} old`;
const ful = "I'm" + fName + "I'm" + (cYear - bYear) + " old";
console.log(full);
console.log(ful);

const vick = `ram
is 
good 
boy`;
console.log(vick);
*/

//coding challenge 2 I did earlier
/*
//Type conversion and Type coercion


const imput = `1991`;
console.log(imput + 18);
console.log(Number(imput) + 18);
console.log("I am " + String(24) + " Years old");
//Type coercion

console.log("I am " + 23 + " Years old h");
console.log("16" + `03` + `1998`);
console.log(`1998` - `03` - 16);
*/
/*
//trtuthsy and falsy value
console.log(Boolean(0));
console.log(Boolean("vicky"));

const money = 00;
if (money) {
  console.log("Enjoy with the riches");
} else {
  console.log("Get some job ");
}

*/

/*
// type coercon
console.log(18 == "18");
console.log(18 === "18");
const favt = prompt("wat to put");
console.log(typeof favt);
*/
/*
//bollean operator
const has = true;
const not = false;

console.log(has && not);
console.log(has || not);
console.log(has && !not);

Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let d;
let k;
let avg = 0;
let avgg = 0;

let avgd = (96 + 108 + 89) / 3;
let avgk = (88 + 91 + 110) / 3;
let con = "";

let avgdd = (97 + 112 + 811) / 3;
let avgkk = (109 + 95 + 50) / 3;
let conn = "";

console.log("series first");

if (avgd > avgk) {
  avg = avgd;
  con = "avgd";
} else if (avg === avgk) {
  avg = 0;
  con = "draw";
} else {
  avg = avgk;
  con = "avgk";
}

if (avg < 100) {
  console.log(`no one won the trrophy ${avgd} ${avgk}`);
  // console.log(`${con} won the series by scoring ${avg}`);
} else if (avg === 100) {
  console.log("series is won by draw");
} else {
  console.log(`${con} won the match  by scoring ${avg}`);
}

// there is another methoid also by using operator
//m2

console.log("new series with methd2");

if (avgdd > avgkk && avgdd >= 100) {
  console.log(
    `dolphins are champ they scored ${avgdd} while koala loosers scored ${avgkk}`
  );
} else if (avgkk > avgdd && avgkk >= 100) {
  console.log(
    `koalas are champ they scored ${avgkk} while dolphin loosers scored ${avgdd}`
  );
} else if (avgdd === avgkk && avgdd >= 100) {
  console.log("match is draw");
} else {
  console.log(`no one won`);
}

//switch
let day = "wednesday";

if (day === "monday") {
  console.log(`hi i am mmonday`);
} else if (day === "tuesday") {
  console.log("hi i am tueday");
} else if (day === "wednesday" || day == "thursay") {
  console.log("we have both");
} else {
  console.log(`okay`);
}

switch (day) {
  case "monday":
    console.log(`I am monday`);
    break;
  case "tueday":
    console.log(`I am tuesday`);
    break;
  case "wednesday":
  case "thurday":
    console.log(`iAM both`);
  default:
    console.log(`okay`);
}
*/
/*
//ternanry operator
const age = 23;
age >= 18 ? console.log(`I am an adult`) : console.log(`i am bachha`);
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430*/

let tip;
let bill = 40;
let value;
value = bill >= 50 && bill <= 300 ? (value = 15) : (value = 20);

console.log(value);
tip = (value / 100) * bill;
console.log(`Bill was ${bill}, tip was ${tip} and the total was ${tip + bill}`);
