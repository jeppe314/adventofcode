const { input } = require("./input")

const comps = input.map((rucksack) => {
    return [
        rucksack.slice(0, rucksack.length / 2).split(""),
        rucksack.slice(rucksack.length / 2, rucksack.length).split(""),
    ]
})

let priorityScore = 0

comps.forEach(rucksack => {
    for (letter of rucksack[0]) {
        if (rucksack[1].includes(letter)) {
            if(letter == letter.toUpperCase()) {
                priorityScore += (letter.charCodeAt(0) - 64 + 26)
                break
            } else {
                priorityScore += (letter.charCodeAt(0) - 96)
                break
            }
        }
    }
})


console.log(priorityScore);