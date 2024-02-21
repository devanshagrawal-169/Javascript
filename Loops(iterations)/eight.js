// reduce function

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(accumulator, curr) {
//     console.log(`acc: ${accumulator} and current value: ${curr}`)
//     return accumulator + curr
// }, 0)


const myTotal = myNums.reduce((acc, curr) => (acc + curr), 0)
console.log(myTotal)


const shoppingCart = [{
        itemName: "Course",
        price: 300,
    },
    {
        itemName: "Course1",
        price: 3001,
    },
    {
        itemName: "Course2",
        price: 30012,
    },
    {
        itemName: "Course3",
        price: 30022,
    },
]

const pricePay = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(pricePay)