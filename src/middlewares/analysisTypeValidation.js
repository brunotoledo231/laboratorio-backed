import {body } from 'express-validator'

export const createAnalysisTypeValidator = [
    /*analysis type*/
    body('analysis_type_name').notEmpty().withMessage('the analysis name cant be empty!')
    .isString().withMessage('analysis name must be string!'),
    body('analysis_type_price').notEmpty().withMessage('the price analysis type is required')
    .isNumeric().withMessage('analysis price must be numeric'),
    body('analysis_type_materials').isString().withMessage('the materials must be string!')

]