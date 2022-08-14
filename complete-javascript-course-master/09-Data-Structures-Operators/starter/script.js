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
};

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
