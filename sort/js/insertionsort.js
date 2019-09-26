var list = [];
// dirty method to see if a number is prime
function isPrime(num) {
    if (list.includes(num) == true) return false;
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
    return true;
}

//dirty method to generate some number of primes, 
//will keep going till we have THAT number of primes found

function genPrimes(numOfPrimes) {
    var cnt = 0;
    var num = 0;

    while (cnt < numOfPrimes) {
        if (isPrime(num) == true) {
            console.log("Found prime: " + num)
            cnt++;
            list.push(num)
        }
        num++;
    }
    return list;
}

// here we just shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// now generate some number of primes
// var pArray = genPrimes(1000000);
// shuffle(pArray);
// console.log("Prime Numbers: " + pArray)
// shuffle(pArray)
// console.log("Prime Shuffle: " + pArray)
// just example array
//var someArray = [0,1,2,3,4,5,6,7,8,9]

// randonm array example
//var rndArray = fillList(10)

// console.log("Sorted: " + bubbleSort(pArray))


// var objectNumber = 1000; //the number of generating
// //call fillList and show numbers in textarea
// function generateNumbers() {
//     let textarea = document.getElementById("originalNumber");
//     let numberList = [];
//     let allNumber = "";
//     numberList = fillList(objectNumber);
//     allNumber = numberList.join(); //join() concatenates each array values with comma
//     textarea.value = allNumber;
// }

// // fill a list with some amount of numbers
// function fillList(itemCount)
//     {
//     var anArray = [];
//     for (var i = 0; i < itemCount; i++)
//         {
//             let randomNumber = Math.floor((Math.random() * 1000) + 1)
//             anArray.push(randomNumber);
//         }
//         return anArray;
//     }

//get numbers from textarea
    function insertionSortNumbers() {
        let textarea = document.getElementById("originalNumber");
        let sortedTextarea = document.getElementById("sortedNumber");
        let allSortedNumber = "";
        let getNumbers = textarea.value.split(",");
        let convertedNumbers = [];
        for (let i = 0; i < getNumbers.length; i++) {
            convertedNumbers.push(Number(getNumbers[i]));
        }
        let sortedNumbers = insertionSort(convertedNumbers);
        allSortedNumber = sortedNumbers.join()
        sortedTextarea.value = allSortedNumber;
    }



function insertionSort(theArray) {
    var t0 = performance.now();
    var tmpArray = theArray;
    for (var loopIndex = 1; loopIndex < tmpArray.length; loopIndex++) {
        for (var i = loopIndex; i > 0; i--) {
            if (tmpArray[i] < tmpArray[i - 1]) {
                var a = tmpArray[i];
                var b = tmpArray[i-1];
                tmpArray[i-1] = a;
                tmpArray[i] = b;
            }
        }
    }
    var t1 = performance.now();
    var executionTime = t1 - t0;
    // console.log(`start: ${t0}`);
    // console.log(`end: ${t1}`);
    console.log(`Insertion sort time: ${executionTime}`);
    return tmpArray;
}