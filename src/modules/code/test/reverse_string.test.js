const reverse = require('../code/reverse_string');

test('displays the inputted string in reverse', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('displays the inputted string in reverse', () => {
  expect(reverse('jest')).toBe('tsej');
});

test('displays the inputted string in reverse', () => {
  expect(reverse('TDD is kinda cool')).toBe('looc adnik si DDT');
});
