const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = 100;

let currentMosterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMosterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMosterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
    alert('You lost!');
  } else if (currentMosterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You have a draw');
  }
}


function strongAttackHandler() {
  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMosterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMosterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
    alert('You lost!');
  } else if (currentMosterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You have a draw');
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);