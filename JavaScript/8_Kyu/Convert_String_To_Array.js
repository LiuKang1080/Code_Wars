// Convert a string into an array

/*
Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/


function stringToArray(string) {
    // We will use the .split() method
    // Our delimiter for the splitting is " " (space)
    let arr = string.split(" ");

    return arr;
}
