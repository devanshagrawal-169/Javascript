// const FbUser = new Object()
const FbUser = {}
FbUser.id = "123abc"
FbUser.name = "Devansh"

FbUser.isLoggedIn = false

// console.log(FbUser);

const regUser = {
    email: "dev@gmail.com",
    fullName: {
        UserFullName: {
            FirstName: "Devil",
            LastName: "Agrawal"

        }
    }
}

// console.log(regUser.fullName.UserFullName.FirstName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2 }
    // console.log(obj3)

// const users = [{
//     id: 1,
//     email: "d@gmail.com"
// }, ]

// users[1].email
// console.log(FbUser)

// console.log(Object.keys(FbUser))
// console.log(Object.values(FbUser))
// console.log(Object.entries(FbUser))
// console.log(FbUser.hasOwnProperty("isLoggedIn"))


// De-Structuring

const course = {
        coursename: "Javascript",
        price: '100',
        teacher: "JS"
    }
    // console.log(course.teacher)
    // const { teacher: masterji } = course
    // console.log(masterji)

// const { teacher } = course
// console.log(teacher)

// JSON API

// {
//     "name": "Devansh",
//     "Address": "Firozabad",
//     "COllege" : "BIET"
// }