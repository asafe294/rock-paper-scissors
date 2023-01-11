function getComputerChoice() {
    let computer = ['rock', 'paper', 'scissors']
    return computer[Math.floor(Math.random()*computer.length)]
}



function singleRound () {
    let comp = getComputerChoice()
    let player = prompt()

    if (comp === "rock" && player === "rock") {
        return "tie"

    } else if (comp === "rock" && player === "paper") {

        return "player wins"

    } else if (comp === "rock" && player === "scissors") {

        return "computer wins"

    } else if (comp === "paper" && player === "rock") {

        return "computer wins"

    } else if (comp === "paper" && player === "paper") {

        return "tie"

    } else if (comp === "paper" && player === "scissors") {

        return "player wins"

    } else if (comp === "scissors" && player === "rock") {

        return "player wins"

    } else if (comp === "scissors" && player === "paper") {

        return "computer wins"

    } else if (comp === "scissors" && player === "scissors") {

        return "tie"

    } else {

        return "string invalid"

    }

}
function game(){
    let pp = 0
    let cp = 0
    let tie = 0

    for(let i=0; i<6; i++) {
        let round = singleRound()
        if (round == "tie") {
            ++tie
            alert(`tie. ${pp} vs ${cp}. ${6-i} rounds remaining`)
        } else if (round == "player wins") {
             ++pp
             alert(`point to player .${pp} vs ${cp}. ${6-i} rounds remaining`)
        } else if (round == "computer wins") {
             ++cp
             alert(`point to computer. ${pp} vs ${cp}. ${6-i} rounds remaining`)
        } 
        
    }
    function score(){
        if (pp >= cp || pp == 5) {
            let result = "player won"
            return result
        } else if (cp >= pp || cp == 5) { 
            let result = "computer won"
            return result
        } else {
            let result = "tie"
            return result
        }
    }
    let final = score()
    let msg = `And the result is: ${final} . ${pp} vs ${cp}`
    return msg
}
alert(game())