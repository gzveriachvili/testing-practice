const calculator = (() => {
  const add = (a, b) => parseFloat(a) + parseFloat(b);
  const subtract = (a, b) => parseFloat(a) - parseFloat(b);
  const divide = (a, b) => {
    if (b === 0) {
      return "Can't divide with zero";
    } else {
      return parseFloat(a) / parseFloat(b);
    }
  };
  const multiply = (a, b) => a * b;

  return { add, subtract, divide, multiply };
})();

module.exports = calculator;
