const numbers = [ 1, 2, 3 ];

/* var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr[10] = 'c'
arr.foo = 'd';
console.log(arr.length); */

/* const moreNumbers = new Array("Hi", "Welcome");
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2); */

/* const moreNumbers = Array.from('Hi!');
console.log(moreNumbers);

const listItems = document.querySelectorAll('li');

console.log(listItems);

const arrayListItems = Array.from(listItems);

console.log(arrayListItems);

const hobbies = [ 'Cooking', 'Sports' ];

const personalData = [ 30, 'Max', { moreDetail: [] } ];

const analyticsData = [ [ 1, 1.6 ], [ -5.4, 2.1 ], [ '2%', '4%' ] ];

for (const data of analyticsData) {
	for (const dataPoints of data) {
		console.log(dataPoints); 
	}
}
 */

/********to find value of arrays.keys used for + for  */

/* const hobbies = [ 'Sport', 'Cooking' ];

hobbies.push('Reading');
hobbies.unshift('Coding');
console.log(hobbies);

hobbies.pop();
hobbies.shift();

console.log(hobbies);

//hobbies[5] = 'Coding'; rarely use////

hobbies.splice(1, 0, 'good food');

console.log(hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log(hobbies); */

const testResult = [ 1, 5.3, 1.5, 10.99, -5, 10 ];

console.log(testResult.includes(10.99));
console.log(testResult.indexOf(10.99));

//const storedResults = testResult.slice(0, 4);
const storedResults = testResult.concat([ 3, -2, 5.44 ]);

testResult.push(5.91);

console.log(storedResults, testResult);

console.log(testResult.indexOf(1.5));

const personalData = [ { name: 'Max' }, { name: 'Manuel' } ];
//console.log(personalData.indexOf(name));

const manuel = personalData.find((person, idx, persons) => {
	return person.name === 'Manuel';
});

manuel.name = 'Anna';

console.log(manuel, personalData);

const maxIndex = personalData.findIndex((person, idx, persons) => {
	return person.name === 'Max';
});

console.log(maxIndex);
