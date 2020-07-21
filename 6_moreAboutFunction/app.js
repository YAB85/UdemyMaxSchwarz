const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
	const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
		return DEFAULT_USER_CHOICE;
	}
	return selection;
};

const getComputerChoice = () => {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
	cChoice === pChoice ?
	RESULT_DRAW :
	(cChoice === ROCK && pChoice == PAPER) ||
	(cChoice === PAPER && pChoice === SCISSORS) ||
	(cChoice === SCISSORS && pChoice === ROCK) ?
	RESULT_PLAYER_WINS :
	RESULT_COMPUTER_WINS;

/* {
		if (cChoice === pChoice) {
			return RESULT_DRAW;
		} else if (
			(cChoice === ROCK && pChoice == PAPER) ||
			(cChoice === PAPER && pChoice === SCISSORS) ||
			(cChoice === SCISSORS && pChoice === ROCK)
		) {
			return RESULT_PLAYER_WINS;
		} else {
			return RESULT_COMPUTER_WINS;
		}
  } */

startGameBtn.addEventListener('click', () => {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log('Game is starting....');
	const playerChoice = getPlayerChoice();
	const computerChoice = getComputerChoice();
	let winner;
	if (playerChoice) {
		winner = getWinner(computerChoice, playerChoice);
	} else {
		winner = getWinner(computerChoice);
	}

	let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
	if (winner === RESULT_DRAW) {
		message = message + 'had a draw.';
	} else if (winner === RESULT_PLAYER_WINS) {
		message = message + 'won.';
	} else {
		message = message + 'lost.';
	}
	alert(message);
	gameIsRunning = false;
});

//not related to game

const combine = (resultHandler, operator, ...numbers) => {
	const validateNumber = number => {
		return isNaN(number) ? 0 : number;
	};

	let sum = 0;
	for (let num of numbers) {
		if (operator === 'ADD') {
			sum += validateNumber(num);
		} else {
			sum += validateNumber(num);
		}
	}
	resultHandler(sum);
};

/* const subtractUp = function(resultHandler, ...numbers) {
	let sum = 0;
	for (const num of numbers) {
		// don`t use that
		sum -= num;
	}
	resultHandler(sum, 'The result after adding all numbers is: ');
}; */

/* const showResult = (messageText, result) => {
	alert(messageText + ' ' + result);
};

showResult.apply()

combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 10, -3, 6, 10);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'SUBTRACK', 1, 10, 15, 20);
 */
/* start();

function start() {
	console.log('Game is starting....');
} */

/* const person = {
  name: 'Max',
  greet: function greet() {
    console.log(`Hello there, I am ${this.name}`);
  }
};
person.greet();
 */
//startGame();

// Find number /3 = 0 from 0 to 100
// 0 1 2 3 4 5 6 7 8 9 10 -> 4

// [1.. 100]

/* let a = Array.apply(null, {
  length: 100
}).map(Number.call, Number).filter(item => {
  if (item % 3 === 0) return true
}).length;
console.log(a); */

//===============

/* let arr = [];

for (let i = 0; i < 100; i++) {
  if (i % 3 === 0) {
    arr.push(i);
  }

}

console.log(arr); */

/* let c1 = {
	x: 5,
	y: 10
}


let c2 = {
	x: 'You',
	y: 'Great'
}

function printCoordinates() {
	console.log(this.x + ' ' + this.y);
}

let c1_func = printCoordinates.bind(c1);

c1_func();

let c2_func = printCoordinates.bind(c2);

c2_func(); */


let obj = {
	num: 0
};

let obj2 = {
	num: 3
};

let addToThis = function (a, b, c) {
	return this.num + a + b + c;
}

let arr = [1, 2, 3];

console.log(addToThis.apply(obj, arr));