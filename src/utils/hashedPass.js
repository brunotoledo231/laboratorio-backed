import bcrypt from 'bcrypt';

export const hashPassword = (password) => { 
    return bcrypt.hashSync(password, 5)
}

export const comparePassword = (reqBodyPass, dbPass) => {
    return bcrypt.compareSync(reqBodyPass, dbPass)
}

