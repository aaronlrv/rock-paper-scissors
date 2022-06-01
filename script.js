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
    

    function rounds () {
            let computerSelection = computerPlay()
            let playerSelection =  playerInput.toLowerCase()
            
            rps (playerSelection, computerSelection)


        }

let rock = document.getElementsByClassName("rock")
let paper = document.getElementsByClassName("paper")
let scissors = document.getElementsByClassName("scissors")

let buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", classification)
    })


function classification (evt) {
        if(evt.target.className === "rock"){
                playerSelection = "rock"
                    console.log(playerSelection)
        } else if (evt.target.className === "paper"){
                playerSelection = "paper"
                console.log(playerSelection)
        } else {
                playerSelection = "scissors"
                console.log(playerSelection)
                }
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