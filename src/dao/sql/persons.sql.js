import pool from "../../utils/db.js"

class Person {
    constructor(){}
    create = async(person) => {
        const data = await pool.query('INSERT INTO Persons (first_name, last_name, dni, phone_number, address, birth_date, gender_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [person.first_name, person.last_name, person.dni, person.phone_number, person.address, person.birth_date, person.gender_id]) 
        return data[0]
    }
    getAll = async() => {
        const data = await pool.query('SELECT * FROM Persons')
        return data
    }
    getOneById = async(id) => {
        const data = await pool.query('SELECT * FROM Persons WHERE id =?', [id])
        return data[0]
    }
    getOneByEmail = async(email) => {
        const data = await pool.query('SELECT * FROM Persons WHERE email =?', [email])
        return data[0]
    }
    update = async(person) => {
        const data = await pool.query('UPDATE Persons SET person=? WHERE id =?', [person, person.person_id])
        return data[0]
    }
}

export const person = new Person()