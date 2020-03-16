// d) Call your function passing as arguments the members of myArr array using the SPREAD operator. 
//  Assign the result to a “result” variable and console log it.

const myArr = require("./c_create_an_array");

const mySum = (...args) => {
    let base = 0;
    for (let i = 0; i < args.length; i++) {
        base = base + args[i];
    }
    return base;
};

const result = mySum(...myArr);
console.log(result);