let playerRoll1 = 0;
let playerRoll2 = 0;
let computerRoll1 = 0;
let computerRoll2 = 0;
let playerTotal = 0;
let computerTotal = 0;
let playerScore = 0;
let computerScore = 0;

document.getElementById('rollButton').addEventListener('click', rollDice);

/*********** function to generate random dice rolls ***************/
function rollDice() {
  playerRoll1 = Math.floor(Math.random() * 6) + 1;
  playerRoll2 = Math.floor(Math.random() * 6) + 1;
  computerRoll1 = Math.floor(Math.random() * 6) + 1;
  computerRoll2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById('playerDice').innerHTML = `Player rolled a ${playerRoll1} and a ${playerRoll2}`;
  document.getElementById('computerDice').innerHTML = `Computer rolled a ${computerRoll1} and a ${computerRoll2}`;
  calculateScore();
}
/*********** function to calculate the result, determine winner, and update the score ***************/
function calculateScore() {
    playerTotal = playerRoll1 + playerRoll2;
    computerTotal = computerRoll1 + computerRoll2;
    document.getElementById('playerRoll').innerHTML = `Player roll: ${playerTotal}`;
    document.getElementById('computerRoll').innerHTML = `Computer rol: ${computerTotal}`;
    displayResults();
}
/*********** function to display the current roll and scores ***************/
function displayResults() {
    if (playerTotal > computerTotal) {
        document.getElementById('gameResult').innerHTML = "Player Wins!!!"
        playerScore += 1;
    } else if (playerTotal < computerTotal) {
        document.getElementById('gameResult').innerHTML = "Computer Wins!!!"
        computerScore += 1;
    } else {
        document.getElementById('gameResult').innerHTML = "It's a Tie!!!"
    }
    document.getElementById("playerScore").innerHTML = `Player score: ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `Computer score: ${computerScore}`;

}


