// Find the smallest element in the array

/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/


function findSmallestInt(args) {
    // set temp to always be the 1st element of the array, this is the starting point
    let temp = args[0];

    // loop through the array and check to see if the element is smaller than temp
    for (let i = 1; i < args.length; i++) {
        // check to see if current element is smaller than temp, if so, then replace temp with the element
        if (args[i] < temp) {
            temp = args[i];
        }
    }

    return temp;
}

function math_min(args) {
    // We can use the built in Math.min function to find the min value
    return Math.min(...args);

    // Here the ... is REQUIRED!
}


let arr = [27, 63, 12];
console.log(math_min(arr));
