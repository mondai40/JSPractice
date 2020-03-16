// b) Put this function in a different module and export it. Then, in this module, 
//   import the module that contains your function and call it from this module.

const myFunc = require("./a_create_function");

const sum = myFunc(1, 2, 3, 4, 5);
console.log(sum);