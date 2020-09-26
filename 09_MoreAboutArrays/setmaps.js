console.log('hi');

const ids = new Set([ 'Hi', 'from', 'set!' ]);
ids.delete('Hi');
ids.add(4);
ids.
console.log(ids.has(1));

for (const entry of ids.entries()) {
	console.log(entry);
} 

const person1 = { name: 'Max' };

const person2 = { name: 'Manual' };

const personData = new Map([ [ person1, [ { date: 'yesterday', price: 10 } ] ] ]);
console.log(personData);

personData.set(person2, [ { date: 'two weeks ago', price: 100 } ]);

console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
	console.log(entry);
}


