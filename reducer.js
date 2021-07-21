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

const addn = (...fns) => {
	while (fns.length > 2) {
		let [fn0, fn1, ...rest] = fns;
		fns = [() => add2(fn0, fn1), ...rest];
	}
	return add2(fns[0], fns[1]);
};

addn(constant(3), constant(7), constant(11), five, nine);

//** Recursive Approach

const addn = ([fn0, fn1, ...rest]) => {
	if (rest.length === 0) return add2(fn0, fn1);
	if (rest.length > 0) {
		return addn([() => add2(fn0, fn1), ...rest]);
	}
};
addn([constant(3), constant(7), constant(11), five, nine]);

//** using reduce method

const addn = (fns) => fns.reduce((bigFn, fn) => () => add2(bigFn, fn))();

addn([constant(3), constant(7), constant(11), five, nine]);

//get uniq numbers

var numbers = [5, 2, 1, 8, 5, 4, 9, 6, 7, 1, 3, 6, 5, 4, 7, 12, 13, 165, 18];

numbers.reduce((newList, num) => {
	if (!newList.includes(num)) {
		return [...newList, num];
	}
	return newList;
}, []);
