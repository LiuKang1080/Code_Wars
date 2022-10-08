// Calculate BMI

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/


function bmi(weight, height) {
	/*
	Function that calculates BMI and returns the catageory as a string

    Parameters:
    ----------
    weight [float] : The weight of the person, generally given in pounds.

    height [float] : The height of the person, generally given in the form Xft-Yin, but converted into inches.

    Return:
    ----------
    [string] : Returns the category based on the BMI.
	*/
	
	let bmi = (weight / (height * height));
	
	if (bmi <= 18.5) {
		return "Underweight";
	} else if (bmi <= 25.0) {
		return "Normal";
	} else if (bmi <= 30.0) {
		return "Overweight";
	} else {
		return "Obese";
	}
}
