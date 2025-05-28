// funcion actividad 1
function subtract(a, b) {
  return a-b;
}

// funcion actividad 2
function isEven(n) {
  if ((n%2) === 0) {
    return true;
  } else {
    return false;
  }
}

// funcion actividad 3
function max(values) {
  if (values.length === 0) {
    return null;
  }

  m = 0;
  for (let i=0; i<values.length; i++) {
    if (values[i]>m) m=values[i]
  }
  return m;
}

module.exports = {subtract, isEven, max};

