const calculator = require('../code/calculator');

// Addition

test('add two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('add two numbers', () => {
  expect(calculator.add(-2, -205)).toBe(-207);
});

test('add two numbers', () => {
  expect(calculator.add('5', 4)).toBe(9);
});

test('add two numbers', () => {
  expect(calculator.add('5.5', '-2')).toBe(3.5);
});

// Subtract

test('subtract two numbers', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(-2, 2)).toBe(-4);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(10.532, 0.532)).toBe(10);
});

// Divide

test('divide two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide two numbers', () => {
  expect(calculator.divide(5, 5)).toBe(1);
});

test('divide two numbers', () => {
  expect(calculator.divide(3.75, 0)).toMatch("Can't divide with zero");
});

// Multiply

test('multiply two numbers', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(100, 50)).toBe(5000);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(-5, 5)).toBe(-25);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(1.5, 3)).toBe(4.5);
});
