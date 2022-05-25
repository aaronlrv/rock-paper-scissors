let game = ["rock", "paper", "scissors"]



function computerPlay () {
    return game [Math.floor(Math.random () * game.length)]
}

console.log (computerPlay())

let computerSelection = computerPlay()
let playerSelection =  window.prompt("Rock, Paper, Or Scissors?")

console.log (playerSelection)

function rps (playerSelection, computerSelection){

    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log ("You Lose!");
    }
        else {
        console.log ("You Win!")
        }

    if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log ("You Lose!");
    }
        else {
        console.log ("You Win!")
        }


    if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log ("You Lose!");
    }
        else {
        console.log ("You Win!")
        }
    }

    rps (playerSelection, computerSelection)

