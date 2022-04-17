// Name Shuffler

/*
Write a function that returns a string in which firstname is swapped with last name.

name_shuffler('john McClane'); --> "McClane john"
*/


function nameShuffler(str){
    /*
        - Take the string and split it into an array by using the space as the delimiter.
        - Reverse the array.
        - Join the array back into a string with a space as the delimiter 
    */

    // split the array, reverse the array, and then join the array.
    // the delimiter for the split and the join methods is the space.
    return str.split(" ").reverse().join(" ");
}


console.log(nameShuffler("John McClane"));
