//start part
const gamebox = document.querySelector('.gamebox')
const start = document.querySelector('#start-button')
let main_text = document.querySelector('#console')

start.addEventListener('click', function (e) {
    
    start.remove()

    //creates the rock button
    const rock = document.createElement('button')
    rock.setAttribute('id', 'ROCK')
    rock.textContent = 'rock'
    gamebox.appendChild(rock)

    //adds functionality to rock button
    const ROCK = document.getElementById('ROCK')
    ROCK.addEventListener('click', function pedra() {
        main_text.textContent = singleRound('rock')
        main_text.textContent += game()
        score()
    })

    //creates the paper button
    const paper = document.createElement('button')
    paper.setAttribute('id', 'PAPER')
    paper.textContent = 'paper'
    gamebox.appendChild(paper)

    //adds functionality to paper button
    const PAPER = document.getElementById('PAPER')
    PAPER.addEventListener('click', function papel() {
        main_text.textContent = singleRound('paper')
        main_text.textContent += game()
        score()
    })

    //creates the scissors button
    const scissors = document.createElement('button')
    scissors.setAttribute('id','SCISSORS')
    scissors.textContent = 'scissors'
    gamebox.appendChild(scissors)

    //adds functionality to scissors button
    const SCISSORS = document.getElementById('SCISSORS')
    SCISSORS.addEventListener('click', function tesoura() {
        main_text.textContent = singleRound('scissors')
        main_text.textContent += game()

        score()
    })

    main_text.textContent = 'Chosse one!'

   
})


function singleRound (player) {

    function getComputerChoice() {
    let computer = ['rock', 'paper', 'scissors']
    return computer[Math.floor(Math.random()*computer.length)]
    }

    let comp = getComputerChoice()

    if (comp === "rock" && player === "rock") {
        return `You chosed ${player} and the computer chosed ${comp}: tie`
        
    } else if (comp === "rock" && player === "paper") {

        return `You chosed ${player} and the computer chosed ${comp}: player wins`

    } else if (comp === "rock" && player === "scissors") {

        return `You chosed ${player} and the computer chosed ${comp}: computer wins`

    } else if (comp === "paper" && player === "rock") {

        return `You chosed ${player} and the computer chosed ${comp}: computer wins`

    } else if (comp === "paper" && player === "paper") {

        return `You chosed ${player} and the computer chosed ${comp}: tie`

    } else if (comp === "paper" && player === "scissors") {

        return `You chosed ${player} and the computer chosed ${comp}: player wins`

    } else if (comp === "scissors" && player === "rock") {

        return `You chosed ${player} and the computer chosed ${comp}: player wins`

    } else if (comp === "scissors" && player === "paper") {

        return `You chosed ${player} and the computer chosed ${comp}: computer wins`

    } else if (comp === "scissors" && player === "scissors") {

        return `You chosed ${player} and the computer chosed ${comp}: tie`

    }

}

let pp = 0
let cp = 0
let tie = 0


function game(){
    
    let round = main_text.textContent
    let tiee = round.includes('tie')
    let playerp = round.includes('player wins')
    let computerp = round.includes('computer wins')
    
    if (tiee == true) {
        tie++
        return ` ${pp} : ${cp}`
    } else if (playerp == true) {
        pp++
        return ` ${pp} : ${cp}`
    } else if (computerp == true) {
        cp++
        return ` ${pp} : ${cp}`
    } 
}

function score() {
    if (pp >= cp && pp + cp + tie == 5) {
        ROCK.remove()
        PAPER.remove()
        SCISSORS.remove()
        main_text.textContent = `player wins the game. ${pp} : ${cp} `
        tryAgain()
        
    } else if (cp >= pp && pp + cp + tie == 5) { 
        ROCK.remove()
        PAPER.remove()
        SCISSORS.remove()
        main_text.textContent = `computer wins the game. ${pp} : ${cp} `
        tryAgain()
    } else if (cp == pp && pp + cp + tie == 5) {
        ROCK.remove()
        PAPER.remove()
        SCISSORS.remove()
        main_text.textContent = `no one wins the game ${pp} : ${cp} `
        tryAgain()
    }
}

function tryAgain() {
    const reload = document.createElement('button')
    reload.setAttribute('id', 'try')
    reload.textContent = 'try again'
    gamebox.appendChild(reload)
    RELOAD = document.getElementById('try')
    RELOAD.addEventListener('click', function() {
        window.location.reload()
    })
}