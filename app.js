const prompt = require('prompt-sync')();

//variables===========================================================


// const inputBar = document.getElementById(`input`) // todo
// const submitBtn = document.getElementById(`submit-button`) //todo

// let userinput
let computerinput//defined for 
let computerChoice = computerMath()
let userPick = userChoice()


// cached referance================================================================


//computer Random logic
function computerMath() {///random logic to choose rock paper or scissors
    // 1. is rock
    //2. is scissors
    //3. paper
    let computerResult = (Math.floor(Math.random() * 3) + 1);
    if (computerResult === 1) {
        return `Rock`
    }
    else if (computerResult === 2) {
        return `Scissors`
    }   
    else if (computerResult === 3) {
        return `Paper`
    }
    
}




function userChoice() { /////prompt user for input, and pass that input later into the evaluate function
    //user chooses rock,paper or scissors
    userPick = prompt(`Rock Paper Scissors   `)
    
}


function evaluateGame(userChoice, computerChoice) {  /// need to define each win /lose ending with logging or some other method
    // we need to be able to see who wins and looses, and all of it should be logged
    //to finish
    let playerChoice = userChoice
    let compChoice
    
    if (playerChoice === `Rock` && compChoice === `Scissors`) {
        //Player wins
    }
    else if (playerChoice === `Rock` && compChoice === `Paper`) {
        //Player looses
    }
    else if (playerChoice === `Rock` && compChoice === `Rock`) {
        //Player Ties
    }
    else if (playerChoice === `Scissors` && compChoice === `Paper`) {
        //Player wins
    }
    else if (playerChoice === `Scissors` && compChoice === `Rock`) {
        //Player looses
    }
    else if (playerChoice === `Scissors` && compChoice === `Scissors`) {
        //Player Ties
    }
    else if (playerChoice === `Paper` && compChoice === `Scissors`) {
        //Player Looses
    }
    else if (playerChoice === `Paper` && compChoice === `Rock`) {
        //Player wins
    }
    else if (playerChoice === `Paper` && compChoice === `Paper`) {
        //Player Ties
    }
    
}

console.log(computerChoice);
evaluateGame(userChoice(), computerMath())
// computerChoice = `Rock` 
// console.log(`Rock`)
// console.log(`Scissors`)
// console.log(`Paper`)
// return computerResult

// computerMath()
// console.log(computerResult);
// function computerChoice(computerMath) {
    
// }



// console.log(computerMath());
// computerMath()
// console.log();


// function startGame() {
    //     const userChoice = inputBar.value//could be buttons
    //     if (userChoice === `Rock`) {
        //         if
        //     }
        // } 
        
        //functions=============================================================
        
        //dom manipulation ========================================================
        

