choices = ['rock', 'paper', 'scissors'];
let getComputerChoice = choices[Math.floor(Math.random()*3)]; 

function rockPaperScissors(userSelection, computerSelection){
    if (userSelection == computerSelection){
        return("Its a tie");
    } else if ((userSelection == 'rock' && computerSelection == 'paper') ||
        (userSelection == 'paper' && computerSelection == 'scissors') ||
        (userSelection == 'scissors' && computerSelection == 'rock')) {
            return(`Player Wins! ${userSelection} beats ${computerSelection}`);
    } else {
        return(`Sorry, Player Lost. ${computerSelection} beats ${userSelection}`);
    }
    
}


function game(numberRounds) {
    for (let i = 0; i < numberRounds; ++i) {
        userSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
        computerSelection = getComputerChoice;
        console.log(rockPaperScissors(userSelection, getComputerChoice));
    }
}