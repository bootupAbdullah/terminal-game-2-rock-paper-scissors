//variables===========================================================

// const inputBar = document.getElementById(`input`) // todo
// const submitBtn = document.getElementById(`submit-button`) //todo


// let userinput
let computerinput



// cached referance================================================================


//computer Random logic
function computerMath() {
    // 1. is rock
    //2. is scissors
    //3. paper
    let computerResult = (Math.floor(Math.random() * 3) + 1);
    if (computerResult === 1) {
        console.log(`Rock`)
    }
    else if (computerResult === 2) {
        console.log(`Scissors`)
    }   
    else if (computerResult === 3) {
        console.log(`Paper`)
    }

}

function userChoice() {
    //user chooses rock,paper or scissors

}


function evaluateGame() {
    //todo
    let playerChoice
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




// function computerChoice(computerMath) {
    
// }



// console.log(computerMath());
computerMath()
// console.log();


// function startGame() {
//     const userChoice = inputBar.value//could be buttons
//     if (userChoice === `Rock`) {
//         if
//     }
// } 

//functions=============================================================

//dom manipulation ========================================================


