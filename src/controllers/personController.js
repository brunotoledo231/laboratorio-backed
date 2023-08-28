import { validationResult } from 'express-validator';
import { PersonService } from '../repository/index.js';


export const createPerson = async(req,res,next) => { 
    const {errors} = validationResult(req)
    if (errors.length > 0) {
        return res.status(400).json({
            status: 'failed',
            payload: errors
        })
    }
    const personInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birth_date: req.body.birth_date,
        address: req.body.address,
        phone_number: req.body.phone_number,
        dni: req.body.dni,
        gender_id: req.body.gender_id
    }
    
    try {
        const {insertId} = await PersonService.createPerson(personInfo) 
        
        return res.json({
            status: 'OK',
            payload: {person_id: data.insertId}
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            payload: {
                message:error.message,
                stack:error.stack
            }
        })
    }
}

export const updatePerson = async (req, res, next) => {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).json({
            status: 'failed',
            payload: errors
        });
    }

    const personId = parseInt(req.params.id);
    console.log(personId)
    const updatedPersonData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birth_date: req.body.birth_date,
        address: req.body.address,
        phone_number: req.body.phone_number,       
    };

    try {
        const updated = await PersonService.updatePerson(personId, updatedPersonData);

        if (!updated) {
            return res.status(404).json({
                status: 'failed',
                payload: {
                    message: 'Persona no encontrada'
                }
            });
        }

        return res.json({
            status: 'OK',
            payload: {
                message: 'Datos de la persona actualizados exitosamente'
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            payload: {
                message: error.message,
                stack: error.stack
            }
        });
    }
};

export const getAllPersons = async(req,res,next) => {
    console.log('controllers.getAllPersons hitted');
    try {
        const data = await PersonService.getAllPersons()
        res.json({
            status: 'OK',
            payload: data[0]
        })
        
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            payload: {
                message:error.message,
                stack:error.stack
            }
        })
    }
}

 

