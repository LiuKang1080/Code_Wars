// Find the middle element

/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical
element that lies between the other two elements. The input to the function will be an array of three distinct numbers 
(Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/


function return_sorted(arr) {
    // sort the array
    return arr.sort( (a, b) => a - b );
}

function gimme(arr) {
    // create copy of array
    let copy_arr = [...arr];
    let sorted_arr = return_sorted(copy_arr);
    // we need to create this copy since sort() will actually change the array that is passed (arr), we need arr to not change
    // for the comparison.
    
    // [1] is the middle number
    middle_num = sorted_arr[1];

    // loop through the array to find the index of middle_num
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === middle_num) {
            return i;
        }
    }
}

console.log("Index of the middle number is: " + gimme([5, 10, 14]));
