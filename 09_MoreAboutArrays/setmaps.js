console.log('hi');

const ids = new Set([ 'Hi', 'from', 'set!' ]);
//ids.add(4);
//console.log(ids.has(1));

for (const entry of ids.entries()) {
	console.log(entry);
}
