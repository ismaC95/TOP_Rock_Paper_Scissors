//Make computer to choose Rock or Paper or Scissors

function getComputerChoice() {
    //Create a random number
    let pickIndex = Math.random();

    //Give ranges to the different choices so it use the random number
    let computerChoice;

    if (pickIndex < 0.33) {
        computerChoice = "rock";
    }

    else if (pickIndex < 0.66) {
        computerChoice = "paper";
    }

    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}



let playerRound = 0;

let computerRound = 0;

//Create a new function to compare user input and ComputerChoice and share who won based on RPS rules
function playRound(playerSelection, computerSelection){
    //gather user input and make it case insensitive
    playerSelection = playerSelection.toLowerCase();
    const resultRow = document.querySelector("#result");
    //selection comparison and winner logic
    if (playerSelection === computerSelection) {
        //create a new row with tie
        let drawRound = document.createElement("p");

        resultRow.appendChild(drawRound);

        drawRound.textContent = "It's a tie! " + playerSelection + " vs. " + computerSelection;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        //create a new row with win
        let winRound = document.createElement("p");

        resultRow.appendChild(winRound);

        winRound.textContent = "You win! " + playerSelection + " beats " + computerSelection;

        playerRound++;

        console.log("player round is = " + playerRound);
    }
    else {
        //create a new row with lose
        let loseRound = document.createElement("p");

        resultRow.appendChild(loseRound);

        loseRound.textContent = "You lose! " + computerSelection + " beats " + playerSelection

        computerRound++;

        console.log("computer round is " + computerRound);
    }
    checkWinner();
}

//Announce winner
function checkWinner(){
    if(playerRound == 5 || computerRound == 5){
        let winner = document.createElement("p");
        result.appendChild(winner);
        if(playerRound == 5){
            winner.textContent = `Congrats! You won ${playerRound} to ${computerRound}!`;
        }
        else{
            winner.textContent = `Better luck next time. You lost ${playerRound} to ${computerRound}!`;
        }
        document.querySelectorAll("button").forEach(button => button.disabled = true);
    }
}

//Creating UI

//Three buttons with each selection
document.addEventListener("DOMContentLoaded", () => {
const btnContainer = document.querySelector("#btnContainer");

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
btnContainer.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
btnContainer.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
btnContainer.appendChild(scissorsBtn);

//DOM from results:
let scores = document.createElement("p");

scores.textContent = "Player: " + playerRound + " rounds - Computer: " + computerRound + " rounds.";

const totalResult = document.querySelector("#result");

totalResult.appendChild(scores);

//click event in each button
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    scores.textContent = "Player: " + playerRound + " rounds - Computer: " + computerRound + " rounds.";
});
paperBtn.addEventListener("click", () =>{
    playRound("paper", getComputerChoice())
    scores.textContent = "Player: " + playerRound + " rounds - Computer: " + computerRound + " rounds.";
});
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    scores.textContent = "Player: " + playerRound + " rounds - Computer: " + computerRound + " rounds.";
});
});