const isOutOfRange = (value, min, max) => value < min || value > max;

const isDecimal = (value) => !Number.isInteger(value);

module.exports = {
  isOutOfRange,
  isDecimal,
};
