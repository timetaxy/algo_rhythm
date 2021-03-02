`use strict`;
const al = require("../b1065/al");
const input = [110, 1, 210, 1000, 500];
const output = [99, 1, 105, 144, 119];
const pairAnswer = input.reduce((rs, x, idx) => {
  rs[x] = output[idx];
  return rs;
}, {});
describe("pre test for solving", () => {
  //toBe: ref check, toEqual:value check
  let spy;
  beforeEach(() => {
    spy = jest.spyOn(al, "solve");
  });
  afterEach(() => {
    al.solve.mockReset();
  });
  it("should be return proper result", () => {
    for (let index = 0; index < input.length; index++) {
      const ret = al.solve(input[index]);
      expect(ret).toEqual(output[index]);
    }
  });
  it("should be return proper result using mock", () => {
    al.solve.mockReturnValue(pairAnswer[input[1]]);
    const ret = al.solve(input[1]);
    expect(ret).toEqual(pairAnswer[input[1]]);
  });
  it("shoud be called", () => {
    al.solve(input[0]);
    expect(spy).toBeCalled();
  });
});

describe("test for solving", () => {
  it("should be return proper result", () => {
    for (const x of input) {
      const ret = al.solve(x);
      // console.log(pairAnswer[input[2]]);
      expect(ret).toEqual(pairAnswer[x]);
    }
  });
});
