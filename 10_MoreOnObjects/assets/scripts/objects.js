/* const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
	'first name': 'Max',
	age: 30,
	hobbies: [ 'Sport', 'Cooking' ],
	[userChosenKeyName]: '...',
	greet: function() {
		alert('Hi there!');
	},
	1.5: 'hello'
}; */

/* person.isAdmin = true;
person.age = 31;

delete person.age;
 */

/* const keyName = 'first name';

console.log(person[keyName]);
console.log(person[1.5]);
 */
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
	const movieList = document.getElementById('movie-list');

	if (movies.length === 0) {
		movieList.classList.remove('visible');
		return;
	} else {
		movieList.classList.add('visible');
	}
	movieList.innerHTML = '';

	const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

	filteredMovies.forEach(movie => {
		const movieEl = document.createElement('li');
		let text = movie.info.title + ' - ';
		for (const key in movie.info) {
			if (key !== 'title') {
				text = text + `${key}: ${movie.info[key]}`;
			}
		}

		movieEl.textContent = text;
		movieList.append(movieEl);
	});
};

const addMovieHandler = () => {
	const title = document.getElementById('title').value;
	const extraName = document.getElementById('extra-name').value;
	const extraValue = document.getElementById('extra-value').value;

	if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
		return;
	}

	const newMovie = {
		info: {
			title,
			[extraName]: extraValue
		},
		id: Math.random()
	};

	movies.push(newMovie);
	renderMovies();
};

const searchMovieHandler = () => {
	const filterTerm = document.getElementById('filter-title').value;
	renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
