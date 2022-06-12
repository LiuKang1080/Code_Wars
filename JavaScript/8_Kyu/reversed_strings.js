// Reversed Strings

/*
Complete the solution so that it reverses the string passed into it.

'world' => 'dlrow'
'word'  => 'drow'
*/


function solution(str) {
    /*
    Takes the input string, and then returns the string reversed.
        - We will use the built-in functions .split(), .reverse(), and .join() to perform this algorithm.

    Parameters
    ----------
    str[string] : The string that is passed in, that will be reversed.
    
    Return
    ----------
    [string] : Implicitly return the reversed string. 
    */

    return str.split("").reverse().join("");
}


console.log(solution("world"));
