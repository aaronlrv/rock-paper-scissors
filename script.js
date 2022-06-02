let game = ["rock", "paper", "scissors"]
/* Defines the button inputs and tracks the clicks */
let rock = document.getElementsByClassName("rock")
let paper = document.getElementsByClassName("paper")
let scissors = document.getElementsByClassName("scissors")

let buttons = document.querySelectorAll("button")

let playerSelection = buttons.forEach(button => {
    button.addEventListener("click", classification)
    })


    function classification(evt){
        console.log(evt.target.className)
        return evt.target.className
    }
    

/* Randomizes computer inputs */
function computerPlay () {
    return game [Math.floor(Math.random () * game.length)]
}
let computerSelection = computerPlay()

/* Win & Lose conditions of RPS as well as prints results */
    function rps(playerSelection, computerSelection) {
        let results = document.getElementsByClassName("results")
        results.innerHTML = `player: ${playerSelection}`
        results.innerHTML = `computer: ${computerPlay}`


        if (playerSelection === computerSelection){
            results.innerHTML = "It's a tie!"
        }

        else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            results.innerHTML = "You win!"
        } else {
            results.innerHTML = "You Lose!"
        }
    }
    

/* Determines the amount of rounds played */            
function rounds (){
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay()
        let playerInput =  playerSelection
            
        rps (playerSelection, computerSelection)


        }


    }

rounds(5)


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