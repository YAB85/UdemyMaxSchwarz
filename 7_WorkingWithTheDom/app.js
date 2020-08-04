/* console.log('Hello');
const h1 = document.getElementById('main-title');

h1.textContent = "Some new title"

h1.style.color = 'white';

h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;



//h1.textContent = 'Some new text!';

const listItemElements = document.querySelectorAll('li');
for (const listItemEl of listItemElements) {
	console.log(listItemEl);
	listItemEl.style.color = 'red';
} */

/* const ul = document.querySelector('ul');

const liParent = document.querySelector('li');

ul.children; */

/* const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi); */

const section = document.querySelector('section');
const button = document.querySelector('button');
section.className = 'red-bg';

section.addEventListener('click', () => {
	/* if (section.className === 'red-bg visible') {
		section.className = 'red-bg invisible';
	} else {
		section.className = 'red-bg visible';
	} */

	//section.classList.toggle('visible');
	section.classList.toggle('invisible');
});

//section.style.backgroundColor = 'blue';
