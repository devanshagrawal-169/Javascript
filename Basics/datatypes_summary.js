// Primitive

// 7 types -> String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
// JavaScript is a dynamically typed language.This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.You can assign different types of values to a variable during its lifetime.

const scoreValue = 100.3

const isLoggedIn = false;
const temperature = null;
let userEmail;

const id = Symbol('1230')
const anotherId = Symbol('1230')

console.log(id == anotherId)

// const bigNumber = 2302342332989282n;


// Reference type (Non-Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "hanuman", "krish"];

let myObj = {
    name: "dev",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof (myFunction))