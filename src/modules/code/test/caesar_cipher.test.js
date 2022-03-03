const cipher = require('../code/caesar_cipher');

test('replace letters with a shift of 1', () => {
  expect(cipher('abc')).toMatch('bcd');
});

test('replace letters with a shift of 1', () => {
  expect(cipher('aaa')).toMatch('bbb');
});

test('replace letters with a shift of 1', () => {
  expect(cipher('aA.Bc')).toMatch('bb.cd');
});
