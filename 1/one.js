const { input } = require("./input")

const sums = input
    .map((elf) => {
        return elf
            .split("\n")
            .map((foodItem) => {
                return parseInt(foodItem, 10)
            })
            .reduce((sum, num) => sum + num)
    })
    .sort((a, b) => b - a)

console.log(sums)