function cap(string) {
  let stringArr = [];
  stringArr = string.split('');
  let restString = '';

  for (let i = 1; i <= stringArr.length - 1; i++) {
    restString += stringArr[i].toLowerCase();
  }

  return stringArr[0].toUpperCase() + restString;
}

module.exports = cap;
