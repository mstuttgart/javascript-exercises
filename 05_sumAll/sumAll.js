const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  let total = 0;

  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
