//es6
// export default function () {
//   console.log("this is that");
// }
//ref
//https://yceffort.kr/2020/11/avoid-default-export
exports.solve = (input) => {
  let result = [];
  for (const arr of input) {
    // let tempResult = [];
    let cnt = 0;
    let scores = [];
    let sum = 0;
    let avg = 0;
    if (arr.length < 2) continue;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (index == 0) {
        cnt = element;
        continue;
      }
      scores.push(element);
    }

    for (const iterator of scores) {
      sum += parseInt(iterator);
    }
    avg = sum / cnt;
    let retCnt = 0;
    for (const score of scores) {
      const flag = score > avg ? true : false;
      if (flag) retCnt += 1;
    }
    // tempResult.push();
    // console.log(`avg:${avg}`);
    const thisRet = ((retCnt / cnt) * 100).toFixed(3);
    const thisRetStr = thisRet.toString() + "%";
    console.log(`this ret:${thisRet}`);
    result.push(thisRetStr);
  }
  return result;

  //   const output = ["40.000%", "57.143%", "33.333%", "66.667%", "55.556%"];
  //   return output;
};

//ref
//https://ko.javascript.info/number
