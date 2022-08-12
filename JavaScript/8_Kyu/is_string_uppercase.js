// Is the string upper case?

/*
Is the string uppercase?
Task: Create a method to see whether the string is ALL CAPS.

Examples (input -> output):

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no 
letters at all is trivially considered to be in ALL CAPS.
*/


function is_uppercase(str) {
    /*
    Returns True or False depending on if the string provided is completely upper case or not.
    Convert str fully into uppercase and store result into new variable called upper_str.
    If upper_str is equal to string, then we return true, else we will return false. [Explicit variable comparison]

    Compare | if str == str.to_upper_case() return true, else return false

    Parameters
    ----------
    str [string] : The complete string entered.

    Return
    ----------
    true / false [boolean] : Explicitly return true or false
    */

    if (string === string.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}


// extension of the String prototype object:
String.prototype.isUpperCase = function() {
    return (this === this.toUpperCase());
}
