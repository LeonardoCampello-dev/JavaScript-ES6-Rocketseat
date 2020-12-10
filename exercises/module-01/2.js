const users = [
    { name: 'Leonardo', age: 20, company: 'MDCPX' },
    { name: 'Diego', age: 23, company: 'rocketseat' },
    { name: 'Mayk', age: 34, company: 'rocketseat' }
]

const ages = users.map(user => user.age)

console.log('Ages')
console.log(ages)
console.log('==========================================================')

const boosters = users.filter(user => {
    return user.company == 'rocketseat' && user.age >= 18
})

console.table(boosters)
console.log('==========================================================')

const googleMember = users.find(user => user.company == 'google')

console.log(`Google member: ${googleMember}`)
console.log('==========================================================')

const doubleAge = users.filter(user => user.age * 2 <= 50)

console.log('Users over 50 years old')
console.table(doubleAge)