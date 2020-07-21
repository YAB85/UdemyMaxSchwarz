//1
/* const sayHello = name => console.log('Hi ' + name);

console.log(sayHello('Alex')); */
// done


//2
/* const sayHello2 = (name, phrase) => console.log(`${name} ${phrase}`);

console.log(sayHello2('Hello', 'Max')); */
//done

//3
/* const sayHello3 = () => console.log('Hi Mr.Smith');
sayHello3(); */
//done

//4
/* const sayHello4 = name => `Hi ${name}`;
console.log(sayHello4('Fred')); */
//done


/* const sayHello5 = (name, phrase = 'Hi') => console.log(`${name} ${phrase}`);

sayHello5('Manuel');
sayHello5('Manuel', 'Hello friend');

function checkInput(cd, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cd();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello', '12', 'asdasd', 'Not empty string'
); */

/* let x = 2;

function first(x) {
  let z = second() + x;
  return z;
}

function second(x) {
  let y = x * 2;
}

//console.log(first(2));
console.log(first(2)); */

setTimeout(hello, 2000, 'Bob');
let names = ['Inga', 'Tom', 'Mattias', 'Carlos'];
names.forEach(hello);

function doThing(other) {
  let x = 7;
  //
  //
  let name = 'Steve';
  other(name);
}

function hello(nm) {
  console.log('hello', nm);
}

doThing(hello);
/** **/