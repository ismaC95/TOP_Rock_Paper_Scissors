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

//Create a new function to compare user input and ComputerChoice and share who won based on RPS rules
function playRound(playerSelection, computerSelection){
    //gather user input and make it case insensitive
    playerSelection = playerSelection.toLowerCase();
    
    //selection comparison and winner logic
    if (playerSelection === computerSelection) {
        console.log("It's a tie! " + playerSelection + " vs. " + computerSelection);
    }

    else {
        if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
            console.log("You win! " + playerSelection + " beats " + computerSelection);
            
            return playerRound++;
        }

        else {
            console.log("You lose! " + computerSelection + " beats " + playerSelection);

            return computerRound++;
        }
    }
}

let playerRound = 0;

let computerRound = 0;

//Function to play 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        //request input from player every round
        let playerSelection = prompt("Rock, paper or scissors?");

        playRound(playerSelection, getComputerChoice());

        //counting total rounds
        console.log("Player: " + playerRound + ". Computer: " + computerRound);
    }
    //at the end of the game, message to say who was the winner and the final results
    (playerRound > computerRound) ? console.log("Congratulations, you won! The final score is: Player " + playerRound + " to Computer " + computerRound + ".") : console.log("Sorry, computer won. Better luck next time!The final score is: Player " + playerRound + " to Computer " + computerRound + ".");
}

playGame();