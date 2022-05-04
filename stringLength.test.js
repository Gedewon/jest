const stringLength = require("./index");

test("count of gedi should be 4", () => {
  // AAA pattern
  let str = "gedi";

  // act
  let result = stringLength(str);

  // assert
  expect(result).toEqual(4);
});
test("empty string should throw ", () => {
  // arrange
  let element = "123456789123";

  //act and asset

  expect(() => stringLength(element)).toThrow(Error);
});
test("string is at between >10 should throw", () => {
  // arrange
  let element = "";

  //act and asset

  expect(() => stringLength(element)).toThrow(Error);
});
