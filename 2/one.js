const { input } = require("./input")

let totalScore = 0
input.forEach((game) => {
    game.toString()
    switch (game) {
        case "AX":
            totalScore += 4
            break
        case "AY":
            totalScore += 8
            break
        case "AZ":
            totalScore += 3
            break
        case "BX":
            totalScore += 1
            break
        case "BY":
            totalScore += 5
            break
        case "BZ":
            totalScore += 9
            break
        case "CX":
            totalScore += 7
            break
        case "CY":
            totalScore += 2
            break
        case "CZ":
            totalScore += 6
            break
        default:
            return
    }
})

console.log(totalScore)
