// const user = {
//     username: "devansh",
//     price: "1000",

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to the website`)
//         console.log(this)
//     }


// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)


// function chai() {
//     let username = "devansh"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "devansh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(2, 3))

// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(2, 3))