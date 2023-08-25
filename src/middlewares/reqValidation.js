import {body } from 'express-validator'

export const createAnalysisTypeValidator = [
    /*analysis type*/
    body('analysis_type_name').notEmpty().withMessage('the analysis name cant be empty!')
    .isString().withMessage('analysis name must be string!')
]
   
    

