
// /*********** function to generate random dice rolls ***************/
// rollDice() {

  
// }


// /*********** function to calculate the result, determine winner, and update the score ***************/
// calculateScore() {

// }



// /*********** function to display the current roll and scores ***************/
// displayResults() {

// }

let playerScore = 0;
let computerScore = 0;

// Function to roll dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to handle each round of the game
function playRound() {
    const playerRoll1 = rollDice();
    const playerRoll2 = rollDice();
    const computerRoll1 = rollDice();
    const computerRoll2 = rollDice();
    
    const playerTotal = playerRoll1 + playerRoll2;
    const computerTotal = computerRoll1 + computerRoll2;

    // Determine result
    let result = 0;
    if (playerTotal > computerTotal) {
        result = "Player wins!";
        playerScore++;
    } else if (playerTotal < computerTotal) {
        result = "Computer wins!";
        computerScore++;
    } else {
        result = "It's a draw!";
    }

    displayResults(playerTotal, computerTotal, result);
}

// Function to display results
function displayResults(playerTotal, computerTotal, result) {
    document.getElementById("playerRoll").innerText = `Player Roll: ${playerTotal}`;
    document.getElementById("computerRoll").innerText = `Computer Roll: ${computerTotal}`;
    document.getElementById("gameResult").innerText = result;
    document.getElementById("playerScore").innerText = `Player Score: ${playerScore}`;
    document.getElementById("computerScore").innerText = `Computer Score: ${computerScore}`;
}

// Event listener for the roll button
document.getElementById("rollButton").addEventListener("click", playRound);

