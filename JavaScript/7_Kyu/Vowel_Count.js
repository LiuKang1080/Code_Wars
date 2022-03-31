// Vowel Count

/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/


function getCount(str) {
    // declare variables
    let vowel_count = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    // loop through the string
    for (let i = 0; i < str.length; i++) {
        // check to see if the current element exists in the vowels array
        if (vowels.includes(str[i].toLowerCase())) {
            vowel_count++;
        }
    }
    
    return vowel_count;
}


console.log(getCount("Hello World!"));
