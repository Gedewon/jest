const stringLength = require("./index");

test("count of gedi should be 4", () => {
  // AAA pattern
  let str = "gedi";

  // act
  let result = stringLength(str);

  // assert
  expect(result).toEqual(4);
});
