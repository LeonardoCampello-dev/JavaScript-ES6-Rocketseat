class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    static isAdmin({ email, is_admin }) {
        if (is_admin === true) {
            console.log(`${email} is an administrator.`)
        } else {
            console.log(`${email} is not an administrator.`)
        }
    }
}

class Admin extends User {
    constructor(email, password) {
        super(email, password)

        this.is_admin = true
    }
}

const Leonardo = new User('leonardocampello.dev@gmail.com', '@leonardo')
const Diego = new Admin('diego@rocketseat.com', '@diego')

console.table(Leonardo)
User.isAdmin(Leonardo)

console.log('===========================================================')

console.table(Diego)
User.isAdmin(Diego)




