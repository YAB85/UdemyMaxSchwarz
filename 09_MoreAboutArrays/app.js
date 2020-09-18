//const numbers = [ 1, 2, 3 ];

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

/* const testResult = [ 1, 5.3, 1.5, 10.99, -5, 10 ];

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

console.log(maxIndex); */

/* const arr = ['Max', 'Jack', 'Alex'];

const obj = {
	hello: 'Hello',
	hi: 'Hi',
	say() {
		arr.forEach(function (item) {
			console.log(this.hello + ' ' + item);
		  }, this)
	}

};

obj.say(); */

/* const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

/* for (const price of prices){
	taxAdjustedPrices.push(Math.round(price * (1 + tax)));
} */

/* prices.forEach((price, idx, prices) => {
	const priceObj = {index: idx, taxAdjPrice: Math.round(price * (1 + tax))  };
	taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);  */

const prices = [ 10.99, 5.99, 3.99, 6.59 ];
const tax = 0.19;

/* const taxAdjustedPrices = prices.map((price, idx, prices) => {
	const priceObj = {
		index: idx,
		taxAdjPrice: Math.round(price * (1 + tax))
	};
	return priceObj;
}); */

//console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
	if (a > b) {
		return 1;
	} else if (a === b) {
		return 0;
	} else {
		return -1;
	}
});

//console.log(sortedPrices.reverse());

const filteredArray = prices.filter((price, index, prices) => {
	return price > 6;
});
/* const filteredArray = prices.filter((price, index, prices) => {
	return price > 6;
}); */

console.log(filteredArray);

const shortArray = prices.filter(p => p > 3);

console.log(shortArray);

let sum = 0;

prices.forEach(price => {
	sum += price;
});

console.log(sum);
