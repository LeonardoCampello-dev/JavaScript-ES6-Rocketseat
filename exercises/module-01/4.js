// 4.1

const company = {
    name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        state: 'SC'
    }
}

const { name, address: { city, state } } = company

console.log(`
    Name: ${name}
    State: ${state}
    City: ${city}
`)

console.log('==========================================================')

// 4.2

const showInfo = ({ name, age }) =>
    console.log(`${name} is ${age} years old`)

showInfo({ name: 'Leonardo', age: 20 })