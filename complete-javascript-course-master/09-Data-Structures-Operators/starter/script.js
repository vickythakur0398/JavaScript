'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainMenu) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenu]];
  },

  // using rest
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

/*
//set
const orderSet = new Set(['a', 'b', 'c', 'a', 'b']);
console.log(orderSet);
const order = new Set('missippii');
console.log(order); // all unique cvalue would be there  
*/
/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �

*/
/*

for (const item of Object.values(restaurant.categories)) {
  console.log(item);
}

const entries = Object.entries(restaurant.mainMenu);
for (let [key, value] of entries) {
  console.log(`${key} and ${value}`);
}
// const entire = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (let item of entire) {
//   console.log(item);
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let item of arr.entries()) console.log(item);
/*
const res1 = {
  name: 'Mount everest',
  numGuest: 20,
};

const res2 = {
  name: 'lajawab',
  owner: 'vicky',
};
res1.numGuest || 10;
res2.numGuest = res1.numGuest || 10;

console.log(res2.numGuest);
console.log(res1.numGuest);

/*

//suing rest operator in function i made

restaurant.orderPizza('CHEESE', 'onion', 'bread', 'olive');

// rest opeartor
const arr = [1, 2, 3, 4, 56, 6];
const [a, b, , ...others] = arr;
console.log(a, b, others);

// rest in object
const { sat, ...cat } = restaurant.openingHours;
console.log(cat);
*/
/*
// spread operator
const arr = [2, 3, 4, 5];
let newarr = [...arr, 44, 55, 66];
console.log(newarr);
newarr = [22, 44, ...arr, 778, 8970897];
console.log(newarr);

const newMenu = [...restaurant.mainMenu, 'daal', 'chawal', 'papad'];
console.log(...newMenu);
console.log(newMenu);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
-console.log(...menu);
/*
//object destructing
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// naming variable differnet from property name
console.log('nested');
const {
  name: restuarantName,
  openingHours: hours = [],
  categories: tags,
  menu,
} = restaurant;
console.log(restuarantName, hours, tags, menu);

//nested object
const { fri } = openingHours;
console.log('nes');
console.log(fri);
const {
  fri: { open: fir, close: firse },
} = openingHours;
console.log('nested inside nested');
console.log(fir, firse);
*/
/*
// array destructuring
console.log("array destructuring")
let [first, , , second] = restaurant.categories;
console.log(first, second);
// if we want to switch secomd and thjen first (switching variale)
[first, second] = [second, first];
console.log(first, second);

console.log('check');
let [o1, o2] = restaurant.order(2, 0);
console.log(o1, o2);
/*
// using array desturcting for function storing
const add = function (a, b) {
  return [a * a, b * b];
};

let [c] = add(2, 3);
console.log(c);


//nested array
const nested = [2, 3, [4, 5, 6]];
const [a, , b] = [2, 3, [4, 5, 6]];

console.log(a, b);

const [z, , [b1, b2, b3]] = [2, 3, [4, 5, 6]];
console.log(z, b1, b2, b3);
*/
/*
Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/
/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �
/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
const [player1, player2] = game.players;
console.log(player1, player2);
//2
const [gk, ...fieldPlayers] = player1;
console.log(fieldPlayers);
//3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//4
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const { team1, x: draw, team2 } = game.odds;

//6
const printGoals = function (...palyers) {
  console.log(`${palyers.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich', 'tram');
//7
printGoals(...game.scored);

//8
team1 < team2 && console.log(`team1 win by ${team1}`);
team2 < team1 && console.log(`team2 win by ${team2}`);

// new

//1
for (let item of game.scored) {
  console.log(item);
}

const entries = Object.entries(game.scored);
for (let [name, goal] of entries) {
  console.log(`goal ${name + 1} by ${goal}`);
}

//2
const avg = team1 + team2 + draw / 3;
console.log(avg);

// const oddV = Object.values();
let sum = 0;
let len = Object.keys(game.odds).length;
console.log(len);
for (let val of Object.values(game.odds)) {
  sum += val;
}

sum = sum / len;
console.log(sum);

for (let [n, s] of Object.entries(game.odds)) {
  console.log(`odd of victory of${n} is ${s}`);
}

//laste
const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);
//1
const nevent = [...gameEvents.values()];

console.log(nevent);

const events = [...new Set(nevent)];

console.log(events);
//2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

//3
const lenn = gameEvents.size;
console.log(`events happen in ${90 / lenn} mins`);

//4

for (let [key, value] of gameEvents.entries()) {
  key > 45
    ? console.log(`[first half] ${key} ${value} happened`)
    : console.log(`[second half] ${key} ${value} happened`);
}
