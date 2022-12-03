const fs = require("fs")

const input = fs
    .readFileSync("./input.txt", "utf8")
    .toString()
    .split("\n")
    .map((pair) => pair.split(" ").join().replace(",", ""))

module.exports = {
    input,
}
