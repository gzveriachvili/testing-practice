const cipher = (string) => {
  let arr = [];
  let plainString = 'abcdefghijklmnopqrstuvwxyz';
  let punctuation = ['!', '.', ',', '?', ' '];
  let plain = plainString.split('');
  string = string.toLowerCase();
  string = string.split('');

  function getCount() {
    let count = 1;
    for (let i = 0; i <= string.length - 1; i++) {
      if (string[i] === string[i + 1]) {
        count++;
      }
    }
    return count;
  }

  function doLoop(n) {
    for (let i = 0; i <= plain.length - 1; i++) {
      if (string.includes(plain[i])) {
        if (string.includes(punctuation[i])) {
          arr.push(punctuation[i]);
        }

        if (plain[i] === 'z') {
          plain[i] = 'a';
          for (let x = 0; x < 2; x++) {
            arr.push(plain[i]);
          }
        } else {
          if (string[i] == string[i + 1]) {
            for (let x = 0; x < n; x++) {
              arr.push(plain[i + 1]);
            }
          } else {
            arr.push(plain[i + 1]);
          }
        }
      }
    }
  }

  doLoop(getCount());

  return arr.join('');
};

module.exports = cipher;
