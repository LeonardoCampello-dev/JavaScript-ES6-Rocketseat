// 3.1

const arr = [1, 2, 3, 4, 5]

const newArr = arr.map(item => item + 10)

console.log(newArr)

console.log('==========================================================')

// 3.2

const user = { name: 'Leonardo', age: 20 }

const showAge = ({ age }) => console.log(`Age: ${age}`)

showAge(user)

console.log('==========================================================')

// 3.3

const name = 'Leonardo'
const age = 20

const showUser = (name = 'Diego', age = 23) =>
    console.log(`Name: ${name} \nAge: ${age}`)

showUser()
showUser(name, age)

console.log('==========================================================')

// 3.4

const promise = () => new Promise((resolve, reject) => resolve())

console.log(promise())
