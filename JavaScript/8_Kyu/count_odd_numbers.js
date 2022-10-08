// Count all odd numbers below given number n

/*
Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!
*/


function Brute_force(n) {
    // declare variables
    let odd_counter = 0;

    // loop from 1 to n
    for (let i = 1; i < n; i++) {
        // check to see if i is odd
        if (i % 2 === 0) {
            continue;
        } else {
            odd_counter++
        }
    }

    return odd_counter;
}

function oddCount(n){
    /*
        - Loop from 1 to the upper limit n
        - On each iteration check to see if it's an odd number, if it is increment odd variable
        - Return the odd variable counter

        - WARNING!!! In this kata we will test against very large numbers, we CANNOT create arrays and add oddd numbers to that
            array. We will get "invalid array length Allocation failed - JavaScript heap out of memory" ERROR. We must keep count
            using a number variable.
        - WARNING!!! In this kata brute force method will be too slow, rather than trying this kata code wise, we must do this
            math wise.

        - Math wise -- given a number, half of all numbers up to that number will be odd, and the other half being even depending
            on the number given. Math wise we can just return the number / 2 depending on if the number given is even or odd
    */

    return Math.floor(n / 2);
}


console.log(oddCount(7));
