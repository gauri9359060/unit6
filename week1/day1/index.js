const addition = require('./add')
const substraction = require(`./subtract`)
const multiplication = require(`./multiply`)
const division = require(`./divide`)

let a=20; let b=10;

console.log("addition -> " + addition.addNums(a,b))

console.log("substraction -> " + substraction.substractNum(a,b))

console.log("multiplication -> " + multiplication.multiplyNum(a,b))

console.log("division -> " + division.divideNum(a,b))

