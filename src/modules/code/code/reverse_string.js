function reverse(string) {
  let stringArr = [];
  stringArr = string.split('');
  let newString = [];

  for (let i = stringArr.length - 1; i >= 0; i--) {
    newString += stringArr[i];
  }

  return newString;
}

module.exports = reverse;
