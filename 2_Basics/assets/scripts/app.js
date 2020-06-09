'use strict';
// to string

/* let x;

console.log(typeof (String(null)));
console.log(typeof (String(4)));


console.log(String(5 + '5'));
console.log(typeof (String(5 + '5'))); */

//to Number

/* console.log(typeof (Number(5 + '5'))); */

//to Boolean

//0, '', undefined, null, NaN - false

/* let switcher = null;

if (switcher) {
    console.log("Working...");
}

console.log(typeof (Boolean(5 + '5')));
console.log(typeof (!!(5 + '5')));

let a = 5,
    b = a;

b = a + 5; */

/* console.log(a);
console.log(b); */

/* function makeCopy(mainObj) {
    let copyObj = {};
    let key;

    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }

    return copyObj;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newObj = makeCopy(numbers);

newObj.a = 10; */

/* const obj = {
	a: 1,
	b: 2,
	c: {
		x: 10
	}
}; */

/* const objCopy = Object.assign({}, obj);

objCopy.a = 20; */

//const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray.slice();
//const newArray = [...oldArray];

//newArray[1] = 'd';

/* const newObj = JSON.parse(JSON.stringify(obj));
newObj.c.x = 4; */

/* const x = 10;

function logger() {
	const x = 20;
	console.log(x);
}

logger();
 */

/* let num = 5;

function double(n) {
    let res = n * 2;
    return res;

}

let score = double(num); */

/* function createCouter() {
	let counter = 0;
	const myFunction = function() {
		counter = counter + 1;
		return counter;
	};
	return myFunction;
}

const increment = createCouter();

const c1 = increment();
const c2 = increment();
const c3 = increment(); */

/* const btns = document.querySelectorAll('.btn');

console.dir(btns);

btns[0].remove(); */

/* function showThis(a, b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b;
	}
	console.log(sum());
}

showThis(4, 5); */

/* const obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this.a + this.b);
	}
};

obj.sum(); */

const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
	const result = num1 + num2;
	alert();
}


currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2  - 1`;

outputResult(currentResult, calculationDescription);

let score = {
	'Fedor': 0,
	'Petya': 0
}

score.Fedor += 100;
score.Petya += 50;


/* let myCrazyObject = {
	"name": "Object",
	"some array": [7, 9, {
		purpose: 'someone',
		number: 123
	}, 3.3],
	"random animal": "Banana shark"
};

myCrazyObject["some array"][2].number;


for (let x = 3; x <= 10000; x = x * 3) {
	console.log(x);

}

let x = 3;

while (x <= 10000) {
	console.log(x);
	x = x * 3;
} */

/* let animals = ["cat", "fish", "Lemur", "varan"];
let newAnimals = [];
for (let i = 0; i < animals.length; i++) {

	newAnimals[i] = animals[i] + '- beautiful animal';
	console.log(newAnimals[i]);
} */

/* let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыэюя";

let randomString = '';

let stringLength = 6;

while (randomString.length < stringLength) {
	randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString); */

/* let input = 'JavaScript is awesome';

let output = '';

for (let i = 0; i < input.length; i++) {
	if (input[i] === 'a') {
		output += '4'
	} else if (input[i] === 'e') {
		output += '3'
	} else if (input[i] === 'i') {
		output += '1'
	} else if (input[i] === 'o') {
		output += '0'
	} else {
		output += input[i];
	}
}

console.log(output); */

//let name = prompt("What is your name?");
// Create Game//

//Create random word
let words = [
	"programm",
	"makaka",
	"beautiful",
	"pancake"
];

//create final array

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}

let remainingLetters = word.length;
let guesses = 20

while (remainingLetters > 0 && guesses > 0) {
	alert(answerArray.join(" "));
	let guess = prompt("Please, choise a letter or press Cancel");
	if (guess === null || guess == 1) {
		break;
	} else if (guess.length !== 1) {
		alert("Please, insert letter")
	} else {
		guesses--;
		guess = guess.toLowerCase();
		for (let j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
	}
}



alert(answerArray.join(" "));
if (guesses > 0) {
	alert("Very good! You are a winner" + word);
} else {
	alert("Very bad! You are lose" + word);
}