// Are You Playing Banjo?

/*
Description:

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
*/


function areYouPlayingBanjo(name) {
	/*
	Returns a string depending on the first character of the string provided. If the string passed into the function starts with
	the character "R" or "r", then this function will return the string [name + "plays the banjo"]. Else we will return the
	string [name + "does not play the banjo"].

	Parameters
	----------
	name [string] : The name of the person

	Return
	----------
	[string] : Implicitly return the name + the condition string depending on the first character of the name string.
	
	Ex)
		Parameter = "John"
		Return = "John does not play the banjo"

		Parameter = Robert
		Return = Robert plays the banjo
	*/

	if (name[0].toLowerCase() === 'r') {
		return name + ' plays banjo';
	} else {
		return name + ' does not play banjo';
	}
}


console.log(areYouPlayingBanjo("John"));
