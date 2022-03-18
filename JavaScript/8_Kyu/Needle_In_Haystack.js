// Finding a needle in a haystack

/*
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

should return "found the needle at position 5" (in COBOL "found the needle at position 6")
*/


function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return ("found the needle at position " + i);
        }
    }
}

/*
    - We can also use one of the array methods to find the specific index of a given element:
    - We use the .indexOf() method, we pass in the specific element, and it will return the index number that element is located
        at. If the element does not exist in the array, then it will return undefined.
*/
function array_method() {
    return "found the needle at position " + haystack.indexOf("needle");
}
