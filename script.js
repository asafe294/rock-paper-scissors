function getComputerChoice() {
    let computer = ['rock', 'paper', 'scissors']
    return computer[Math.floor(Math.random()*computer.length)]
}

function getPlayerChoice() {
    let player = prompt()
    return player

}

function singleRound () {
    let comp = getComputerChoice()
    let player = getPlayerChoice()

    if (comp === "rock" && player === "rock") {
        return "tie"

    } else if (comp === "paper" && player === "paper") {
        return "tie"

    } else if (comp === "scissors" && player === "scissors") {
        return "tie"
    }
    

}
console.log(singleRound())
