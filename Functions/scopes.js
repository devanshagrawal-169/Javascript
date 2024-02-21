// let a = 200;

// if (true) {
//     // var a = 20;
//     const b = 10;
//     let c = 30;
//     let a = 300;

//     console.log("Inner:", a)
// }

// console.log(a); // var tha isliye scop k bahar use kr paye. isko use nai krte
// // console.log(b);
// // console.log(c);


// Nested Scope
// function one() {
//     const username = "devansh"

//     function two() {
//         const website = "youtube";
//         console.log(username)
//     }
//     // console.log(website)
//     two()
// }
// one()


// if (true) {
//     const username = "devansh";
//     if (username === "devansh") {
//         const app = " youtube";
//         console.log(username + app);
//     }
//     // console.log(app)   error degaa
// } 
// // console.log(username) error dega



// Important concept

console.log(addone(4))

function addone(num) {
    return num + 1;

}

addTwo(5) //error dega ye 
const addTwo = function(num) { // variable se banya h function
    return num + 2;
}