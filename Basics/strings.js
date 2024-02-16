const name = "devansh"
const repoCount = 50

// console.log(name + repoCount + "Value")

const newGame = new String('Devansh-hc-com')
console.log(newGame[0])
console.log(newGame.__proto__);

console.log(newGame.length)
console.log(newGame.toUpperCase())
console.log(newGame.charAt(5))
console.log(newGame.indexOf('v'))


const newString = newGame.substring(0, 4);
console.log(newString);

const anotherString = newGame.slice(0, 4);
console.log(anotherString);

const newerString = "     Devansh  ";
console.log(newerString);
console.log(newerString.trim());

const url = "www.google.com/Devansh%20"
console.log(url.replace("%20", "-90"))
console.log(url.includes("Devansh"))

console.log(newGame.split("-"));