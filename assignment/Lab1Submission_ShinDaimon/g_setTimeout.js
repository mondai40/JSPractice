// g) Use setTimeout() function. Pass it a callback function as parameter 
// that console logs “Goodbye” after 3 seconds.

const greeting = () => {
    console.log("Goodbye");
}

setTimeout(greeting, 3000);