// Counting Sheep

/*
If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
Input will always be valid, i.e. no negative integers.
*/


function counting_sheep(num) {
    let str = "";

    // loop until num, concat on each iteration, return the final string
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`;
    }

    return str;
}
