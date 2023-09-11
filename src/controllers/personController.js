import { validationResult } from 'express-validator';
import { PersonService } from '../repository/index.js';
import { format, parse } from 'date-fns'; 
import { createError } from '../utils/error.js';



// export const updatePerson = async (req, res, next) => {
//     const { errors } = validationResult(req);
//     if (errors.length > 0) {
//         throw createError('400', errors);
//     }


//     const personId = req.params.id
//     const updatedPersonData = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         birth_date: req.body.birth_date,
//         address: req.body.address,
//         postal_code: req.body.postal_code,
//         phone_number: req.body.phone_number,
//         medical_coverage: req.body.medical_coverage,
//         affiliate_number: req.body.affiliate_number,
               
//     };

//     const parsedDate = parse(updatedPersonData.birth_date, 'dd-MM-yyyy', new Date());
//     const formattedBirthDate = format(parsedDate, 'yyyy-MM-dd');
//     updatedPersonData.birth_date = formattedBirthDate;

//     try {
//         const existingPerson = await PersonService.getPersonById(personId);
//         if (existingPerson.length === 0) {
//             throw createError(404, 'Usuario no encontrado')
//         }
//         await PersonService.updatePerson(personId, updatedPersonData);

//         return res.json({
//             status: 'OK',
//             payload: {
//                 message: 'Datos de la persona actualizados exitosamente'
//             }
//         });
//     } catch (error) {
//         next(error);
//     }
// };

export const updatePerson = async(req,res,next) => {
    const id = req.params.id
    const obj = req.body

    try {
        const existingPerson = await PersonService.getPersonById(id);
        if (existingPerson.length === 0) {
            throw createError(404, 'Usuario no encontrad')
        }
        const response = await PersonService.updatePerson(id,existingPerson[0], obj)
        console.log(response)
        res.json({
            status: 'OK',
            payload: 'Persona actualizada exitosamente',
            message: response
        })
    } catch (error) {
        next(error)
    }
}

export const getAllPersons = async(req,res,next) => {
    console.log(req.originalUrl);
    try {
        const data = await PersonService.getAllPersons()
        res.json({
            status: 'OK',
            payload: data[0]
        })
        
    } catch (error) {
        res.status(500).json({//sasas
            status: 'failed',
            payload: {
                message:error.message,
                stack:error.stack
            }
        })
    }
}

export const getPersonByID = async(req, res, next) => {
    try {
        const person = await PersonService.getPersonById(req.params.id)
        if (person.length === 0) {
            throw createError(400, 'Person not found')
        }
        res.json({
            status: 'OK',
            payload: person[0]
        })
    } catch (error) {
        next(error)
    }
}

export const getPersonByDNI = async(req,res,next) => {
    try {
        const person = await PersonService.getPersonByDNI(req.params.dni)
        if (person.length === 0) {
            throw createError(400, 'Person not found')
        }
        res.json({
            status: 'OK',
            payload: person[0]
        })
    } catch (error) {
        next(error)
    }
}
 

