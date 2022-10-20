# Convert a string into a list

"""
Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
"""


def string_to_array(str):
    """
    Function that converts the input string into an list, and returns it. We will use the built-in split() method.

    Parameters
    ----------
    str [string] : The name provided in the form of a string.

    Return
    ----------
    [list] : Return the converted string in the form of a list. List contains elements that are strings.
    """

    # we will use the built-in .split() method, the delimiter is " " (space)
    return str.split(" ")


print(string_to_array("I love arrays they are my favorite"))
