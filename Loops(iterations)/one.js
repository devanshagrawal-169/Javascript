// // for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element)

// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value is ${j} and outer looop value is ${i}`);
//         console.log(i + "*" + j + "=" + i * j)

//     }
// }


// let myArray = ["flash", "superman", "spiderman"]
// console.log(myArray.length)
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
// }

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);

// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);

}