'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'this is updated 🎉🌹 ';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1; //(document.querySelector('.number').textContent = '13');
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please put a valid number b/w 1 to 10';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'You won man!!';
    // document.querySelector
    //changing backgruound color since we won the match so basically we are updating whole body
    document.querySelector('body').style.backgroundColor = 'Red';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent =
        ' You Lost the game Loser';
    } else {
      document.querySelector('.message').textContent = 'Too High';
      score--;

      document.querySelector('.score').textContent = score;
      // document.querySelector('.score').textContent =
      //   document.querySelector('.score').textContent - 1;
    }
  } else if (guess < secretNumber) {
    if (score < 1) {
      document.querySelector('.message').textContent =
        ' You Lost the game Loser';
    } else {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.score').textContent =
      //   document.querySelector('.score').textContent - 1;
    }
  }
});

// making again i.e reset game functionality work

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = '....Start Guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  //   document.querySelector('.number').textContent = secretNumber;
});
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1; //(document.querySelector('.number').textContent = '13');
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please put a valid number b/w 1 to 10';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'You won man!!';
    // document.querySelector
    //changing backgruound color since we won the match so basically we are updating whole body
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent =
        ' You Lost the game Loser';
    } else {
      document.querySelector('.message').textContent = 'Too High';
      score--;

      document.querySelector('.score').textContent = score;
      let i = setTimeout(() => {
        document.querySelector('body').style.backgroundColor = '#222';
      }, 1000);
      document.querySelector('body').style.backgroundColor = 'red';
      //   window.alert('complete');
      // document.querySelector('.score').textContent =
      //   document.querySelector('.score').textContent - 1;
    }
  } else if (guess < secretNumber) {
    if (score < 1) {
      document.querySelector('.message').textContent =
        ' You Lost the game Loser';
    } else {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      let i = setTimeout(() => {
        document.querySelector('body').style.backgroundColor = '#222';
      }, 1000);

      document.querySelector('body').style.backgroundColor = 'red';
      //   window.alert('complete2');

      // document.querySelector('.score').textContent =
      //   document.querySelector('.score').textContent - 1;
    }
  }
});

// making again i.e reset game functionality work

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = '....Start Guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  //   document.querySelector('.number').textContent = secretNumber;
});
