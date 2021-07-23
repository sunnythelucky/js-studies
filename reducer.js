"use strict";

// const five = () => 5;
// const nine = () => 9;
const add = (x, y) => x + y;
// add(5,9)
const add2 = (fn1, fn2) => add(fn1(), fn2());
const constant = (v) => () => v;

var five = constant(5);
var nine = constant(9);
// add2(five, nine)

//** Iterable Approach!

const addn1 = (...fns) => {
	while (fns.length > 2) {
		let [fn0, fn1, ...rest] = fns;
		fns = [() => add2(fn0, fn1), ...rest];
	}
	return add2(fns[0], fns[1]);
};

addn1(constant(3), constant(7), constant(11), five, nine);

//** Recursive Approach

const addn2 = ([fn0, fn1, ...rest]) => {
	if (rest.length === 0) return add2(fn0, fn1);
	if (rest.length > 0) {
		return addn2([() => add2(fn0, fn1), ...rest]);
	}
};
addn2([constant(3), constant(7), constant(11), five, nine]);

//** using reduce method

const addn3 = (fns) => fns.reduce((bigFn, fn) => () => add2(bigFn, fn))();

addn3([constant(3), constant(7), constant(11), five, nine]);

//get uniq numbers

var numbers = [5, 2, 1, 8, 5, 4, 9, 6, 7, 1, 3, 6, 5, 4, 7, 12, 13, 165, 18];

addn3(
	numbers
		// uniq
		.reduce((newList, num) => {
			if (!newList.includes(num)) {
				return [...newList, num];
			}
			return newList;
		}, [])

		// isEven
		.filter((v) => v % 2 === 0)

		// asc order
		.sort((x, y) => x - y)

		//wrap with function
		.map(constant)
);

const summingReducer = (acc, n) => acc + n;

[2, 3, 5].reduce(summingReducer);

const map = (fn, arr) =>
	arr.reduce((acc, item) => {
		return acc.concat(fn(item));
	}, []);

var f = (x) => x + 1;

map(f, [2, 3, 4]);

const filter = (fn, arr) =>
	arr.reduce((newArr, item) => {
		return fn(item) ? newArr.concat([item]) : newArr;
	}, []);

var g = (g) => g.length > 8;
var hobbies = ["skating", "singing", "skiing", "skateboarding", "climbing", "trekking", "skydiving"];

filter(g, hobbies);

[].concat(["hello"]);


