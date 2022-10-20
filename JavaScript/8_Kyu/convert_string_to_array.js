// Convert a string into an array

/*
Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/


function stringToArray(string) {
	/*
	Function that converts the input string into an list, and returns it. We will use the built-in split() method.

    Parameters
    ----------
    string [string] : The sentence provided.

    Return
    ----------
    arr [array] : Return the converted string in the form of a array. Array contains elements that are strings.
	*/
	
	// We will use the .split() method, the delimiter for the splitting is " " (space)
	let arr = string.split(" ");

	return arr;

	// single line implicit return of the array
	// return string.split(" ");
}
