function sum(a, b) {
  return a+b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  // if (Number.isInteger(a) && Number.isInteger(b)) {
  //   return a/b;
  // }
  res = a/b
  if (!Number.isNaN(res)) {
    return res;
  } else {
    return null;
  }
}

function average(array) {
  if (array.length === 0) return null;
  return array.reduce((a, b) => a + b) / array.length;
}

module.exports = {sum, multiply, divide, average};
