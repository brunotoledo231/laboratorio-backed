import {body } from 'express-validator'
import { format, parse } from 'date-fns';


export const updateUserValidator = [
    /*person*/
    body('password').notEmpty().withMessage('password cant be empty!')
    .isStrongPassword({
        minLength:8,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
        minSymbols:1
    }).withMessage('password must contain 8 digits, 1 lowercase, 1 uppercase, 1 number and 1 special character!'),
      
]



export const createUserValidator = [
    /*person*/
    body('first_name').notEmpty().withMessage('first_name cant be empty!')
    .isString().withMessage('first_name must be string!'),
    body('last_name').notEmpty().withMessage('last_name cant be empty!')
    .isString().withMessage('last_name must be string!'),
    body('birth_date')
    .notEmpty().withMessage('birth_date cant be empty!')
    .custom((value, { req }) => {
        const parsedDate = parse(value, 'dd-MM-yyyy', new Date());
        if (!isNaN(parsedDate) && parsedDate.getDate() && parsedDate.getMonth() + 1 && parsedDate.getFullYear()) {
            req.body.birth_date = format(parsedDate, 'yyyy-MM-dd');
            return true;
        }
        throw new Error('Enter a valid "dd-MM-yyyy" date');
    }),
    body('address').notEmpty().withMessage('address cant be empty!')
    .isString().withMessage('address must be string!'),
    body('phone_number').notEmpty().withMessage('phone_number cant be empty!')
    .isNumeric().withMessage('phone_number must be a number!'),
    body('dni').notEmpty().withMessage('dni cant be empty!')//colocar rango de digitos de 7 a 8 digitos 
    .isNumeric().withMessage('dni must be a number!')
    .isLength({ min: 7, max: 8 }).withMessage('dni must be between 7 and 8 digits long'),
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


export const createPersonValidator = [
    /*person*/
    body('first_name').notEmpty().withMessage('first_name cant be empty!')
    .isString().withMessage('first_name must be string!'),
    body('last_name').notEmpty().withMessage('last_name cant be empty!')
    .isString().withMessage('last_name must be string!'),
    body('birth_date')
    .notEmpty().withMessage('birth_date cant be empty!')
    .custom((value, { req }) => {
        const parsedDate = parse(value, 'dd-MM-yyyy', new Date());
        if (!isNaN(parsedDate) && parsedDate.getDate() && parsedDate.getMonth() + 1 && parsedDate.getFullYear()) {
            req.body.birth_date = format(parsedDate, 'yyyy-MM-dd');
            return true;
        }
        throw new Error('Enter a valid "dd-MM-yyyy" date');
    }),
    body('address').notEmpty().withMessage('address cant be empty!')
    .isString().withMessage('address must be string!'),
    body('phone_number').notEmpty().withMessage('phone_number cant be empty!')
    .isNumeric().withMessage('phone_number must be a number!'),
    body('dni').notEmpty().withMessage('dni cant be empty!')
    .isNumeric().withMessage('dni must be a number!'),
    body('gender_id').notEmpty().withMessage('gender_id cant be empty!')
    .isNumeric().withMessage('gender_id must be a number!')
    .isIn([5,7,8,9]).withMessage('gender_id must be a valid number value from genders table!'),
   
]






   
    

