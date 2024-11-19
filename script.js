let playerRoll1 = 0;
let playerRoll2 = 0;
let computerRoll1 = 0;
let computerRoll2 = 0;

let playerScore = 0;
let computerScore = 0;

let playerTotal = 0;
let computerTotal = 0;

// /*********** function to generate random dice rolls ***************/
function rollDice() {
    playerRoll1 = getRoll();
    playerRoll2 = getRoll();
    computerRoll1 = getRoll();
    computerRoll2 = getRoll();
    return (playerRoll1, playerRoll2, computerRoll1, computerRoll2);
}
function getRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

// /*********** function to calculate the result, determine winner, and update the score ***************/
function calculateScore(playerRoll1, playerRoll2, computerRoll1, computerRoll2) {
    playerTotal = playerRoll1 + playerRoll2;
    computerTotal = computerRoll1 + computerRoll2;
    return (playerTotal, computerTotal);
}



// /*********** function to display the current roll and scores ***************/
function displayResults(playerTotal, computerTotal, result) {
    document.getElementById("playerRoll").innerText = `Player Roll: ${playerTotal}`;
    document.getElementById("computerRoll").innerText = `Computer Roll: ${computerTotal}`;
    document.getElementById("gameResult").innerText = result;
    document.getElementById("playerScore").innerText = `Player Score: ${playerScore}`;
    document.getElementById("computerScore").innerText = `Computer Score: ${computerScore}`;
}






// Function to handle each round of the game
function playRound() {
    rollDice()
    
    
    // const playerTotal = playerRoll1 + playerRoll2;
    // const computerTotal = computerRoll1 + computerRoll2;

    calculateScore(playerRoll1, playerRoll2, computerRoll1, computerRoll2);
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

// Event listener for the roll button
document.getElementById("rollButton").addEventListener("click", playRound);

