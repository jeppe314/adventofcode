const { input } = require("./input")

let pairs = []

for (let i = 0; i < input.length; i++) {
    let temp = []

    let str = input[i].split(",")

    for (let j = 0; j < str.length; j++) {
        temp.push(...str[j].split("-"))
    }
    temp = temp.map((x) => parseInt(x))
    pairs.push(temp)
}

let score = 0

pairs.forEach((pair) => {
    if (
        (pair[0] <= pair[2] && pair[1] >= pair[3]) ||
        (pair[0] >= pair[2] && pair[1] <= pair[3])
    ) {
        score += 1
    }
})

console.log(score);