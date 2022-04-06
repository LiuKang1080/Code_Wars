// Multiples of a number

/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another
value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed
into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
If you can, try writing it in only one line of code.
*/


function findMultiples(integer, limit) {
    // We can manually get the calculation by using a for loop from integer up to the limit
    // declare variables:
    let result = [];

    // add the argument as the first element of the array since a number is always a multiple of itself
    result.push(integer);

    // loop from (integer + 1) up to and including the limit
    for (let i = integer + 1; i <= limit; i++) {
        // check to see if i is completely divisible by the integer, if it is, then that means it is a multiple of that number.
        // add it to the result array
        if (i % integer === 0) {
            result.push(i);
        }
    }

    return result;
}


console.log(findMultiples(2, 6));
