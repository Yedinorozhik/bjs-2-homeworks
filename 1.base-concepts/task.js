"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let result = [];

  if (d < 0) {
    return result;
  }

  if (d === 0) {
    let x = -b / (2 * a);
    result.push(x);
    return result;
  }

  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);

  result.push(x1);
  result.push(x2);

  return result;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  let monthlyPercent = percent / 100 / 12;
  let loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  let power = (1 + monthlyPercent) ** countMonths;
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (power - 1)));

  let totalPayment = monthlyPayment * countMonths;
  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}