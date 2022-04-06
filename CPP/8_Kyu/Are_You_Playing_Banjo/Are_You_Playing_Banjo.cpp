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


std::string are_you_playing_banjo(const std::string &name) {
	// convert first character into lower case
	const char first_char = std::tolower(name[0]);
	
	// check to see if the first character is r, if it is, return "name plays banjo"
	if (first_char == 'r') {
		return name + " plays banjo";
	} else {
		return name + " does not play banjo";
	}
}


int main() {
	std::cout << are_you_playing_banjo("John") << "\n";

	return 0;
}
