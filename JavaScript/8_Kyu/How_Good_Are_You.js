// How good are you really?

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the
given array!
*/


function betterThanAverage(classPoints, yourPoints) {
    /*
        - classPoints is an array that contains all of the scores except your score. We create the average, and then compare it
            to yourPoints.
    */

    // declare variables
    let sum = 0;
    let average = 0;

    // loop through the array, and sum all of the classPoints
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }

    average = (sum / classPoints.length);

    // check to see if yourPoints is greater than classPoints
    if (yourPoints > average) {
        return true;
    } else {
        return false;
    }
}


console.log(betterThanAverage([2, 3], 5));
