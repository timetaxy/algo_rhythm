`use strict`;
const input = [110, 1, 210, 1000, 500];
const output = [99, 1, 105, 144, 119];
const mixRet = input.reduce((rs, x, idx) => {
  rs[x] = output[idx];
  return rs;
}, {});

module.exports.solve = (x) => {
  console.log(`test input x:${x}`);
  let cnt = 0;
  let resultArr = [];
  for (let el = 1; el <= x; el++) {
    // console.log(`index:${el}`);
    var strEl = el.toString();
    var digit = strEl.length;
    if (digit === 1) {
      cnt += 1;
      resultArr.push(el);
      continue;
    }
    // if (digit < 2) continue;
    let sub = 0;
    for (let index = 1; index < digit; index++) {
      // const element = strEl[index];
      // if (index === 0) {
      //   cnt += 1;
      //   continue;
      // }
      const thisSub = parseInt(strEl[index - 1]) - parseInt(strEl[index]);
      if (index == 1) {
        sub = thisSub;
      }
      if (sub != thisSub) break;
      if (index == digit - 1) {
        cnt += 1;
        resultArr.push(el);
      }
    }
    // console.log(`digit:${digit}`);
  }
  console.log(`solved result array:${resultArr}`);
  return cnt;
  // console.log(mixRet[x]);
  // return mixRet[x];
  // return 1;
};
