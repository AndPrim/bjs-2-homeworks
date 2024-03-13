"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    arr[0] = -b / (2 * a);
  } else if (d > 0 ) { 
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let loanBody = amount - contribution;

  let paySum = loanBody * (percentMonth + (percentMonth / (Math.pow((1 + percentMonth), countMonths) - 1)));
  let totalSum = paySum * countMonths;

  return +(totalSum.toFixed(2));
}

function testCase(){
  let sum = calculateTotalMortgage(10, 0, 50000, 12);

  (sum === 52749.53)? console.log('Первый тест прошел'):
   console.log('Все плохо');

   sum = calculateTotalMortgage(15, 0, 10000, 36);
   
   (sum === 12479.52)? console.log('Последний тест прошел'):
   console.log('Все плохо');
}

testCase();