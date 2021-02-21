`use strict`;
const { expect } = require("@jest/globals");
const al1 = require("../al1");
const input = [
  "5",
  "OOXXOXXOOO",
  "OOXXOOXXOO",
  "OXOXOXOXOXOXOX",
  "OOOOOOOOOO",
  "OOOOXOOOOXOOOOX",
];

const output = [null, 10, 9, 7, 55, 30];

al1.solve = jest.fn();

beforeEach(() => {
  al1.solve.mockReset();
});
describe("al1 test created", () => {
  it("should be function", () => {
    expect(typeof al1.solve).toBe("function");
  });

  it("should be called proper function", () => {
    al1.solve(input);
    expect(al1.solve).toHaveBeenCalled();
  });

  it("should be return proper result using mock", () => {
    al1.solve.mockReturnValue(output);

    const res = al1.solve(input);
    console.log(`res:${res}`);
    expect(res).toEqual(output);
    // mock.mockReset();
    // al1.solve.mockReset();
    // expect(res._getJSONData).toStrictEqual(output._getJSONData);
  });

  it("should be return proper result", () => {
    const res = al1.solve(input);
    console.log(`res:${res}`);
    expect(res).toEqual(output);
  });
});
// ref:https://jestjs.io/docs/expect
