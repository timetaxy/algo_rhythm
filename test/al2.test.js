`use strict`;
const al2 = require("../b4344/al2");
const input = [
  [5],
  [5, 50, 50, 70, 80, 100],
  [7, 100, 95, 90, 80, 70, 60, 50],
  [3, 70, 90, 80],
  [3, 70, 90, 81],
  [9, 100, 99, 98, 97, 96, 95, 94, 93, 91],
];

const output = ["40.000%", "57.143%", "33.333%", "66.667%", "55.556%"];

// describe("pretest created", () => {
//   beforeEach(() => {
//     al2.solve = jest.fn();
//   });
//   afterEach(() => {
//     al2.solve.mockReset();
//   });
//   it("it should be function", () => {
//     // console.log("test");
//     expect(typeof al2.solve).toBe("function");
//   });

//   it("it should not be some object", () => {
//     // console.log("test");
//     expect(typeof al2.solve).not.toBe("object");
//   });

//   it("it should be called", () => {
//     const spy = jest.spyOn(al2, "solve");
//     al2.solve();
//     expect(spy).toBeCalled();
//   });

//   it("it should be called check without spy", () => {
//     // al2.solve = jest.fn();
//     al2.solve();
//     expect(al2.solve).toHaveBeenCalled();
//   });

//   it("it should be return proper output", () => {
//     // al2.solve = jest.fn();
//     al2.solve.mockReturnValue(output);
//     const ret = al2.solve(input);
//     expect(ret).toBe(output);
//   });
// });

describe("test for solve", () => {
  it("should be return proper result", () => {
    // console.log(input);
    // expect(input).toEqual(input);
    // jest.setTimeout(600000);
    const ret = al2.solve(input);
    expect(ret).toEqual(output);
    // const ret = output;
    // expect(ret).toStrictEqual(output);
    //time out
    // expect(ret).toBe(output);
    // console.log(output);
    // expect(output).toEqual(output);
    // expect(1).toBe(1); //fail
    // expect(1).toEqual(1); //fail?
    //ref
    //https://stackoverflow.com/questions/22413009/jasmine-javascript-testing-tobe-vs-toequal
    // toBe : ref object, toEqual : ref value
    //https://github.com/jasmine/jasmine/issues/786
    // always arr compare fail
  });
});
