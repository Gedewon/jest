const stringLength = (str) => {
  if (str.length <= 0 || str.length > 10)
    throw new Error("Character is not in the range");

  return str.length;
};

module.exports = stringLength;
