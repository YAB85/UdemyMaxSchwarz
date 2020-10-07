const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';


let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sport', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },
  1.5: 'hello',
};


/* person.isAdmin = true;
person.age = 31;

delete person.age;
 */


const keyName = 'first name'

console.log(person[keyName]);
console.log(person[1.5]);