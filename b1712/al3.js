exports.solve = (x) => {
  //   console.log("solve");
  const singleSolve = (x) => {
    const limit = 2100000000;

    if (x.length != 3) return;
    let factor = 0;
    let ret;
    while (true) {
      factor++;
      console.log(`now calculating case, factor:${factor}`);
      let cost1 = x[0] + x[1] * factor;
      let cost2 = x[2] * factor;
      if (cost1 < cost2) {
        ret = factor;
        break;
      }
      if (factor > limit) {
        factor = -1;
        break;
      }
    }
    console.log(`ret:${ret}`);
    return ret;
  };

  const asyncProcessing = async (x, y, cb) => {
    new Promise((res, rej) => {
      for (let index = x; index < y; index++) {
        console.log(`now asyncProcessing x:${x}, y:${y}`);
        let ret = cb(x);
        if (ret !== null) res(ret);
      }
    });
  };

  let result = [];
  for (const iterator of x) {
    result.push(singleSolve(iterator));
  }
  console.log(`result:${JSON.stringify(result)}`);
  return result;
};
