import pool from "../../utils/db.js"

class Person {
    constructor(){}
    create = async(person) => {
        const data = await pool.query(`INSERT INTO Persons (first_name, 
            last_name,dni_type_id, dni, phone_number, address,postal_code,
            medical_coverages_id,affiliate_number, birth_date, gender_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?)`, 
            [
                person.first_name, person.last_name,person.dni_type_id,
                 person.dni, person.phone_number,person.postal_code,
                 person.affiliate_number,person.medical_coverages_id, person.address,
                 person.birth_date, person.gender_id
            ]) 
        return data[0]
    }



    getAll = async() => {
        console.log('DAO CRUD getAll method called')
        const data = await pool.query('SELECT * FROM Persons')
        return data
    }
    getOneById = async(id) => {
        const data = await pool.query('SELECT * FROM Persons WHERE id =?', [id])
        return data[0]
    }
    
    update = async(personId,person) => {
        try{
            if(typeof personId !=='number'){
                throw new Error('Invalid personId')
            }
            if(personId===null|| personId ===undefined){
                throw new Error('id cannot be empty or null');
            }
            const data = await pool.query('UPDATE Persons SET first_name=?, last_name=?, birth_date=?, address=?, phone_number=? WHERE person_id =?', [person.first_name, person.last_name, person.birth_date, person.address, person.phone_number, personId])
            
            
            if (data.affectedRows === 0) {
                throw new Error('Person not found');
            }
            return true;
        }catch(error){
            throw error;
        }
    }

}

export const person = new Person()