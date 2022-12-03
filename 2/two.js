const { input } = require("./input")

let totalScore = 0
input.forEach((game) => {
    game.toString()
    switch (game) {
        case "AX":
            totalScore += 3
            break
        case "AY":
            totalScore += 4
            break
        case "AZ":
            totalScore += 8
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
            totalScore += 2
            break
        case "CY":
            totalScore += 6
            break
        case "CZ":
            totalScore += 7
            break
        default:
            return
    }
})

console.log(totalScore)
