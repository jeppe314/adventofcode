const { input } = require("./input")

const topThreeSums = input
    .map((elf) => {
        return elf
            .split("\n")
            .map((foodItem) => {
                return parseInt(foodItem, 10)
            })
            .reduce((sum, num) => sum + num)
    })
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, num) => sum + num)

console.log(topThreeSums)
