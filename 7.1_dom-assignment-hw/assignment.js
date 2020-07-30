/******************Task 1 */

const FirstLi = document.getElementById('task-1');
const SecondLi = document.querySelector('li:last-of-type');

FirstLi.style.color = 'red';
SecondLi.style.backgroundColor = 'red';

console.log(FirstLi);
console.log(SecondLi);

/************Task 2 */
const docTitle1 = document.querySelector('title');
const docHead = document.head;

const docTitle2 = document.head.querySelector('title');

docTitle2.textContent = 'Assignment - Solved!';

docTitle1.textContent = 'Assignment - Solved!';

document.title = 'Assignment - Solved!';


/******Task 3 */

//const h1 = document.querySelector('h1');
console.log(h1);

h1.textContent = "Assignment- Solved!"

const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';