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

let currentResult = 0;

currentResult = currentResult + 10;

let calculationDescription = '(0 + 10) * 3/2  -1';

outputResult(currentResult, 'hello');