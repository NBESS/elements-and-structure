// Rock, Paper, Scissors Game

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log("Error!")
    }
}

function getComputerChoice() {
    let num = Math.random() * 3;
    num = Math.floor(num);
    console.log(num)
    if (num === 0) {
        return 'rock'
    }
    if (num === 1) {
        return 'paper'
    }
    if (num === 2) {
        return 'scissors'
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'User Wins!'
    }
    if (userChoice === computerChoice) {
        return 'Game is a Draw!'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'User Wins!'
        } else if (computerChoice == 'paper') {
            return 'Computer Wins!'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'User Wins!'
        } else if (computerChoice == 'scissors') {
            return 'Computer Wins!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'User Wins!'
        } else if (computerChoice == 'rock') {
            return 'Computer Wins!'
        }
    }
}

function playGame(choice = 'rock') {
    let userChoice = getUserChoice(choice);
    console.log(userChoice)
    let computerChoice = getComputerChoice();
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame();