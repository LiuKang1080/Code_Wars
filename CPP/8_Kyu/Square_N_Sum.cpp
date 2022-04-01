// Square n sum

/*

*/


#include <iostream>
#include <vector>


int square_sum(const std::vector<int> &numbers) {
    // iterate through the vector, on each iteration square the current element, add result to the total
    long long int total = 0;

    for (int i: numbers) {
        total += (i * i);
    }

    return total;
}


int main() {
    std::cout << square_sum({0, 3, 4, 5});

    return 0;
}
