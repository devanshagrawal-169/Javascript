// function MyName() {
//     console.log("D")
//     console.log("E")
//     console.log("V")
// }
// // MyName; // function ka reference 
// // MyName(); // function execution

// function addNumbers(num1, num2) {
//     // let result = num1 + num2;
//     // return result;
//     return num1 + num2;

// }
// const result = addNumbers(10, 20);
// // console.log("Result:", result);



// function loginUserMsg(username = "sam") {
//     if (username === undefined) {
//         console.log("Please Enter a username")
//         return;
//     }
//     return `${username} just logged in`;
// }

// // console.log(loginUserMsg("Devansh"))
// console.log(loginUserMsg("Devil"))


function calculateCartPrice(...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 300, 1300, 400, 900, 190));

const User = {
    username: "Dev",
    price: 100
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(User)

handleObject({
    username: "sam",
    price: "200"
})

const myArray = [100, 200, 4000, 2000];

function returnSecondValue(getArray) {
    return getArray[1];

}
// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200, 300, 3000, 1238012]));