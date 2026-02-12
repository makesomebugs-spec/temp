//modules-encaps code
const name1 = "name1";
const name2 = "name2";

const names = require("./4-names");
console.log(names);

const sayHi = require("./5-utils");
sayHi(names.name1);
const data = require("./6-alt-flavour");
require("./7-mind-grenade"); //will invoke the function
//whenever you invoke a mod you invoke it
//else the fn is stored to a var
console.log(data);
sayHi("susan");
sayHi(name1);
sayHi(name2);
//each const is accessible everywhere in this file but not outside
//every file in node is a module (by default)
