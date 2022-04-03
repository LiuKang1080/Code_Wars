// Will you make it?

/*
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out
and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons
left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should 
return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are
always positive.
*/


function zeroFuel(distanceToPump, mpg, fuelLeft) {
    /*
        - We have the general ratio formula:
            miles/gallon = x / (number of gallons left)
            
            Solve for x:
            x = ((miles) * (number of gallons left)) / gallon
        
        - If x is greater than distanceToPump, that means we will make it to the pump, return true
        - Else we cannot make it, return false
    */

    // declare variables, and solve for x
    let x = (mpg * fuelLeft);

    // check to see if x is greater than or equal to distanceToPump, return the correct boolean
    if (x >= distanceToPump) {
        return true;
    } else {
        return false;
    }
}


/*
    - We can also shorten this code block:
    - Code readability and documentation matters!

        return (mpg * fuelLeft) >= distanceToPump
*/


console.log(zeroFuel(50, 25, 2));
