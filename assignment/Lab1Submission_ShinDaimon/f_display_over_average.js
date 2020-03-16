// f) Filter the contents of your mySecondArr using an anonymous function 
//  that console logs the numbers above average number (you’ll need to find the average first).

const mySecondArr = require("./e_map_array");

let average = mySecondArr.reduce( ( pre, curr, i )=> {
    return pre + curr;
}, 0 ) / mySecondArr.length;

mySecondArr.filter((x) => {
    if (x > average) {
        console.log(x);
    }
});




