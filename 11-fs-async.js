const { readFile, writeFile } = require("fs");
//async so callback: run another fn when this fn is over

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
}); //path,encode,callback
//yes, u can access only through callback
//earlier in var
//so alt
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done");
      },
    );
  });
});
//async so no return or printed val
console.log("here");
console.log("here 2");
