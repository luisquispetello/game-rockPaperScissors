let userScore = 0
let cpuScore = 0

const userScoreCount = document.getElementById('score-user')
const cpuScoreCount = document.getElementById('score-cpu')
const rematchBtn = document.querySelector('.rematch-btn')
const choiceRock = document.getElementById('rock')
const choicePaper = document.getElementById('paper')
const choiceScissors = document.getElementById('scissors')
const resultBox = document.querySelector('.result-box')
const resultText = document.querySelector('.result-box-content')


function getCpuChoice() {
    const choices = ['rock', 'paper','scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function win(userChoice, cpuChoice){
    userScore++
    userScoreCount.innerText = userScore
    document.getElementById(userChoice).classList.add('green-win')
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-win'), 2500)
    resultText.innerHTML = `<h1>You win!</h1> ${userChoice} smash ${cpuChoice}`
    resultBox.style.display = 'grid'
    setTimeout(() => resultBox.style.display = 'none', 2500) 
}

function draw(userChoice){
    document.getElementById(userChoice).classList.add('grey-draw')
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-draw'), 2500)
    resultText.innerHTML = `<h1>Draw</h1> You both chose ${userChoice}`
    resultBox.style.display = 'grid'
    setTimeout(() => resultBox.style.display = 'none', 2500) 
}

function lose(userChoice, cpuChoice){
    cpuScore++
    cpuScoreCount.innerText = cpuScore
    document.getElementById(userChoice).classList.add('red-lose')
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-lose'), 2500)
    resultText.innerHTML = `<h1>You lost</h1> ${cpuChoice} smash ${userChoice}`
    resultBox.style.display = 'grid'
    setTimeout(() => resultBox.style.display = 'none', 2500) 
}

function play(userChoice) {
    const cpuChoice = getCpuChoice()
    if( userChoice == 'rock' && cpuChoice == 'scissors' ||
        userChoice == 'paper' && cpuChoice == 'rock' ||
        userChoice == 'scissors' && cpuChoice == 'paper') {
        win(userChoice, cpuChoice)
    } else if(userChoice == cpuChoice) {
        draw(userChoice, cpuChoice)
    } else {
        lose(userChoice, cpuChoice)
    }
}

function rematch(){
    userScore = 0
    cpuScore = 0
    userScoreCount.innerText = userScore
    cpuScoreCount.innerText = cpuScore
}

function main(){
    choiceRock.addEventListener('click', () => play('rock'))
    choicePaper.addEventListener('click', () => play('paper'))
    choiceScissors.addEventListener('click', () => play('scissors'))
    rematchBtn.addEventListener('click', () => rematch())
    document.addEventListener('contextmenu', event => event.preventDefault());
}


main()