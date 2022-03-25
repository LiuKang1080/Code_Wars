// List filtering

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example:

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/


function filter_list(arr) {
    // loop through the array, check to see if each element is of the type "Number", if it's a number then add it to new_arr
    // If element is not of the type "Number", continue.
    let new_arr = [];

    for (let i = 0; i < arr.length; i++) {
        // check to see if element is of the data type "number"
        if (typeof(arr[i]) === "number") {
            new_arr.push(arr[i]);
        }
    }

    return new_arr;
}

console.log(filter_list([1,2,'aasf','1','123',123]));
