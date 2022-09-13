# Find the area of a square given an a quarter circle that fits perfectly within the square.

"""
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
Return the result rounded to two decimals.
"""


import math


def degree_converter(degrees):
    """
    Convert from degrees to radians.
    This is given by the general formula:
        radians = (degree * pi) / 180

    Parameters
    ----------
    degrees [int | float] : The degrees of the angle of the arc. In this example the degrees is 90.

    Return
    ----------
    radians [int | float] : Returns the radians implcitly, no radians variable is created in this function. We can also return the result of
        the calculation for 90 degrees, rather than computing it.
    """

    if (degrees == 90):
        # pre-computed result of the conversion of 90 degrees into radians
        return 1.5707963267948966
    else:
        return (degrees * math.pi) / 180

def square_area(arc_length):
    """
    We are given the arc length. The quarter circle fits perfectly within the square. This function first finds the radius of the
    quarter circle, and then finds the area of the square. It will use the general formula for arc length: S = r * theta
        S: The arc length
        r: Radius of the circle
        theta: Angle given in degrees
    
    For this problem our angle is 90 degrees. We solve for radius, and then square the radius to find the area of the square.

    Parameters
    ----------
    arc_length [int | float] : The arc length of the quarter circle.

    Return
    ----------
    area [int | float] : Returns the area of the square implicitly.
    """

    # declare variables
    radians = degree_converter(90)
    radius = arc_length / radians

    return radius * radius


print(square_area(17))
