`use strict`;
const input = [110, 1, 210, 1000, 500];
const output = [99, 1, 105, 144, 119];
const mixRet = input.reduce((rs, x, idx) => {
  // console.log(x);
  // console.log(idx);
  // output.reduce();
  console.log(output[idx]);
  rs[x] = output[idx];
  return rs;
}, {});
// console.log(mixRet[110]);
console.log(JSON.stringify(mixRet));
