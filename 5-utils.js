const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

//sayHi(name1); //error if no export
module.exports = sayHi; //or {sayHi}; to export as an object with sayHi property

//on running app, it compiles other js files too
