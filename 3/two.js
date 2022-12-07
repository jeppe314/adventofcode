const { input } = require("./input")

const groups = []
let score = 0

// Creates arrays of 3 backpacks sorted by size
for (let i = 0; i < input.length; i += 3) {
    groups.push(
        [input[i], input[i + 1], input[i + 2]].sort(
            (a, b) => b.length - a.length
        )
    )
}

// Loops through each letter of longest string until it finds the letter which is included in all three strings
groups.forEach((group) => {
    for (letter of group[0]) {
        if (group[1].includes(letter) && group[2].includes(letter)) {
            if (letter == letter.toUpperCase()) {
                score += letter.charCodeAt(0) - 64 + 26
                break
            } else {
                score += letter.charCodeAt(0) - 96
                break
            }
        }
    }
})

console.log(score)
