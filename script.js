let game = ["rock", "paper", "scissors"]



function computerPlay () {
    return game [Math.floor(Math.random () * game.length)]
}



let computerSelection = computerPlay()
let playerInput =  window.prompt("Rock, Paper, Or Scissors?")
let playerSelection =  playerInput.toLowerCase()
console.log (playerSelection)

    function rps(playerSelection, computerSelection) {
        console.log("player: " + playerSelection);
        console.log("computer: " + computerSelection);

        if (playerSelection === computerSelection){
            console.log ("It's a Tie!")
        }

        else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    }
    
    function rounds (){
        for (let i = 0; i < 5; i++) {
            let computerSelection = computerPlay()
            let playerInput =  window.prompt("Rock, Paper, Or Scissors?")
            let playerSelection =  playerInput.toLowerCase()
            
            rps (playerSelection, computerSelection)


        }


    }

rounds()