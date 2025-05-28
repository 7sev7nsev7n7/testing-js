const {subtract, isEven, max} = require('./eval.js');

// pruebas actividad 1
test('subtract 10-3 to equal 7', () => {
  expect(subtract(10, 3)).toBe(7);
});

test('subtract 3-10 to equal -7', () => {
  expect(subtract(3, 10)).toBe(-7);
});

// pruebas actividad 2
test('check if 10 is even, should return true', () => {
  expect(isEven(10)).toBe(true);
});

test('check if 3 is even, should return false', () => {
  expect(isEven(3)).toBe(false);
});

// pruebas actividad 3
test('find max value of array [4, 8, 1] should return 8', () => {
  expect(max([4, 8, 1])).toBe(8);
});

test('find max value of array [] should return null', () => {
  expect(max([])).toBe(null);
});
