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
const displayMovements = function (movements, sorts = false) {
  containerMovements.innerHTML = '';
  const movs = sorts ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

   
    
    <div class="movements__value">${mov} Rs</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

//using reduce to calculate balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, items) => {
    return acc + items;
  }, 0);

  labelBalance.textContent = `${acc.balance} Rs`;
};

// calcDisplayBalance(account1.movements);

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

const calcDisplaySummary = function (arr) {
  const inside = arr
    .filter(item => item > 0)
    .reduce((acc, item) => {
      return acc + item;
    }, 0);

  labelSumIn.textContent = inside;

  const outside = arr
    .filter(item => item < 0)
    .reduce((acc, item) => {
      return acc + item;
    }, 0);

  labelSumOut.textContent = Math.abs(outside);

  const interest = arr
    .filter(item => item > 0)
    .map(item => {
      return (item * 1.2) / 100;
    })
    .filter((item, _, arr) => {
      console.log(arr);
      return item >= 1;
    })
    .reduce((acc, item) => {
      return acc + item;
    }, 0);

  labelSumInterest.textContent = Math.trunc(interest);

  // console.log(inside, outside, interest);
  // const interst = arr.filter(item => item > 0).reduce((acc, item) => {});
};
//making update ui
const upddateUi = function (acc) {
  //display movements
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary // i have kept same interest rate in all
  calcDisplaySummary(acc.movements);

  // sortMov(acc.movements);
};

// calcDisplaySummary(account1.movements);

//Implementing login functionality
let currentAccount;

//event handler
btnLogin.addEventListener('click', function (e) {
  //prevent form from submiting
  e.preventDefault();
  currentAccount = accounts.find(item => {
    return item.userName === inputLoginUsername.value;
  });

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //welcome message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(' ')
      .slice(0, 1)}`;
    containerApp.style.opacity = 100;

    //clearing input fields soon after entering
    inputLoginPin.value = '';
    inputLoginUsername.value = '';
    inputLoginPin.blur();

    upddateUi(currentAccount);

    // //display movements
    // displayMovements(currentAccount.movements);

    // //display balance
    // calcDisplayBalance(currentAccount);

    // //display summary // i have kept same interest rate in all
    // calcDisplaySummary(currentAccount.movements);
  }
  console.log(`${inputLoginUsername.value}`);
  console.log(currentAccount);
});

// applyinh g transfer method

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => {
    // console.log('check');
    return acc.userName === inputTransferTo.value;
  });
  inputTransferTo.value = '';
  inputTransferAmount.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    // doing transfeer
    receiverAcc.movements.push(amount);
    console.log('transfer valid');
    //uodating ui
    upddateUi(currentAccount);
  }

  // if (to === accounts.userName) {
  //   //proceeed and check if aount is valid
  //   if (amount >= labelBalance.value) {
  //     //add amount
  //   } else {
  //     alert('insufficient blance');
  //   }
  // } else {
  //   alert('put right benificiary');
  // }
  console.log(amount, receiverAcc);
});

// clsomg account functionality
btnClose.addEventListener('click', e => {
  e.preventDefault();
  const user = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if (currentAccount.userName === user && pin === currentAccount.pin) {
    // find at which no. this current account is at
    const index = accounts.findIndex(acc => {
      return acc.userName === currentAccount.userName;
    });
    accounts.splice(index, 1);
    //hide ui
    containerApp.style.opacity = 0;
    console.log(accounts);
  }
  user.value = pin.value = '';
});

// transferring loan
btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amt = Number(inputLoanAmount.value);
  console.log(amt);
  if (
    amt > 0 &&
    currentAccount.movements.some(item => {
      return item >= amt * 0.1;
    })
  ) {
    currentAccount.movements.push(amt);
    upddateUi(currentAccount);
  }

  inputLoanAmount.value = '';
});

//sorting
// sorting movements
let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

const hari = [-2.3, 45, 6, 7];
const aa = hari.find(item => item > 0);
console.log(aa);
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


Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4

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
/*
//w/o chaining
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

// chainhingh
const calcAverageHumanAge = function (arr) {
  const ans = arr
    .map((item, ind) => {
      return item <= 2 ? 2 * item : 16 + item * 4;
    })
    .filter(item => {
      return item >= 18;
    })
    .reduce((acc, item, val) => {
      return acc + item / arr.length;
    }, 0);
  console.log(ans);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
*/

// creating array for 1000 dice roll
const z = Array.from({ length: 1000 }, (item, index) => {
  return Math.trunc(Math.random() * 6 + 1);
});

console.log('-----------');
console.log(z);

const sumdep = accounts
  .flatMap(acc => {
    return acc.movements;
  })
  .filter(item => item > 0)
  .reduce((acc, item) => acc + item, 0);
console.log(sumdep);

//last coding challenge in array
/*
Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are 
eating too much or too little.
Eating too much means the dog's current food portion is larger than the 
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects �)
The Complete JavaScript Course 26
Hints:
§ Use many different tools to solve these challenges, you can use the summary 
lecture to choose between them �
§ Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// will do it later
