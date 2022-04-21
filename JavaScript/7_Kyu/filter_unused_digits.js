// Filter Unused Digits

/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.
*/


function unusedDigits() {
    /*
        - Taking n number of arguments, we take all arguments and convert them into strings.
        - Convert the argument into a string.
        - Add all of the chars into a set.
        - Loop from 0 to 9 [convert back to char] and check to see if it's in the set.
        - If it exists in the set, pass, if it's not in the set, then add it to the result.
        - Return the result as a string.
    */

    // declare variables
    let unique_set = new Set();
    let result = "";

    for (let i = 0; i < arguments.length; i++) {
        // conver the current argument into a string, and then split the string into an array
        let temp_string_array = arguments[i].toString().split("");

        // loop through the temp_array, and add all of the unique elements to the unique_set
        for (let j = 0; j < temp_string_array.length; j++) {
            // console.log(temp_string_array[j]);
            unique_set.add(temp_string_array[j]);
        }
    }

    // the set now contains all of the unique numbers, we now find the missing numbers and add them to result array
    for (let k = 0; k < 10; k++) {
        if (unique_set.has(k.toString())) {
            continue;
        } else {
            result = result + k.toString();
        }
    }

    // return the result as a string
    return result
}


console.log(unusedDigits(12, 34));
