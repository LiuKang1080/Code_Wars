// Testing 1, 2, 3

/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:
number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/


function format_lines(arr) {
    // We can also use the map() function to produce a new array
    // Iterate through the array, and format the string, and add new element into formatted_array
    let formatted_array = [];
    
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        formatted_array.push(`${i + 1}: ${arr[i]}`);
    }

    return formatted_array;
}


console.log(format_lines(["a", "b", "c"]));
