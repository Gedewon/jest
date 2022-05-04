const stringLength = (str) => {
  if (str.length <= 0 || str.length > 10)
    throw new Error("Character is not in the range");

  return str.length;
};

const reverseString = (str) => str.split("").reverse().join("");

const Capitalize = ([firstLetter, ...rest]) =>
  firstLetter.toLocaleUpperCase() + rest.join("");

module.exports = {
  stringLength,
  reverseString,
  Capitalize,
};
