const animals = ['anaconda', 'badger', 'bear'];

function showArr(arr, elem) {
  let out = '';
  for (el in arr) {

    if (arr[el] !== undefined) {
      out += `<div><img src="image\\${arr[el]}.png" class="image"><span>${el}</span></div>`
    }
  }
  document.querySelector(elem).innerHTML = out;
  document.querySelector('.out-1-source-lenght').innerHTML = `Lenght of array ${animals.length}`;
  document.querySelector('.out-1-source').innerHTML = ` const animals= [   ${animals}   ] `;

}

showArr(animals, '.out-1-source-image');

function addToArray() {
  if (!Number.isInteger(+document.querySelector('.array-index').value)) {
    alert('Only integer!');
    return false;
  }

  let index = +document.querySelector('.array-index').value;
  if (index >= 50) {
    alert('Why so big number?');
    return false;
  } else if (index < 0) {
    alert('Index so small');
    return false;
  }

  animals[index] = document.querySelector('.array-element').value;
  showArr(animals, '.out-1-source-image');
}


document.querySelector('.add-to-array').onclick = addToArray;