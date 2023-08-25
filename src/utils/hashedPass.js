import bcrypt from 'bcrypt';

export const hashPassword = (password) => { 
    return bcrypt.hashSync(password, 10)
}

export const comparePassword = (reqBodyPass, dbPass) => {
    return bcrypt.compareSync(reqBodyPass, dbPass)
}

