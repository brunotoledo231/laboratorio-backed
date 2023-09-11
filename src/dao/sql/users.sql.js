import pool from "../../utils/db.js"

class User {
    constructor(){}
    create = async (user) => {
        const data = await pool.query(
            'INSERT INTO Users (user_active, email, password, person_id, role_id) VALUES (?, ?, ?, ?, ?)',
            [0, user.email, user.password, user.person_id, user.role_id]
        );
        return data[0];
    }
    getAll = async() => {
        const data = await pool.query('SELECT * FROM Users')
        return data
    }
    getOneById = async(id) => {
        const data = await pool.query('SELECT * FROM Users WHERE user_id =?', [id])
        return data[0]
    }
    getOneByEmail = async(email) => {
        const data = await pool.query('SELECT * FROM Users WHERE email =?', [email])
        return data[0]
    }

    update = async (email, updatedUserData) => {
        const result = await pool.query(
            'UPDATE Users SET password=? WHERE email=?',
            [updatedUserData.password, email])
        return result
    }

    delete = async(id) => {
        await pool.query('update Users set user_active=1 WHERE user_id =?', [id])
        return true
    }
}


   
   

export const user = new User()