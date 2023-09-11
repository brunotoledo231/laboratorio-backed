import pool from "../../utils/db.js"

class Person {
    constructor(){}
    create = async(person) => {
        const data = await pool.query(`INSERT INTO Persons (first_name, 
            last_name,dni_type_id, dni, phone_number, address,postal_code,
            medical_coverages_id,affiliate_number, birth_date, gender_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
            [
                person.first_name, person.last_name,person.dni_type_id,
                 person.dni, person.phone_number,person.address, person.postal_code,
                 person.medical_coverages_id, 
                 person.affiliate_number,
                 person.birth_date, person.gender_id
            ]) 
        return data[0]
    }



    getAll = async() => {
        const data = await pool.query('SELECT * FROM Persons')
        return data
    }
    getOneById = async(id) => {
        const data = await pool.query('SELECT * FROM Persons WHERE person_id =?', [id])
        return data[0]
    }

    getOneByDNI = async(dni) => {
        const data = await pool.query('SELECT * FROM Persons WHERE dni =?', [dni])
        return data[0]
    }
    
    update = async(personId,person) => {
        const data = await pool.query(
            'UPDATE Persons SET first_name=?, last_name=?, phone_number=?, address=?, birth_date=?, gender_id=?, postal_code=?, affiliate_number=?, medical_coverages_id=? WHERE person_id =?',
             [
                person.first_name, 
                person.last_name,
                person.phone_number, 
                person.address, 
                person.birth_date,
                person.gender_id,
                person.postal_code,
                person.affiliate_number,
                person.medical_coverages_id,
                personId
            ])
        return data;
    }


}

export const person = new Person()