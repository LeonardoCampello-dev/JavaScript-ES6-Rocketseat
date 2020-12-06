// 5.1 

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr

console.log(`x: ${x} y: ${y.join(' - ')}`)

console.log('==========================================================')

const sum = (...params) => params.reduce((total, next) => total + next)

console.log(`Sum: ${sum(1, 2, 3, 4, 5, 6)}`)

console.log('==========================================================')

// 5.2

const user = {
    name: 'Leonardo',
    age: 20,
    address: {
        city: 'Novo Hamburgo',
        state: 'RS',
        country: 'Brazil'
    }
}

const userTwo = {
    ...user,
    name: 'Gabriel'
}

console.log(userTwo)

const userThree = {
    ...user,
    address: {
        ...user.address,
        city: 'Lontras'
    }
}

console.log(userThree)