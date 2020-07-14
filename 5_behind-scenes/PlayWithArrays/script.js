const animals = ['crab', 'dog', 'frog'];

function showArr(arr, elem) {
  let out = '';
  for (el in arr) {
    out += `<div> ${arr[el]} <span>${el}</span> </div>`
  }
  document.querySelector(elem).innerHTML = out;
}

showArr(animals, '.out-1-source-image');