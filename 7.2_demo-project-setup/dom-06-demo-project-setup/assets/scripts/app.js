console.log('hi');
'use strict';

/***********Variables */

const addMovieModal = document.getElementById('add-modal')
//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop');

const cancelAddModalButton = addMovieModal.querySelector('.btn--passive');

const confirmAddMovieButton = cancelAddModalButton.nextElementSibling;

const userInputs = document.querySelector('input');




/*************************Functions */
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};


const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};



const backdropClickHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {

  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
    alert('Please enter valid values (rating between 1 and 5).');
  }

};


/************************* DOM Manipulation */


startAddMovieButton.addEventListener('click', toggleMovieModal);

cancelAddModalButton.addEventListener('click', cancelAddMovieHandler);

backdrop.addEventListener('click', backdropClickHandler);

confirmAddMovieButton.addEventListener('click', addMovieHandler)