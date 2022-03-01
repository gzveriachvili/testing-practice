const cap = require('../code/capitalize');

test('capitalizes the inputted string', () => {
  expect(cap('something')).toMatch('Something');
});

test('capitalizes the inputted string', () => {
  expect(cap('somEthInG')).toMatch('Something');
});

test('capitalizes the inputted string', () => {
  expect(cap('SOMETHING')).toMatch('Something');
});
