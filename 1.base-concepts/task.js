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