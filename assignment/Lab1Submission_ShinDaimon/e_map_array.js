// e) Create a new array named “mySecondArr”. Map the contents of your myArr array 
//  to mySecondArr array using an anonymous function that multiplies each member of myArr by 2.

const myArr = require("./c_create_an_array");

const mySecondArr = myArr.map((x) => {
    return x * 2;
});

console.log(mySecondArr);

module.exports = mySecondArr;