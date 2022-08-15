# Lost Without a Map

"""
Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
"""


def maps(arr):
    """
    Loop through the given list, double each element and return new the list.

    Parameters
    ----------
    a [List ] : The provided list of elements

    Return
    ----------
    double_list [list] : Explicitly return the list that contains elements that are double in value compared to the provided 
    list.
    """

    double_list = []

    # loop through the list that is provided
    for ele in arr:
        double_list.append(ele * 2)

    return double_list


def maps_inplace(arr):
    """
    Loop through the provided array, double each of the elements, and explicitly return that array.
    This method is more efficent, since we are not creating another list to store the new elements, we are changing the elements
    in place.
    """
    for i in range(len(arr)):
        arr[i] = arr[i] * 2

    return arr


def maps_single_line(arr):
    """
    A single line return, that does element double in place using lambda.
    """
    return [2*i for i in arr]


print(maps([1, 2, 3]))
print(maps_inplace([1, 2, 3]))
