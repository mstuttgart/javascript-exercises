const removeFromArray = function(arr, ...values) {

  console.log(values)

  for (let i = 0; i < values.length; i++) {
    let idx = arr.indexOf(values[i]);

    if (idx < 0) continue;

    arr.splice(idx, 1);
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
