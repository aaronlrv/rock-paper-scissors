
let game = ["rock", "paper", "scissors"]
/* Defines the button inputs and tracks the clicks */
let rock = document.getElementsByClassName("rock")
let paper = document.getElementsByClassName("paper")
let scissors = document.getElementsByClassName("scissors")

let buttons = document.querySelectorAll("button")
console.log(buttons)


buttons.forEach((button) => {
    button.addEventListener("click", (evt) => {
        console.log("button:", button)
        console.log(evt)

        if (playerScore >= 5 || computerScore >= 5){
            return
        }    

        // first, check if we've already played 5 rounds
        // if so, `return` will prevent this function from continuing
        // this means that playedRounds won't increment either, although that won't matter
        // so, this basically means the button won't do anything after 5 games
        let playerSelection = evt.target.parentNode.className

        rps(playerSelection, computerSelection());

        if (playerScore === 5) {
            document.querySelector("#results").innerHTML = "Player won"
            return
        } else if (computerScore === 5){
            document.querySelector("#results").innerHTML = "Computer won!"
            return
        }

    })
})

/* Randomizes computer inputs */
function computerSelection() {
    return game [Math.floor(Math.random () * game.length)]
}

let playerScore = 0
let computerScore = 0
/* Win & Lose conditions of RPS as well as prints results */
function rps(playerSelection, computerSelection) {
    let resultTitle;

    if (playerSelection === computerSelection) {
        resultTitle = "It's a tie!"

    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        resultTitle = "You win!"
        playerScore = playerScore + 1
        console.log(playerScore)

    } else {
        resultTitle = "You lose!"
        computerScore = computerScore + 1
        console.log (computerScore)
    }

    let results = document.querySelector("#results")
    results.innerHTML = `
    
    <div class = "results">
        <h4 class="result-title">${resultTitle}</h3>
    </div>

    <div class = "selections">

        <div class = "player-selection">
         Player : ${playerSelection} 
        </div>
        <div class = "computer-selection">
         Computer : ${computerSelection}
        </div>

    </div>
    `

    
    let score = document.querySelector("#score")
    score.innerHTML = `
    <div class = "player-score">
    Player: ${playerScore}
    </div>

    <div class = "computer-score">
    Computer: ${computerScore}
    </div>
    `

}

/*
    let playerDisplay = document.querySelector("#player-score")
    playerDisplay.innerHTML = `
    <h4>
    player: ${playerScore}
    </h4>
    `

    let computerDisplay = document.querySelector("#computer-score")
    computerDisplay.innerHTML= `
    <h4>
    computer: ${computerScore}
    </h4>

    `
    */ 


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
console.log (playerSelection) */