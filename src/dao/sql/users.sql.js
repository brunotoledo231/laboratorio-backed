import pool from "../../utils/db.js"

class User {
    constructor(){}
    create = async(user) => {
        console.log('DTO: ', user)
        const data = await pool.query('INSERT INTO Users (email, password, person_id, role_id) VALUES (?, ?, ?, ?)', [user.email, user.password, user.person_id, user.role_id]) 
        return data[0]
    }
    getAll = async() => {
        console.log('DAO CRUD getAll method called')
        const data = await pool.query('SELECT * FROM Users')
        return data
    }
    getOneById = async(id) => {
        const data = await pool.query('SELECT * FROM Users WHERE id =?', [id])
        return data[0]
    }
    getOneByEmail = async(email) => {
        const data = await pool.query('SELECT * FROM Users WHERE email =?', [email])
        return data[0]
    }
    update = async(user) => {
        const data = await pool.query('UPDATE Users SET user=? WHERE id =?', [user, user.user_id])
        return data[0]
    }
    delete = async(id) => {
        await pool.query('DELETE FROM Users WHERE id =?', [id])
        return true
    }
}

export const user = new User()

