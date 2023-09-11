import { updatePersonDTO  } from '../dao/dto/PersonDTO.js'
import { createError } from '../utils/error.js'

/*
    middleware created to validate req.body inputs so that they match with the expected attributes
    of the corresponding DTO. However DTO_Class still has a static getAtrribute method() that should be dynamic..
**/
export const allowedKeysMiddleware = (req,res,next) => {
    const requiredDTO = req.originalUrl.split('/')[2]
    const userUpdateData = req.body
    let allowedFields
    /*
     There should be a way of making this dynamic too. For every route should be an if statement.
     Or we should consider making a file for each route. 
    **/
    if (requiredDTO === 'persons') {
        allowedFields = updatePersonDTO.getAttributes()
          }
    for (const key in userUpdateData) {
      if (!allowedFields.includes(key)) {
        throw createError(400, `Solo se pueden actualizar los siguientes campos: ${allowedFields}`) 
      }
    }
    next();
  }