//Зфдача №1:
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i<arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum/arr.length).toFixed(2));

  return (`min: ${min}, max: ${max}, avg: ${avg}`);
  
}
//Задача №2:

function summElementsWorker(arr) {
  return arr.reduce((a, b) => a + b, 0);

}

function differenceMaxMinWorker(arr) {
  return (Math.max(...arr) - Math.min(...arr));

}

function differenceEvenOddWorker(arr) {
  let evenNumSum = 0;
  let oddNumSum = 0

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0){
      oddNumSum += arr[i];
    } else {
      evenNumSum += arr[i]
    }
  }

  return evenNumSum - oddNumSum;
}

function averageEvenElementsWorker(arr) {
  let evenNumSum = 0;
  let countEvenNum = 0

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      evenNumSum += arr[i];
      countEvenNum ++;
    }
  }

  return evenNumSum / countEvenNum;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for( let i = 0; i < arrOfArr.length; i++){
    const num = func(arrOfArr[i]);

    if (num > maxWorkerResult)
    maxWorkerResult = num;
  }

  return maxWorkerResult;
}

function testCase(){
console.log("Class 1:")

  //Test one:
let testArr = [-3, 6, 12, -34, 25];

let actual = String(getArrayParams(testArr));
let expected = "min: -34, max: 25, avg: 1.2";

(actual == expected)?
console.log("Все ОК, тест"): console.log("Всё плохо, тест");

console.log("Class 2:");

//Test two:
let actual_1 = summElementsWorker(testArr);
let expected_1 = 6;

(actual_1 == expected_1)?
console.log("Все ОК, тест 1"): console.log("Всё плохо, тест 1");

// Test three:
let actual_2 = differenceMaxMinWorker(testArr);
let expected_2 = 59;

(actual_2 == expected_2)?
console.log("Все ОК, тест 2"): console.log("Всё плохо, тест 2");

//Test four:
let actual_3 = differenceEvenOddWorker(testArr);
let expected_3 = -38;

(actual_3 == expected_3)?
console.log("Все ОК, тест 3"): console.log("Всё плохо, тест 3");

//Test five:
let actual_4 = averageEvenElementsWorker(testArr).toFixed(1);
let expected_4 = -5.3;

(actual_4 == expected_4)?
console.log("Все ОК, тест 4"): console.log("Всё плохо, тест 4");

console.log("Class 3:")

let arrayArray = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
let actual_5 = makeWork(arrayArray, summElementsWorker);
let expected_5 = 328;

(actual_5 == expected_5)?
console.log("Все ОК, тест 5"): console.log("Всё плохо, тест 5");

let actual_6 = makeWork(arrayArray, averageEvenElementsWorker);
let expected_6 = 72;

(actual_6 == expected_6)?
console.log("Все ОК, тест 6"): console.log("Всё плохо, тест 6");

}
testCase();
