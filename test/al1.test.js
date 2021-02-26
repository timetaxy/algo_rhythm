`use strict`;
const { expect } = require("@jest/globals");
const al1 = require("../b8958/al1");
const input = [
  "5",
  "OOXXOXXOOO",
  "OOXXOOXXOO",
  "OXOXOXOXOXOXOX",
  "OOOOOOOOOO",
  "OOOOXOOOOXOOOOX",
];

const output = [10, 9, 7, 55, 30];

describe("al1 pretest created", () => {
  beforeEach(() => {
    al1.solve = jest.fn();
  });
  afterEach(() => {
    al1.solve.mockReset();
  });
  it("should be function", () => {
    expect(typeof al1.solve).toBe("function");
  });

  it("should be called proper function", () => {
    al1.solve = jest.fn();
    al1.solve(input);
    expect(al1.solve).toHaveBeenCalled();
  });

  it("should be called with proper args", () => {
    al1.solve = jest.fn();

    al1.solve(input);
    expect(al1.solve).toBeCalledWith(input);
  });

  it("should be called with proper args testing with spying", () => {
    const spy = jest.spyOn(al1, "solve");

    al1.solve(input);
    expect(spy).toBeCalledWith(input);
  });

  it("should be return proper result using mock", () => {
    // al1.solve = jest.fn();
    // al1.solve.mockReturnValue(output);
    al1.solve.mockReturnValueOnce(output);
    const res = al1.solve(input);
    // console.log(`res:${res}`);
    expect(res).toEqual(output);
    // mock.mockReset();
    // al1.solve.mockReset();
    // expect(res._getJSONData).toStrictEqual(output._getJSONData);
  });
});

describe("test for proper answer checking", () => {
  it("should be return proper result", () => {
    const res = al1.solve(input);
    console.log(`res:${res}`);
    expect(res).toEqual(output);
  });
});

// ref:
// https://jestjs.io/docs/expect
// https://zakelstorm.tistory.com/53
// https://crmrelease.tistory.com/104
// https://www.daleseo.com/jest-fn-spy-on/
// https://gitlab.com/jinwoo-kim/training-jwkim/-/wikis/jasmine-usage
