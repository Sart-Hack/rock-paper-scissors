function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)]; 
}

function playRound(userSelection, computerSelection){
    if (userSelection == computerSelection){
        return [("Its a tie"), 0, 0];
    } else if ((userSelection == 'rock' && computerSelection == 'paper') ||
        (userSelection == 'paper' && computerSelection == 'scissors') ||
        (userSelection == 'scissors' && computerSelection == 'rock')) {
            return[(`Player Wins! ${userSelection} beats ${computerSelection}`), 1, 0];
    } else {
        return[(`Sorry, Player Lost. ${computerSelection} beats ${userSelection}`), 0, 1];
    }
    
}

let playerScore = 0;
let compScore = 0;


const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')


const result = document.querySelector('.result')
const score = document.querySelector('.score')
const finalResult = document.querySelector(".final-result")


let playRoundExecute = function(e) {
    playRoundOutput = playRound(this.classList[0], getComputerChoice())
    result.textContent = playRoundOutput[0];
    playerScore += playRoundOutput[1];
    compScore += playRoundOutput[2];
    if (playerScore == 5){
        finalResult.textContent = "Player Wins"
        this.removeEventListener("click", playRoundExecute)
    }
    if (compScore == 5){
        finalResult.textContent = "Game over :(, You lose"
        this.removeEventListener("click", playRoundExecute)
    }
    score.textContent = `Player Score: ${playerScore} \n
                         Computer Score: ${compScore}`

}

rockBtn.addEventListener("click", playRoundExecute)
paperBtn.addEventListener("click", playRoundExecute)
scissorsBtn.addEventListener("click", playRoundExecute)




