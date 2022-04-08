// Find the Area of a square given an a quarter circle that fits perfectly within the square.

/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
Return the result rounded to two decimals.
*/


function degree_converter(degrees) {
    /*
        - Convert from degrees into radians
        - Given by the general formula:
            radians = (degrees * pi) / 180 
    */

    return (degrees * Math.PI) / 180;
}

function squareArea(A){
    /*
        - We are given the arc length.
        - The quarter circle fits perfectly within the square. We need to find the radius of the quarter circle.
        - We can use the general formula for arc lengths: S = r * (theta)
            - S is the arc length
            - r is the radius of the circle
            - theta is the angle given in degrees

        - Here theta is 90 degrees, we need to convert this into radians. We will use the degree_converter() function.
        - solve for r
            r = S / theta [in radians]
    */

    // declare variables
    let radians = degree_converter(90);
    let radius = A / radians;
    let result = radius * radius;

    return Math.round(result * 100) / 100;
}
