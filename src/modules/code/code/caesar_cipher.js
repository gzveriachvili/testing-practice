const cipher = (string) => {
  let arr = [];
  let plainString = 'abcdefghijklmnopqrstuvwxyz';
  let punctuation = ['!', '.', ',', '?', ' '];
  let plain = plainString.split('');
  string = string.toLowerCase();
  string = string.split('');

  for (let i = 0; i <= plain.length - 1; i++) {
    if (string.includes(plain[i])) {
      if (plain[i] === 'z') {
        plain[i] = 'a';
        arr.push(plain[i]);
      } else {
        arr.push(plain[i + 1]);
      }
    }
    if (string.includes(punctuation[i])) {
      arr.push(punctuation[i]);
    }
  }

  return arr.join('');
};

module.exports = cipher;
