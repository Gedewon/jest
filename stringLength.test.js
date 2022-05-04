const { stringLength, reverseString } = require("./index");
const Calculator = require("./calculator");

test("count of gedi should be 4", () => {
  let str = "gedi";
  let result = stringLength(str);
  expect(result).toEqual(4);
});
test("empty string should throw ", () => {
  let element = "123456789123";
  expect(() => stringLength(element)).toThrow(Error);
});
test("string is at between >10 should throw", () => {
  let element = "";
  expect(() => stringLength(element)).toThrow(Error);
});
test("reverse simple string", () => {
  let element = "Gedewon";
  expect(reverseString(element)).toBe("nowedeG");
});

describe("Calculator class", () => {
  test("add method", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });
  test("subtract method", () => {
    expect(Calculator.subtract(2, 2, 1)).toBe(-1);
  });
});
