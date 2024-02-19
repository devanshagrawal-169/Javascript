// singleton
// Object.create /

// object literals

const mySym = Symbol("key1");

const User = {
    name: "Devansh",
    "full name": "Devansh Agrawal",
    [mySym]: "mykey",
    age: 21,
    location: "Jhansi",
    email: "devansh@gmail.com",
    isLoggedIn: false,
    lastLoggedin: ["Monday", "Saturday"]
}

// console.log(User.email)
// console.log(User["email"])
// console.log(User["full name"])
// console.log(User[mySym])

User.email = "dev@gmail.com";
// Object.freeze(User);
User.email = "agrawal@gmail.com";
// console.log(User)


User.greeting = function() {
    console.log("Hello User");
}

User.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(User.greeting())
console.log(User.greetingTwo())