# Calculate BMI

"""
Write a function that calculates BMI (Body Mass Index). (BMI = weight / (height * height))

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
"""


def calculate_bmi(weight, height):
    """
    Function that calculates BMI and returns the catageory as a string

    Parameters:
    ----------
    weight [float] : The weight of the person, generally given in pounds.

    height [float] : The height of the person, generally given in the form Xft-Yin, but converted into inches.

    Return:
    ----------
    [string] : Returns the category based on the BMI.
    """

    # calculate BMI
    bmi = (weight / (height * height))

    # get the proper category and return the proper string
    if bmi <= 18.5:
        return "Underweight"
    elif bmi <= 25.0:
        return "Normal"
    elif bmi <= 30.0:
        return "Overweight"
    else:
        return "Obese"

