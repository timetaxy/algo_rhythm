`use strict`;

const start = 0;
const limit = 10000;
const size = 1000;

// for (let index = start; index < limit; index++) {

// }

const asyncProcessing = (x, y, cb) => {
  new Promise((res, rej) => {
    for (let index = x; index < y; index++) {
      console.log(`now asyncProcessing x:${x}, y:${y}`);
      let ret = cb(x);
      if (ret !== null) res(ret);
    }
  });
};

const limitSharding = (start, limit, size) => {
  let ret = [];
  for (let index = start; index < limit; index += size) {
    let nowLimit = index + size;
    if (index + size > limit) nowLimit = limit;
    console.log(index, nowLimit);
    ret.push([index, nowLimit]);
  }
  return ret;
};
const ret = limitSharding(start, limit + 1, size);
console.log(JSON.stringify(ret));

let ret2 = [];
for (const el of ret) {
  ret2.push(
    asyncProcessing(el[0], el[1], () => {
      console.log("testing");
    })
  );
}
Promise.all(ret2).then((value) => {
  console.log(value);
});
