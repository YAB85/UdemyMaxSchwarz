'use strict';

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field

function getUserNumberInput() {
	return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription);
}

function writeToLog(operationIndentifier, prevResult, operationNumber, newResult) {
	const logEntry = {
		operation: operationIndentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function calculateResult(calculationType) {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	let mathOperator;
	if (calculationType === 'ADD') {
		currentResult += enteredNumber;
		mathOperator = '+';
	} else if (calculationType === 'SUBTRACT') {
		currentResult -= enteredNumber;
		mathOperator = '-';
	} else if (calculationType === 'MULTIPLY') {
		currentResult *= enteredNumber;
		mathOperator = '*';
	} else {
		currentResult /= enteredNumber;
		mathOperator = '/';
	}

	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
	calculateResult('ADD');
}

function subtract() {
	calculateResult('SUBTRACK');
}

function multiply() {
	calculateResult('MULTIPLY');
}

function divide() {
	calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

/* function abbrevName(name) {
	let arr = name.split(' ');
	let name1 = arr.concat(1);
	let name2 = arr.concat(2);

	/* for (let i = 0; i < arr.length; i++) {
		arr[i].splice(0, 2);
	} */
/* let firstName = name1.splice(1, 1);
	let secondName = name2.splice(1, 1);

	return `${firstName}.${secondName}`;
}

let newName = 'John Smith';

console.log(abbrevName(newName)); */

/* let flatten = function(array1, array2) {
	let newArr = array1.concat(array2);
	return newArr;
};

console.log(flatten([ 1, 12, 3 ], [ 1, 23, 4 ]));
console.log(flatten([]), []);
 */
/* let n = 1234567;

function digitize(n) {
	let arr = n.toString().split('');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = +arr[i];
	}
	console.log(arr);
	let y = arr.reverse();

	return y;
}

console.log(digitize(n)); */

/* for (var i = 0; i < 10; i++) {
	setTimeout(() => console.log(i), 0);
}
for (let j = 0; j < 10; j++) {
	setTimeout(() => console.log(i), 0);
}
 */

const numbers = [ 1, 2, 3, 4, 5 ];

let variable = numbers.push(6);
variable = variable.pop();
variable = variable.push(10);

console.log(variable);
