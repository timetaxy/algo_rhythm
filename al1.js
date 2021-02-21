exports.solve = (input) => {
  if (input.length > 80) return;
  if (typeof input != "string") return;
  for (const iterator of input) {
    console.log(iterator);
  }
  // let result = 0;

  // switch (input) {
  //   case "O":
  //     result+=1
  //     break;
  //   case "X":
  //     break;
  //   default:
  //     break;
  // }
  // console.log(`test1 @@@@@@@@@@@@@@@@@@@@@`);
  // console.log(`input:${x}`);
  // return [null, 10, 9, 7, 55, 30];
};
