const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 4x4 square array correctly", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const result = unroll(square);
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  it("unrolls a 3x3 square array correctly", function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const result = unroll(smallerSquare);
    expect(result).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  it("unrolls a 2x2 square array correctly", function () {
    const smallerSquare = [
      [1, 2],
      [3, 4]
    ];
    const result = unroll(smallerSquare);
    expect(result).toEqual([1, 2, 4, 3]);
  });

  it("unrolls a 1x1 square array correctly", function () {
    const smallerSquare = [
      [1]
    ];
    const result = unroll(smallerSquare);
    expect(result).toEqual([1]);
  });
});
