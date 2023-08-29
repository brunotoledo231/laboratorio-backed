import pool from "../../utils/db.js"

class User {
    constructor(){}
    create = async(user) => {
        console.log('DTO: ', user)

        // Verificar si el email ya está registrado
        const existingUser = await this.getOneByEmail(user.email);
        if (existingUser) {
            throw new Error('Email already exists');
        }
        
        const data = await pool.query('INSERT INTO Users (email, password, person_id, role_id) VALUES (?, ?, ?, ?)', [user.email, user.password, user.person_id, user.role_id]) 
        return data[0]
    }
    getAll = async() => {
        console.log('DAO CRUD getAll method called')
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
        try {
            // Verificar si userId es un número válido
            if (typeof email !== 'string') {
                throw new Error('Invalid user_name');
            }

            // Verificar si userId no está vacío ni nulo
            if (email=== null || email === undefined) {
                throw new Error('email cannot be empty or null');
            }

            // Realizar la actualización en la base de datos
            const result = await pool.query(
                'UPDATE Users SET password=? WHERE email=?',
                [updatedUserData.password, email]
            );

            // Verificar si se actualizó al menos un registro
            if (result.affectedRows === 0) {
                throw new Error('User not found');
            }

            return true;
        } catch (error) {
            throw error;
        }
    }

    delete = async(id) => {
        await pool.query('update Users set user_active=1 WHERE user_id =?', [id])
        return true
    }

    inverseDelete = async(id) => {
        await pool.query('update Users set user_active=0 WHERE user_id =?', [id])
        return true
    }
}


   
   

export const user = new User()