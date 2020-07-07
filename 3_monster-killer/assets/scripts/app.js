const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK  = 0;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the monster', '100');

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
	chosenMaxLife = 100;
}

let currentMosterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
	let logEntry;
	if (ev === LOG_EVENT_PLAYER_ATTACK) {
		logEntry = {
			event: ev,
			value: val,
			target: 'MONSTER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
		switch (ev) {
			case LOG_EVENT_PLAYER_ATTACK:
				logEntry.target = 'MONSTER';
				break;
			case LOG_EVENT_PLAYER_STRONG_ATTACK:
				logEntry = {
					event: ev,
					value: val,
					target: 'MONSTER',
					finalMonsterHealth: monsterHealth,
					finalPlayerHealth: playerHealth
				};
				break;
			case LOG_EVENT_MONSTER_ATTACK:
				logEntry = {
					event: ev,
					value: val,
					target: 'PLAYER',
					finalMonsterHealth: monsterHealth,
					finalPlayerHealth: playerHealth
				};
				break;
			case LOG_EVENT_PLAYER_HEAL:
				logEntry = {
					event: ev,
					value: val,
					target: 'PLAYER',
					finalMonsterHealth: monsterHealth,
					finalPlayerHealth: playerHealth
				};
				break;
			case LOG_EVENT_GAME_OVER:
				logEntry = {
					event: ev,
					value: val,
					finalMonsterHealth: monsterHealth,
					finalPlayerHealth: playerHealth
				};
				break;
			default:
				logEntry = {};
		}

		/* 	} else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
		logEntry = {
			event: ev,
			value: val,
			target: 'MONSTER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
	} else if (ev === LOG_EVENT_MONSTER_ATTACK) {
		logEntry = {
			event: ev,
			value: val,
			target: 'PLAYER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
	} else if (ev === LOG_EVENT_PLAYER_HEAL) {
		logEntry = {
			event: ev,
			value: val,
			target: 'PLAYER',
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
	} else if (ev === LOG_EVENT_GAME_OVER) {
		logEntry = {
			event: ev,
			value: val,
			finalMonsterHealth: monsterHealth,
			finalPlayerHealth: playerHealth
		};
	} */
		battleLog.push(logEntry);

		function reset() {
			currentMosterHealth = chosenMaxLife;
			currentPlayerHealth = chosenMaxLife;
			resetGame(chosenMaxLife);
		}
	}
}

function endRound() {
	const initialPlayerHealth = currentPlayerHealth;

	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;
	writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMosterHealth, currentPlayerHealth);

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(initialPlayerHealth);
		alert('You will be dead but the bonus life saved you!!!');
	}

	if (currentMosterHealth <= 0 && currentPlayerHealth > 0) {
		alert('You won!');
		writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMosterHealth, currentPlayerHealth);
	} else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
		alert('You lost!');
		writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMosterHealth, currentPlayerHealth);
	} else if (currentMosterHealth <= 0 && currentPlayerHealth <= 0) {
		alert('You have a draw');
		writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW', currentMosterHealth, currentPlayerHealth);
	}

	if (currentMosterHealth <= 0 || currentPlayerHealth <= 0) {
		reset();
	}
}

function attackMonster(mode) {
	const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
	const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
	/* if (mode === MODE_ATTACK) {
		maxDamage = ATTACK_VALUE;
		logEvent = LOG_EVENT_PLAYER_ATTACK;
	} else if (mode === MODE_STRONG_ATTACK) {
		maxDamage = STRONG_ATTACK_VALUE;
		logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
	} */
	const damage = dealMonsterDamage(ATTACK_VALUE);
	currentMosterHealth -= damage;
	writeToLog(logEvent, damage, currentMosterHealth, currentPlayerHealth);

	endRound();
}

function attackHandler() {
	attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
	attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert('You can`t heal to more than your max initial health!');
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		healValue = HEAL_VALUE;
	}
	increasePlayerHealth(HEAL_VALUE);
	currentPlayerHealth += HEAL_VALUE;
	writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMosterHealth, currentPlayerHealth);
	endRound();
}

function printLogHandler() {
	/* for (let i = 0; i < 3; i++) {
		console.log('----------');
	} */
	/* for (let i = 10; i > 0; i--) {
		console.log(i);
	 */

	/* let j = 0;
	while (j < 3) {
		console.log('-------');
		j++;
	} */

	/* for (let i = 0; i < battleLog.length; i++) {
		console.log(battleLog[i]);
	} */
	let i = 0;
	for (const el of battleLog) {
		console.log(`#${i}`);
		for (const key in el) {
			console.log(`${key} => ${el[key]}`);
		}
		i++;
	}
	//console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);

//const userName = userInput || 'Max';

// operator || //

/* let realUserInput = 'Manu';

let realUserName = realUserInput || 'Max';
console.log(realUserName);
 */

/* let isLoggedIn = true;

var shoppingCart = isLoggedIn && [ 'Books' ];

console.log(shoppingCart);

isLoggedIn = false;

isLoggedIn && [ 'Books' ];

var shoppingCart = isLoggedIn && [ 'Books' ];
console.log(shoppingCart);


/*const userName = 'Max';
const altName = '';
console.log(userName === 'Max'); // generates and prints a boolean => true
console.log(userName); // wasn't touched, still is a string => 'Max'
 
console.log(userName || null); // userName is truthy and therefore returned by || => 'Max'
console.log(altName || 'Max'); // altName is falsy (empty string), hence 'Max' is returned => 'Max'
console.log(altName || ''); // both altName and '' are falsy but if the first operand is falsy, the second one is always returned => ''
console.log(altName || null || 'Anna'); // altName and null are falsy, 'Anna' is returned => 'Anna'
 
console.log(userName && 'Anna'); // userName is truthy, hence second (!) value is returned => 'Anna'
console.log(altName && 'Anna'); // altName is falsy, hence first value is returned => ''
console.log(userName && ''); // userName is truthy, hence second value is returned => ''

const enteredValue = ''; // let's assume this is set based on some input provided by the user, therefore it might be an empty string
 
const userName = enteredValue || 'PLACEHOLDER'; // will assign 'PLACEHOLDER' if enteredValue is an empty string */

let randomNumbers = [];
let finished = false;
while (!finished) {
	const rndNumber = Math.random();
	randomNumbers.push(rndNumber);
	if (rndNumber > 0.5) {
		finished = true;
		console.log(randomNumbers);
	}
}

let sum = 0;
for (let i = 0; i < 3; i++) {
	for (let j = 5; j > 2; j--) {
		sum = sum + j + i;
	}
}
console.log(sum);
