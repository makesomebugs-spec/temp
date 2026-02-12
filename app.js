const _ = require("lodash"); //convention to use _
//first install then use it w require
const items = [1, [2, [3, 4]]];
//splits to flat array
const newItems = _.flattenDeep(items);
console.log(newItems);
