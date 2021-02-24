exports.solve = (input) => {
  let retArr = [];
  if (input.length > 80) return;
  console.log(typeof input);
  // if (typeof input != Array) return;

  // let temp = [1, 2, 3];
  // console.log(temp[temp.length - 1]);
  for (const strings of input) {
    // console.log(iterator);
    console.log(`input:${strings}`);
    let temp = [];
    for (const char of strings) {
      // console.log(char);
      switch (char) {
        case "O":
          if (temp.length != 0 && temp[temp.length - 1] != 0) {
            // console.log(`temp len:${temp.length}`);
            // if (temp[temp.length - 1] != 0) {
            // console.log(`temp last el:${temp.length - 1}`);
            temp.push(temp[temp.length - 1] + 1);
            // }
          } else {
            temp.push(1);
          }

          break;
        case "X":
          temp.push(0);
          break;

        default:
          // temp.push(null);
          break;
      }
    }
    console.log(`el output:${JSON.stringify(temp)}`);
    if (temp.length) {
      let tempSum = 0;
      for (const tempEl of temp) {
        tempSum += tempEl;
      }
      retArr.push(tempSum);
    }
    // for (let index = 0; index < temp.length; index++) {
    //   let element = temp[index];
    // }
    // retArr.push(temp);
  }
  console.log(JSON.stringify(retArr));
  return retArr;

  // return [null, 10, 9, 7, 55, 30];
};

//ref
//https://ko.javascript.info/array-methods
