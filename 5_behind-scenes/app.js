console.log('Hello');
/* 
const text = document.querySelector('.text');

text.innerHTML = 'World!';
let sum = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 10; j++) {

    for (let k = 0; k < 15; k++) {
      sum = sum + k;
    }
    sum = sum + j;
    text.innerHTML += '<hr>';

  }

  sum = sum + i;
  text.innerHTML += `${sum}`;

} */

/* let name = 'Max';

{
  let test = 5;
  console.log(test);
}

//console.log(test);

if (name === 'Max') {
  var hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

function greet() {
  let age = 30;
  let name = 'Manuel';
  console.log(name, age, hobbies);
}

//console.log(name, age);
greet(); */

/* console.log(userName);

var userName = 'Max';
'use strict';

console.log(name);

const name = 'Max'; */

const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let person = {name: 'Max'};

function printmessage() {
	const value = messageInput.value;
	console.log(value || 'Clicked me!');
}

function addListener() {
	clickableBtn.addEventListener('click', printmessage);
}

addListenerBtn.addEventListener('click', addListener);
