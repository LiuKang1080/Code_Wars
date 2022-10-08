# Are you playing the banjo?

"""
Description:
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
"""


def are_you_playing_banjo(name):
    """
    Function that checks the first letter of a name provided. Returns a string depending on the letter. If the letter starts
    with "r" we return [name + "plays banjo"], if the name doesn't not start with "r" we instead return 
    [name + "does not play banjo]. 

    Parameters
    ----------
    name[string] : The name provided in the form of a string.

    Return
    ----------
    [string] : Return the name and the result of the condition in the form of a string. 
    """
    
    if (name[0].lower() == "r"):
        return name + " plays banjo"
    else:
        return name + " does not play banjo"


print(are_you_playing_banjo("John"))
