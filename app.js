// const prompt = require('prompt-sync')();

//variables===========================================================


// const inputBar = document.getElementById(`input`) // todo
// const submitBtn = document.getElementById(`submit-button`) //todo
const creditsButtonElement = document.getElementById(`creditsButton`)
const ulElement = document.querySelector(`ul`)
const startGameButton = document.getElementById(`startGameButton`)
const divMainMenu = document.getElementsByClassName(`menu`)
const bodyElement = document.querySelector(`body`)
const htmlElement = document.querySelector(`html`)
const userDecisionButtons = document.querySelectorAll('.userDecisionButton')
const winningDeclaration = document.createElement('h1')
const playerAndComputerChoice = document.createElement('h2')
console.dir(bodyElement)
console.dir(divMainMenu)
console.dir(startGameButton)
console.dir(ulElement)
console.dir(creditsButtonElement)
// let userinput
let computerinput//defined for 
let computerChoice = computerMath()
//// let resultOfUserChoice = userChoice()


// cached referance================================================================


//main menu
//start game
//Credits
//quit game function maybe close the Browser?

//link player choice to rock button






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



// created userDecision class in order to feed inner text from button to usechoice 
// to provide decision for the // //userchoice function

// // function userChoice() { /////prompt user for input, and pass that input later into the evaluate function
//     //user chooses rock,paper or scissors
//     document.getElementById(`creditsButton`).addEventListener('click', () => {
//         userPick.textContent = 'Rock'
    // userPick = prompt(`Rock Paper Scissors   `)
    
// })
// }


function evaluateGame(userChoice, computerChoice) {  /// need to define each win /lose ending with logging or some other method
    // we need to be able to see who wins and looses, and all of it should be logged
    //to finish
    console.log('evalGameTest')
    let playerChoice = userChoice
    let compChoice = computerChoice
  
    
    if (playerChoice === `Rock` && compChoice === `Scissors`) {
        //Player wins
        console.log('user chose rock')
        console.log('computer chose scissors')

        // const winningDeclaration = document.createElement('h1')
        // bodyElement.appendChild(winningDeclaration)
        winningDeclaration.innerHTML = 'YOU FUCKIN WON!'
        playerAndComputerChoice.innerHTML = `You chose ${playerChoice}, Computer chose ${compChoice}`
    }
    else if (playerChoice === `Rock` && compChoice === `Paper`) {
        // console.log('Player looses')

        console.log('user chose rock')
        console.log('computer chose paper')
    }
    else if (playerChoice === `Rock` && compChoice === `Rock`) {
        //Player Ties
        console.log('user chose rock')
        console.log('computer chose Rock')
    }
    else if (playerChoice === `Scissors` && compChoice === `Paper`) {
        //Player wins
        console.log('user chose scissors')
        console.log('computer chose paper')

        // const winningDeclaration = document.createElement('h1')
        // bodyElement.appendChild(winningDeclaration)
        winningDeclaration.innerHTML = 'YOU FUCKIN WON!'
        playerAndComputerChoice.innerHTML = `You chose ${playerChoice}, Computer chose ${compChoice}`
    }
    else if (playerChoice === `Scissors` && compChoice === `Rock`) {
        //Player looses
        console.log('user chose scissors')
        console.log('computer chose rock')
    }
    else if (playerChoice === `Scissors` && compChoice === `Scissors`) {
        //Player Ties
        console.log('user chose scissors')
        console.log('computer chose scissors')
    }
    else if (playerChoice === `Paper` && compChoice === `Scissors`) {
        //Player Looses
        console.log('user chose paper')
        console.log('computer chose scissors')
    }
    else if (playerChoice === `Paper` && compChoice === `Rock`) {
        //Player wins
       
        console.log('user chose paper')
        console.log('computer chose rock')

        // const winningDeclaration = document.createElement('h1')
        // newBodyElement.appendChild(winningDeclaration)
        winningDeclaration.innerHTML = 'YOU FUCKIN WON!'
        playerAndComputerChoice.innerHTML = `You chose ${playerChoice}, Computer chose ${compChoice}`
    }
    else if (playerChoice === `Paper` && compChoice === `Paper`) {
        //Player Ties
        console.log('user chose paper')
        console.log('computer chose paper')
    }
    
}

// function playerWins () {
//     const winningDeclaration = document.createElement('h1')
//     winningDeclaration.innerText('YOU FUCKIN WON!')
//     newbodyElement.appendChild(winningDeclaration)
// }
//make a function for player win and player loss
//make outside of function and then call computer wins function
//will display 

// add class to buttons for event listener
//add event listener to class GameButton adding the innerText to the evaluateGame function



function startGame () {
    console.log(`test`)
    const newBodyElement = document.createElement(`body`)
    const rockButton = document.createElement(`button`)
    const paperButton = document.createElement(`button`)
    const scissorsButton = document.createElement(`button`)
    
    rockButton.innerText = `Rock`
    paperButton.innerText = `Paper`
    scissorsButton.innerText = `Scissors`
    htmlElement.appendChild(newBodyElement);
    newBodyElement.appendChild(rockButton);
    newBodyElement.appendChild(paperButton);
    newBodyElement.appendChild(scissorsButton);
    newBodyElement.appendChild(winningDeclaration)
    newBodyElement.appendChild(playerAndComputerChoice)
    console.dir(winningDeclaration)
    rockButton.setAttribute('class', 'userDecisionButton')
    paperButton.setAttribute('class', 'userDecisionButton')
    scissorsButton.setAttribute('class', 'userDecisionButton')

    // const rockButtonTest = document.getElementsByClassName('userDecisionButton')
    rockButton.addEventListener('click', () => {
    const rockChoice = 'Rock'
    console.log('testRock')
    evaluateGame(rockChoice, computerMath())
})
    paperButton.addEventListener('click', () => {
        const paperChoice = 'Paper'
        console.log('testPaper')
        evaluateGame(paperChoice, computerMath())

})
    scissorsButton.addEventListener('click', () => {
    const scissorsChoice = 'Scissors'
    console.log('testScissors')
    evaluateGame(scissorsChoice, computerMath())

})

 //add quit game button w operation that refreshes page -- brings us back to main menu
}

// ====== Test Handlers




//Event Handlers==================================================

creditsButtonElement.addEventListener('click', () => {
    const commentElement = document.createElement('li');
    commentElement.textContent = `Miles Tarricone, Abdullah Durrani, Justin Strohsnitter`; // replace placeholder text
    ulElement.appendChild(commentElement);
})
let test = startGameButton.addEventListener(`click`,  () => {
    bodyElement.remove(divMainMenu);
    startGame()
})

// userDecisionButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
// // create constant to pass into game function
//     const userChoiceChoice = event.target.innerText
//     console.dir(userChoice)
//     })
// })

// userDecisionButtons.addEventListener('click', () => {
//     console.log('works')
// })

// console.log(computerChoice);
// // evaluateGame(userChoice(), computerMath())

// }
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
    // //     const userChoice = inputBar.value//could be buttons
       // // if (userChoice === `Rock`) {
        //         if
        //     }
        // } 
        
        //functions=============================================================
        
        //dom manipulation ======================================================