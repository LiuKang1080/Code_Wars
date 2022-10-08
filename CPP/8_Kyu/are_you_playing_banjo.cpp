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


#include <iostream>
#include <string>


void are_you_playing_banjo(std::string name) {
    /*
	Returns a string depending on the first character of the string provided. If the string passed into the function starts with
	the character "R" or "r", then this function will return the string [name + "plays the banjo"]. Else we will return the
	string [name + "does not play the banjo"].

	Parameters
	----------
	name [std::string] : The name of the person

	Return
	----------
	none : Print result depending on the string input 
	
	Ex)
		Parameter = "John"
		Return = "John does not play the banjo"

		Parameter = Robert
		Return = Robert plays the banjo
	*/

    if ((name.at(0) == 'r') || (name.at(0) == 'R')) {
		std::cout << name + " plays banjo \n";
	} else {
		std::cout << name + " does not play banjo \n";
	}
}


int main() {
	are_you_playing_banjo("John");
	
	return 0;
}
