// Square n sum

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/


#include <iostream>
#include <vector>


int square_sum(const std::vector<int> &numbers) {
    /*
	Loop through a given array, on each iteration square the current element, and add it to the total. Return the total.

	Parameters
	----------
	numbers [const std::vector<int>] : The array. Pass by reference array.

	Return
	----------
	total [long long int] : Explicity return the total. 
	
	Ex)
		Parameter = [0, 3, 4, 5]
		Return = 50
	*/

    // declare variables
    long long int total = 0;

    // iterate through the vector, on each iteration square the current element, add result to the total
    for (long long int i : numbers) {
        total += (i * i);
    }

    return total;
}


int main() {
    std::cout << square_sum({ 0, 3, 4, 5 }) << "\n";

    return 0;
}
