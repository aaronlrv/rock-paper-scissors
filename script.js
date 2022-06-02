let game = ["rock", "paper", "scissors"]
/* Defines the button inputs and tracks the clicks */
let rock = document.getElementsByClassName("rock")
let paper = document.getElementsByClassName("paper")
let scissors = document.getElementsByClassName("scissors")

let buttons = document.querySelectorAll("button")

let playedRounds = 0 // the amount of rounds already played
buttons.forEach((button) => {
    button.addEventListener("click", (evt) => {
        console.log(evt)
        // first, check if we've already played 5 rounds
        // if so, `return` will prevent this function from continuing
        // this means that playedRounds won't increment either, although that won't matter
        // so, this basically means the button won't do anything after 5 games
        if (playedRounds >= 5) {
            document.querySelector("#results").innerHTML = "You already played 5 games, no more for you!"
            return
        }

        let playerSelection = evt.target.className

        rps(playerSelection, computerSelection());
        // ^ another way to do this would be:
        //     let computerSelection = computerPlay()
        //     rps(playerSelection, computerSelection)
        // but there's no reason to make yet another variablecalled computerSelection when we can just put it there directly

        playedRounds++ // increment playedRounds since we just played a round
        score()
    })
})

/* Randomizes computer inputs */
function computerSelection() {
    return game [Math.floor(Math.random () * game.length)]
}

let playerScore = 0
let computerScore = 0
function score() {
    if (playerSelection === computerSelection){
        computerScore = computerScore + 0
        playerScore = playerScore + 0
    }
    else if (resultTitle = "You win!"){
        playerScore = playerScore + 1
    } else {
        computerScore = computerScore + 1
    }
 console.log (computerScore)
 console.log (playerScore)   
}

/* Win & Lose conditions of RPS as well as prints results */
function rps(playerSelection, computerSelection) {
    let resultTitle;
    if (playerSelection === computerSelection) {
        resultTitle = "It's a tie!"
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        resultTitle = "You win!"
    } else {
        resultTitle = "You lose!"
    }

    let results = document.querySelector("#results")
    results.innerHTML = `
        <p>${resultTitle}</p>
        <hr>
        <p>
            player: ${playerSelection}
            <br>
            computer: ${computerSelection}
        </p>
    ` // this is a closing quote, not a typo
}


/*
buttons.addEventListener('click', classification)


function classification (rps) {
    if(button.className === "rock"){
        playerSelection === "rock"
        console.log(playerSelection)
} else if (button.className === "paper"){
        playerSelection === "paper"
        console.log(playerSelection)
} else {
        playerSelection === "scissors"
        console.log(playerSelection)
        }
    }    

rounds()

*/



    /*function rounds (){
        for (let i = 0; i < 5; i++) {
            let computerSelection = computerPlay()
            let playerInput =  window.prompt("Rock, Paper, Or Scissors?")
            let playerSelection =  playerInput.toLowerCase()
            
            rps (playerSelection, computerSelection)


        }


    }
    
rounds()*/

/*
buttons.forEach(classification)

function classification (callback) {
    buttons.onclick = function (){
        if(buttons.className === "rock"){
                playerSelection === "rock"
                    console.log(playerSelection)
        } else if (buttons.className === "paper"){
                playerSelection === "paper"
                console.log(playerSelection)
        } else {
                playerSelection === "scissors"
                console.log(playerSelection)
                }
            }
}*/

/*
buttons.forEach(buttons.onclick = () => {
    if(buttons.className === "rock"){
            playerSelection === "rock"
                console.log(playerSelection)
    } else if (buttons.className === "paper"){
            playerSelection === "paper"
            console.log(playerSelection)
    } else {
            playerSelection === "scissors"
            console.log(playerSelection)
            }
        })

*/

/*
let computerSelection = computerPlay()
let playerInput =  window.prompt("Rock, Paper, Or Scissors?")
let playerSelection =  playerInput.toLowerCase()
console.log (playerSelection)
*/