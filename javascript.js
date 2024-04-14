//Make computer to choose Rock or Paper or Scissors

function getComputerChoice() {
    //Create a random number
    let pickIndex = Math.random();
    console.log(pickIndex);

    //Give ranges to the different choices so it use the random number
    let computerChoice;

    if (pickIndex < 0.33) {
        computerChoice = "Rock";
    }

    else if (pickIndex < 0.66) {
        computerChoice = "Paper";
    }

    else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    
}

getComputerChoice();