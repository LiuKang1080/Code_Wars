// I Love You - Flower Petal Game

/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the 
following phrases each time a petal was torn:

    - I love you
    - a little
    - a lot
    - passionately
    - madly
    - not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals,
where nb_petals > 0.
*/

function howMuchILoveYou(nbPetals) {
    // declare variables
    // we will use a counter, we know the number of phrases
    counter = 0;
    arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    
    // use a while loop until the number of petals reaches 0
    while (nbPetals > 0) {
        // if the counter is greater than 6, reset the counter back to 1
        if (counter > 5) {
            counter = 0;
        }

        // increment the counter
        counter++;

        // reduce the number of petals
        nbPetals--;
    }

    // return the proper phrase using the counter as the index
    return arr[counter - 1];
}


console.log(howMuchILoveYou(3));
