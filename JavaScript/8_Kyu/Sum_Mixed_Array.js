// Sum of elements in a mixed array

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/


function sumMix(x) {
    let total = 0;

    // loop through the array
    for (let i = 0; i < x.length; i++) {
        // check to see if the element is a string
        if (typeof(x[i]) === "string") {
            // convert element into number
            let temp = Number(x[i]);

            // add it to the total
            total += temp;
        } else {
            // add element to the total
            total += x[i];
        }
    }

    return total;
}

my_array = [1, '2', 3];
console.log(sumMix(my_array));
