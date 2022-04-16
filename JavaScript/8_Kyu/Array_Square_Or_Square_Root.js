// To Square or to not Square

/*
To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number.

[4,3,9,7,2,1] -> [2,9,3,49,4,1]

The input array will always contain only positive numbers and will never be empty or null.
The input array should not be modified!
*/


function squareOrSquareRoot(array) {
    // declare variables
    square_root_arr = [];
    
    // lopp through the array
    for (let i = 0; i < array.length; i++) {
        // check to see if the number is completely divisible as a whole number
        // number % 1 === 0 checks to see if a number is a whole number or not
        if (Math.sqrt(array[i]) % 1 === 0) {
            // if the square root is whole add it to the array
            square_root_arr.push(Math.sqrt(array[i]));
        } else {
            // square root is not whole, instead add the square of that number to the array
            square_root_arr.push(Math.pow(array[i], 2));
        }
    }

    return square_root_arr;
}


console.log(squareOrSquareRoot([4,3,9,7,2,1]));
