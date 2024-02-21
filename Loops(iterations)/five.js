const coding = ["java", 'ruby', "python", "cpp"]

// coding.forEach(function(item) {
//     console.log(item)
// })

// arrow fxn

// coding.forEach((item) => {
//     console.log(item)
// })

// function Print(item) {
//     console.log(item)
// }
// coding.forEach(Print)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const mycoding = [{
        langName: "Java",
        langFileName: "js"
    },
    {
        langName: "Javascript",
        langFileName: "python"
    },
    {
        langName: "cpp",
        langFileName: "c++"
    },
]

mycoding.forEach((item) => {
    console.log(item.langName)
    console.log(item.langFileName)

})