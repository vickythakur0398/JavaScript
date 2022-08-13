'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(`${i}`);
  btnOpenModal[i].addEventListener('click', () => {
    console.log(`btn clicked ${i}`); // btnOpenModal[i].style
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btncloseModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

//Handling jkeyboard event
// closing modal on pressing esc key
document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  let val = e.key;
  if (val === 'Escape') {
    //checking whether modal is visible or not
    if (!modal.classList.contains('.hidden')) {
      modal.classList.add('hidden');
      console.log(e.key);
      overlay.classList.add('hidden');
      // console.log(e.key);
    } else {
      console.log('just chill as modal is not on screen');
    }
  }
});
