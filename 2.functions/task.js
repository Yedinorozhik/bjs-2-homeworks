"use strict";

function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}

		sum += arr[i];
	}

	let avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

	return {
		min,
		max,
		avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = arr[0];
	let max = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEven = 0;
	let sumOdd = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEven += arr[i];
		} else {
			sumOdd += arr[i];
		}
	}

	return sumEven - sumOdd;
}


function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEven = 0;
	let countEven = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEven += arr[i];
			countEven++;
		}
	}

	if (countEven === 0) {
		return 0;
	}

	return sumEven / countEven;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const workerResult = func(...arrOfArr[i]);

		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}

	return maxWorkerResult;
}
