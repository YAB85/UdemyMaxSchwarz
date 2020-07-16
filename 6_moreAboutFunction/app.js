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
	cChoice === pChoice
		? RESULT_DRAW
		: (cChoice === ROCK && pChoice == PAPER) ||
			(cChoice === PAPER && pChoice === SCISSORS) ||
			(cChoice === SCISSORS && pChoice === ROCK)
			? RESULT_PLAYER_WINS
			: RESULT_COMPUTER_WINS;

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
