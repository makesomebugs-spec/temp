//local
const secret = "TOP SECRET";
//shared
const name1 = "name1";
const name2 = "name2";
//can be accessed in app.js after exporting

//No need to even run 4-names.js to see the exported values in app.js; only saved changes are needed

module.exports = { name1, name2 }; //exporting an object with name1 and name2 properties of obj module.exports
//es6: key name is same as variable name so we can use shorthand
//module.exports={name1:name1,name2:name2};
//to see what module object contains
//console.log(module);
//&
//op: b4 export
// {
//   id: '.',
//   path: 'C:\\Users\\Joanna\\Desktop\\n',
//   exports: {},
//   filename: 'C:\\Users\\Joanna\\Desktop\\n\\4-names.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\Users\\Joanna\\Desktop\\n\\node_modules',
//     'C:\\Users\\Joanna\\Desktop\\node_modules',
//     'C:\\Users\\Joanna\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ],
//   Symbol(kIsMainSymbol): true,
//   Symbol(kIsCachedByESMLoader): false,
//   Symbol(kURL): undefined,
//   Symbol(kFormat): undefined,
//   Symbol(kIsExecuting): true
// }

//we can export variables from this module to be used in other modules and in app.js
