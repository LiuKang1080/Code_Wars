// Check same case

/*
Write a function that will check if two given characters are the same case.
    - If any of characters is not a letter, return -1
    - If both characters are the same case, return 1
    - If both characters are letters and not the same case, return 0

Examples:
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1
*/


function sameCase(a, b){
    // declare variables:
    let not_letters_regex = /[^a-zA-Z]/;
    let letters_regex = /[A-Za-z]/;
    let lowercase_regex = /[a-z]/;
    let uppercase_regex = /[A-Z]/;

    // check to see if any of the arguments match numbers, by using the match() function
    if ((a.match(not_letters_regex) !== null) || (b.match(not_letters_regex) !== null)) {
        return -1;
    } else if ((a.match(letters_regex) !== null) && (b.match(letters_regex) !== null)) {
        // check to see if both of the characters are the same case
        if ((a.match(uppercase_regex) !== null) && ((b.match(uppercase_regex) !== null))) {
            // both characters are uppercase
            return 1;
        } else if ((a.match(lowercase_regex) !== null) && ((b.match(lowercase_regex) !== null))) {
            // both characters are lowercase
            return 1;
        } else {
            // both are letters, but different cases
            return 0;
        }
    }
}


console.log(sameCase("A", "B"));
