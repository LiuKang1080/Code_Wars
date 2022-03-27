// Remove the First and Last Letter from a string

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're 
given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/


function removeChar(str) {
	// remove the first and last char from the string
	str = str.slice(1, -1);
	// slice starts from index 1 and ends before the last index.
	// negative index counts backwards of the string, just like in python.
	// -1 index is equivalent to str.length - 1 in the slice method.

	return str;
}
