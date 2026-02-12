//both async-non blocking n sync-blocking in fs
const { readFileSync, writeFileSync } = require("fs");

//para of file:path,encoding type
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
//console.log(first, second);

//create new
//if no existing, creates; else overwrites
writeFileSync("./content/result-sync.txt", `Here is ${first},${second}`, {
  flag: "a",
}); //flag to append
console.log("here");
console.log("here 2");
