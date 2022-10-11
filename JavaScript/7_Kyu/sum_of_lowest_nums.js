// Sum of two lowest positive integers

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No 
floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/


function sumTwoSmallestNumbers(numbers) {  
    /*
        - First order the array in ascending order.
        - Index the first 2 numbers.
        - Sum and return the result.
    */
    // decalre variables
    let smallest_number = 0;
    let second_smallest_number = 0;

    // sort the array
    numbers.sort( (a, b) => a - b );

    smallest_number = numbers[0];
    second_smallest_number = numbers[1];

    return smallest_number + second_smallest_number;
}


let arr = [10, 343445353, 3453445, 3453545353453];
console.log(sumTwoSmallestNumbers(arr));
