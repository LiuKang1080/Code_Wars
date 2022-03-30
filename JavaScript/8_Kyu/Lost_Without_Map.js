// Lost Without a Map

/*
Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/


function maps(x) {
    // use the map() function to double each of the elements and return the new array
    return x.map( (i) =>  i * 2 );
}

console.log(maps([1, 2, 3]));
