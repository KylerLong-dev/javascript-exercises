const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return sumOfArray = array.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function(array) {
  return multiplyArray = array.reduce((total, currentNumber) => total * currentNumber, 1);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  const array = [];
  for (let i = 1; i<=num; i++){
    array.push(i);
  }
  return array.reduce((total, currentNum) => {
    return total * currentNum;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
