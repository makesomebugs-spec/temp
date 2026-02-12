const path = require("path");
console.log(path.sep); //sepr spec to ur device

const fpath = path.join("/content", "subfolder", "test.txt"); //starts w content, only sep is / so /content
//adds sep in b/w
console.log(fpath);

//to get base name= file at end of path
const base = path.basename(fpath);
console.log(base);

//accepts seq of path, returns abs path
const abs = path.resolve(__dirname, "content", "subfolder", "test.txt"); //dir=where app.js is
console.log(abs);
//u might need abs as we might work in diff env
