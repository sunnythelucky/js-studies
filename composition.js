const trace = (label) => (value) => {
	console.log(`${label}: ${value}`);
	return value;
};

const g = (n) => n + 1;
const f = (n) => n * 2;

const doStuff = (x) => {
	const afterG = g(x);
	trace("after g")(afterG);
	const afterF = f(afterG);
	trace("after f")(afterF);
	return afterF;
};

doStuff(20);
