// a) Create an arrow function named “mySum”.
//  (1) Your function should accept an arbitrary number of arguments using the REST operator.
//  (2) Your function should return the sum of all of its inputs.

const mySum = (...args) => {
    let base = 0;
    for (let i = 0; i < args.length; i++) {
        base = base + args[i];
    }
    return base;
};

module.exports = mySum;