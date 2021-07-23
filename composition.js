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

const compose =
	(...fns) =>
	(x) =>
		fns.reduceRight((v, f) => f(v), x);
const pipe =
	(...fns) =>
	(x) =>
		fns.reduce((v, f) => f(v), x);

const add1 = (n) => n + 1;
const double = (n) => n * 2;

const add1ThenDoubleComposeVer = compose(double, add1);
const add1ThenDoublePipeVer = pipe(add1, double);

add1ThenDoublePipeVer(2); // 6
// ((2 + 1 = 3) * 2 = 6)
