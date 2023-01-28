// Oob-ify Your Name!

/*
Oob-ify your name:
    - Replace all instances of "a, e, i , o, and u" with "oob"
*/


function oob(name) {
    /*
    Function that takes in the name provided, and returns the name with all instances of a, e, i, o, and u with "oob".
    The function also capitalizes the first letter of the name. Spaces within the name are preserved.
    The algorithm is as follows:
        - Take in the name as a parameter.
        - Convert the entire string into lower case by using the built in toLowerCase() method.
        - Split the name into an array using the built-in split() function.
        - Loop through the array.
        - At each instance of "a, e, i, o, or u" replace that element at that index with "oob".
        - Capitalize the first element in the array. If it is oob, then replace that first element with "Oob".
        - Convert the array into a string by using the built-in join() method.
        - Return the final string.
    
    Parameters
    ----------
    name[string] : The name provided in the form of a string.

    Return
    ----------
    [string] : Return the name.
    */

    // declare variables
    // convert the name into lowercase and split the string into an array
    let arr = name.toLowerCase().split("");

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === "a") ||
            (arr[i] === "e") ||
            (arr[i] === "i") ||
            (arr[i] === "o") ||
            (arr[i] === "u")) {

            // replace the vowel wih "oob"
            arr[i] = "oob";
        }
    }

    // check the first index of the array, and capitalize the element
    if (arr[0] === "oob") {
        arr[0] = "Oob";
    } else {
        arr[0] = arr[0].toUpperCase();
    }

    // use for loop to find spaces, and capitalize the next element after the space
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            if (arr[i + 1] === "oob") {
                arr[i + 1] = "Oob";
            } else {
                arr[i + 1] = arr[i + 1].toUpperCase();
            }
        }
    }
    
    // convert the array back into a string, and return the string
    return arr.join("");
}


console.log(oob("John Dude"));
