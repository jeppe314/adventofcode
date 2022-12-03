const fs = require("fs")

// const input = fs.readFile("./input.txt", "utf8").toString().trim().split("\n\n")

const input = fs
    .readFileSync("./input.txt", "utf8")
    .toString()
    .trim()
    .split("\n\n")

module.exports = {
    input,
}
