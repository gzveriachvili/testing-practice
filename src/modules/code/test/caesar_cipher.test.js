const cipher = require('../code/caesar_cipher');

test('replace letters with a shift of 1', () => {
  expect(cipher('a.bc')).toMatch('bc.d');
});

test('replace letters with a shift of 1', () => {
  expect(cipher('aBcDe')).toMatch('bcdef');
});
