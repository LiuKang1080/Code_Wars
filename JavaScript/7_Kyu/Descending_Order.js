// Descending Order

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/


function descendingOrder(n){
    // first convert number into a string
    let str = String(n);

    // split the string into an array, order the array in descending order
    let descending_arr = str.split("").sort( (a, b) => b - a );

    // convert the array back into a string, and then convert back into an number
    return Number(descending_arr.join(""));
}


console.log(descendingOrder(145263));
