let userScore = 0
let cpuScore = 0

let $ = document.getElementById

const userScoreCount = $('score-user')
const cpuScoreCount = $('score-cpu')
const rematchBtn = $('rematch-btn')
const choiceRock = $('rock')
const choicePaper = $('paper')
const choiceScissors = $('scissors')
const resultBox = $('result-box')
const resultText = $('result-box-content')

function getCpuChoice() {
    const choices = ['rock', 'paper','scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function win(userChoice, cpuChoice){
    userScore++
    userScoreCount.innerText = userScore
    $(userChoice).classList.add('green-win')
    setTimeout(() => $(userChoice).classList.remove('green-win'), 2500)
    resultText.innerHTML = `<h1>You win!</h1> ${userChoice} smash ${cpuChoice}`
    resultBox.style.display = 'grid'
    setTimeout(() => resultBox.style.display = 'none', 2500) 
}

function draw(userChoice){
    $(userChoice).classList.add('grey-draw')
    setTimeout(() => $(userChoice).classList.remove('grey-draw'), 2500)
    resultText.innerHTML = `<h1>Draw</h1> You both chose ${userChoice}`
    resultBox.style.display = 'grid'
    setTimeout(() => resultBox.style.display = 'none', 2500) 
}

function lose(userChoice, cpuChoice){
    cpuScore++
    cpuScoreCount.innerText = cpuScore
    $(userChoice).classList.add('red-lose')
    setTimeout(() => $(userChoice).classList.remove('red-lose'), 2500)
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