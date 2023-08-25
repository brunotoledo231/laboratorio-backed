import {body } from 'express-validator'




export const createUserValidator = [
    /*person*/
    body('first_name').notEmpty().withMessage('first_name cant be empty!')
    .isString().withMessage('first_name must be string!'),
    body('last_name').notEmpty().withMessage('last_name cant be empty!')
    .isString().withMessage('last_name must be string!'),
    body('birth_date').notEmpty().withMessage('birth_date cant be empty!')
    .isISO8601().withMessage('Enter a valid "YYYY-MM-DD" date'),
    body('address').notEmpty().withMessage('address cant be empty!')
    .isString().withMessage('address must be string!'),
    body('phone_number').notEmpty().withMessage('phone_number cant be empty!')
    .isNumeric().withMessage('phone_number must be a number!'),
    body('dni').notEmpty().withMessage('dni cant be empty!')
    .isNumeric().withMessage('dni must be a number!'),
    body('gender_id').notEmpty().withMessage('gender_id cant be empty!')
    .isNumeric().withMessage('gender_id must be a number!')
    .isIn([5,7,8,9]).withMessage('gender_id must be a valid number value from genders table!'),
    /*user*/
    body('email').notEmpty().withMessage('email cant be empty!')
    .isEmail(),
    body('password').notEmpty().withMessage('password cant be empty!')
    .isStrongPassword({
        minLength:8,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
        minSymbols:1
    }).withMessage('password must contain 8 digits, 1 lowercase, 1 uppercase, 1 number and 1 special character!'),
    body('role_id').notEmpty().withMessage('role_id cant be empty!')
    .isNumeric().withMessage('role_id must be a number!')
    .isIn([5,6,7,8]).withMessage('role_id must be a valid number value from roles table!'),
]

export const logInValidator = [
    body('email').notEmpty().withMessage('Email cant be empty!').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Password cant be empty!').isString().withMessage('Password type must be a string!'),
]





export const createAnalysisTypeValidator = [
    /*analysis type*/
    body('analysis_type_name').notEmpty().withMessage('the analysis name cant be empty!')
    .isString().withMessage('analysis name must be string!')
]
   
    

