// Finding the first non-consecutive number

/*
Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first 
non-consecutive number.

If the whole array is consecutive then return null.
The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in
ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/


function firstNonConsecutive(arr) {
    /*
        - loop through the array
        - On each iteration we check to see if the next element in the array is equal to current element + 1
        - We place the loop within a try-catch block to catch the out of bounds errors
    */

    // declare variables
    let temp = arr[0];
    let non_consecutive = 0;

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (temp === arr[i]) {
            temp++;
            continue;
        } else {
            non_consecutive = arr[i];
            return non_consecutive;
        }
    }

    return null;
}


console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
