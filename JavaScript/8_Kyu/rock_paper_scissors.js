// Rock, Paper, Scissors

/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/


function rps(p1, p2) {
    // We can use standard if-else-if statements to determine which player won
	if (
		((p1 === "rock") && (p2 === "scissors")) ||
		((p1 === "paper") && (p2 === "rock")) ||
		((p1 === "scissors") && (p2 === "paper"))) {
        
        // Player 1 wins
		return "Player 1 won!";
	} else if (p1 === p2) {
		// Player 1 and 2 both draw
        return "Draw!";
	} else {
        // Player 1 loses, player 2 wins
		return "Player 2 won!";
	}
}


console.log(rps('scissors','paper'));
console.log(rps('scissors','rock'));
console.log(rps('paper','paper'));
