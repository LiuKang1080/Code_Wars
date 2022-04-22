// Convert a string into a number

/*
Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
Examples

"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/


function string_to_number(str) {
    // We can use the Number() class constructor to create the number from string
    return Number(str);
}


console.log(string_to_number("-7"));
