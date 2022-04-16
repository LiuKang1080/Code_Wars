# Square or square root of an array / list

"""
To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number.

[4, 3, 9, 7, 2, 1] --> [2, 9, 3, 49, 4, 1]

The input array will always contain only positive numbers and will never be empty or null.
The input array should not be modified!
"""


import math


def square_or_square_root(array):
    """
    Generate new array / list depending on the values of a list provided. If the element's square root is a whole number, we add
    that number to the new array. If the element's square root is not a whole number we instead square the element and add it to
    the new array.

    Parameters
    ----------
    array : The original array provided, to check if the elements' square root are whole numbers

    Return
    ----------
    square_sqrt_array : all of the elements in this new array are either the square root or the square of the elements from
    the original array.
    """

    # declare variables
    square_sqrt_array = []

    # loop throug the original array
    for element in array:
        # check to see if the element's square root is a whole number, this done by checking to see if the modulo of the element
        # by 1 == 0.
        if (math.sqrt(element) % 1 == 0):
            square_sqrt_array.append(math.sqrt(element))
        else:
            square_sqrt_array.append(element * element)

    return square_sqrt_array


print(square_or_square_root([4, 3, 9, 7, 2, 1]))
