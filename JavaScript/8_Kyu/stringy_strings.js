// Stringy Strings

/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/


function stringy(size) {
    // We can use arrays to store the 1s and 0s, and then use the join method to form the final string
    // declare variables
    let arr = [];
    let bool = true;

    // use a for loop
    for (let i = 1; i <= size; i++) {
        // if bool is true, we add 1 to the array. If it's false, we add 0 to the array
        if (bool) {
            arr.push(1);
            
            // negate the bool value 
            bool = !(bool);
        } else {
            arr.push(0);

            // negate bool value
            bool = !(bool);
        }
    }

    // join the array into the final string
    return arr.join("");
}


console.log(stringy(4));
