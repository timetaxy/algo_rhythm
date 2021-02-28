const al = require("../b1712/al3");
const input = [
  [1000, 70, 170],
  [3, 2, 1],
  [2100000000, 9, 10],
];
const output = [11, -1, 2100000001];
describe("pretest created", () => {
  let spy;
  beforeEach(() => {
    spy = jest.spyOn(al, "solve");
  });
  afterEach(() => {});
  it("should be called", () => {
    // const spy = jest.spyOn(al, "solve");
    al.solve();
    expect(spy).toBeCalled();
  });

  it("should be called with args", () => {
    al.solve(input);
    expect(spy).toBeCalledWith(input);
  });
});

describe("test for solve created", () => {
  it("should be return proper result", () => {
    const ret = al.solve(input);
    expect(ret).toEqual(output);
  });
});
