const {sum, multiply, divide, average} = require('./02-math.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 2 * 5 to equal 10', () => {
  expect(multiply(1,4)).toBe(4);
});

test('divide 20 / 4 to equal 5', () => {
  expect(divide(6,3)).toBe(2);
});

test('divide 20 / 4 to equal 5', () => {
  expect(divide(6,"test")).toBe(null);
});

test('get average of values [3, 7, 11] to be 7', () => {
  expect(average([3, 7, 11])).toBe(7);
});

test('get average of values [3, 7, 11] to be 7', () => {
  expect(average([])).toBe(null);
});
