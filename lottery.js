"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function recordNumber(num, numbers) {
	if (!numbers.includes(num)) {
		numbers = [...numbers, num];
		numbers.sort(function asc(x, y) {
			return x - y;
		});
	}
	return numbers;
}

var luckyLotteryNumbers = [];
const NUM_COUNT = 6;

const pickNumbers = () => {
	while (luckyLotteryNumbers.length < NUM_COUNT) {
		luckyLotteryNumbers = recordNumber(lotteryNum(), Object.freeze(luckyLotteryNumbers));
	}
};

pickNumbers();
console.log(luckyLotteryNumbers);
