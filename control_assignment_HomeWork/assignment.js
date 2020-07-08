const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumberSecond = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert(randomNumber);
}

const arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const el in arr) {
  console.log(arr[el]);
}

let counter = 0;
while (counter < arr.length) {
  console.log(arr[counter]);
  counter++;
}

// for loop => backwards

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

if ((randomNumber > 0.7 && randomNumberSecond > 0.7) || (randomNumber <= 0.2 || randomNumberSecond <= 0.2)) {
  alert(`${randomNumber} && ${randomNumberSecond}`);
}