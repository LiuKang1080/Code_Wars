// Reverse words in a sentence

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/


function reverseString(str) {
    return str.split("").reverse().join("");
}

function reverseWords(str) {
    /*
        - We will first take the original string and create an array from it, using the " " as the delimiter.
        - We will take each element in the array, reverse the string element, and then place the result into a new array.
        - We will loop through the new second array and construct the sentence with spaces.
    */

    // create new array:
    let reverse_arr = [];
    // split the string into an array
    let split_arr = str.split(" ");

    // loop through the array
    for (let i = 0; i < split_arr.length; i++) {
        // at each element, take the string and call the rverseString() function on it, this will return the reversed string, we
        // add this string into reverse_arr
        reverse_arr.push(reverseString(split_arr[i]));
    }

    // now we construct the sentence from the reverse_arr, and return it
    return reverse_arr.join(" ");
}

let str = "Hello World!";
console.log(reverseWords(str));
