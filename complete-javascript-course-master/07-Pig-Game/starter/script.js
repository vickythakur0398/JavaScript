'use strict';
//selecting elemets ids and class
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('#name--0');
const player1 = document.querySelector('#name--1');

//initally score is zero
score1.textContent = 0;
score2.textContent = 0;
//hiding dice initially
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//generating random diceroll

btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;

  //since we have rolled the dice we want to show dice image also
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //checking for rule 1 i.e if dice =1 switch player
  if (dice != 1) {
    //add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePLayer}`).textContent =
      currentScore;
  } else {
    //switch player
    document.getElementById(`current--${activePLayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // currentScore = 0;
  }
});

current1.textContent = dice;
