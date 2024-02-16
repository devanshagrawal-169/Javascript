let myName = "Devansh"
let anotherName = "Devil"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@paytm",
}
let userTwo = userOne

userTwo.email = "devansh@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);