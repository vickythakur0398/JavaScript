'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// by me
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

   
    
    <div class="movements__value">${mov} Rs</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

//using reduce to calculate balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, items) => {
    return acc + items;
  }, 0);

  labelBalance.textContent = `${balance} Rs`;
};

calcDisplayBalance(account1.movements);

// using map to compute each of the username ids
const createUserNames = function (acc) {
  acc.forEach(item => {
    item.userName = item.owner
      .toLowerCase()
      .split(' ')
      .map(item => {
        return item[0];
      })
      .join('');
  });
};
createUserNames(accounts);
console.log(accounts);
// const user = 'Steven Thomas Williams';
//will no w chain using map method
//  let a = ' ';
// userName.forEach((item, index) => {
//   console.log(item, index);
//   let b = item.slice(0, 1);
//   a += b;
//   console.log(b);
//   console.log(a);
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice(1, 4));
const sc = arr.slice();
console.log(sc);

//splice
console.log(arr.splice(-1));
console.log(arr);

let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//concat
const narr = arr.concat(arr2);
console.log(arr);
console.log(arr2);

//join
console.log(narr.join('{docksho-boksho}'));
console.log(narr);

//at
console.log(narr.at(2));
console.log(narr.at(-2));

// for (let i of narr) {
//   console.log(i);
// }
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let i of movements) {
  if (i < 0) {
    console.log(`withdrew ${Math.abs(i)}`);
  } else {
    console.log(`deposit ${Math.abs(i)}`);
  }
}

//for each

movements.forEach(function (i) {
  if (i < 0) {
    console.log(`withdrew ${Math.abs(i)}`);
  } else {
    console.log(`deposit ${Math.abs(i)}`);
  }
});

// arr2.forEach(function (i) {
//   console.log(i);
// });

for (const [item, value, mapd] of movements.entries()) {
  console.log(item, value);
}

movements.forEach(function (index, value, array) {
  console.log(index, value, array);
});

//maps with for weach
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key) {
  console.log(value, key);
});
//set
const setcurrency = new Set(['usd', 'rupees', 'rubel', 'eur', 'usd', 'rupees']);
console.log(setcurrency);
setcurrency.forEach(function (value, key, set) {
  console.log(value, key, set);
});
*/
/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �


const checkDogs = function (arr, arr2) {
  let arr1 = [...arr];
  arr1.splice(-1);
  arr1.splice(-1);
  arr1.splice(0, 1);
  // arr1.pop(0);
  // arr1.splice(-5);
  //adding both cats
  let both = [...arr1, ...arr2];
  both.forEach(function (item, i) {
    both[i] >= 3
      ? console.log(`this dog aged ${item} is adult`)
      : console.log(`this dog aged ${item} is kid`);
  });
  console.log(arr1);
  console.log(both);
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
//map
const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const con = movements.map(function (item) {
  const ans = item * eurToUsd;
  return ans;
});

console.log(con);

const movementsDesc = movements.map((item, index, arr) => {
  return `Movement ${index + 1}: you ${
    item > 0 ? 'deposited ' : 'withdrew '
  }${item} `;
});

console.log(movementsDesc);

const deposits = movements.filter(item => {
  if (item > 0) return item;
});

console.log(deposits);

//reduce
const ans = movements.reduce(function (acc, item) {
  return acc + item;
});

console.log(ans);

const ram = [-1, 0, 77, 88, 999, 1, 7777, 8];

const max = ram.reduce((acc, item) => {
  item > acc ? (acc = item) : acc;
  return acc;
}, -1);

console.log(max);
/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const checkDogs = function (arr, arr2) {
  let arr1 = [...arr];
  arr1.splice(-1);
  arr1.splice(-1);
  arr1.splice(0, 1);
  // arr1.pop(0);
  // arr1.splice(-5);
  //adding both cats
  let both = [...arr1, ...arr2];
  both.forEach(function (item, i) {
    both[i] >= 3
      ? console.log(`this dog aged ${item} is adult`)
      : console.log(`this dog aged ${item} is kid`);
  });
  console.log(arr1);
  console.log(both);
};

const calcAverageHumanAge = function (arr) {
  const ans = arr.map((item, ind) => {
    return item <= 2 ? 2 * item : 16 + item * 4;
  });

  const fil = ans.filter(item => {
    return item >= 18;
  });
  const avg = fil.reduce((acc, item, val) => {
    return acc + item / fil.length;
  }, 0);
  console.log(ans);
  console.log(fil);
  console.log(avg);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
