const task3Element = document.getElementById('task-3');

function callAlert() {
    alert("Hi");
}

function callName(name) {
    alert(name);
}

callAlert();
callName('John');

task3Element.addEventListener('click', callAlert);

function callThird(first, second, third) {
    let str = `${first} ${second} ${third}`;
    return str;
}

let combine = callThird('john', 'sarah', 'mike')
alert(combine);