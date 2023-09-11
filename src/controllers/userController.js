import { validationResult } from 'express-validator';
import { UserService } from '../repository/index.js'
import { PersonService } from '../repository/index.js';
import { comparePassword, hashPassword } from '../utils/hashedPass.js';
import { parse, format } from 'date-fns';
import { createError } from '../utils/error.js';


export const createUser = async(req,res,next) => { 
    /*
            Input validation...
    **/
    const {errors} = validationResult(req)
    if (errors.length > 0) {
       throw createError(400, errors)
    }
    /*
            Split inputs into person and user
    **/
    const personInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birth_date: req.body.birth_date,
        address: req.body.address,
        phone_number: req.body.phone_number,
        dni: req.body.dni,
        gender_id: req.body.gender_id,
        dni_type_id: req.body.dni_type_id,
        postal_code: req.body.postal_code,
        affiliate_number: req.body.affiliate_number,
        medical_coverages_id: req.body.medical_coverages_id
    }
    const userInfo = {
        email: req.body.email,
        password: req.body.password,
        role_id: req.body.role_id,
        person_id: null
    }
    try {
        /*
            Checking if the user already exists...
        **/
        const existingUser = await UserService.getUserByEmail(userInfo.email)
        if (existingUser.length > 0) {
           throw createError(409, 'Email registrado!')
        }
        /*
            if it doesn't exist, now processing person inputs...
        **/
        const parsedDate = parse(personInfo.birth_date, 'dd-MM-yyyy', new Date());
        const formattedBirthDate = format(parsedDate, 'yyyy-MM-dd');
        personInfo.birth_date = formattedBirthDate;
        /*
            Create person so we can get insert ID and add it to users obj
        **/
        const {insertId} = await PersonService.createPerson(personInfo)
        /*
            Now processing user inputs...
        **/
        const hashedPass = hashPassword(userInfo.password)
        userInfo.person_id = insertId
        userInfo.password = hashedPass
        /*
            Create user
        **/
        const data = await UserService.createUser(userInfo)
        return res.json({
            status: 'OK',
            payload: {user_id: data.insertId}
        })
    } catch (error) {
        next(error)
    }
}

/*
    Users can only change their password
**/
export const updateUser = async (req, res, next) => {
    /*
            Check input validation...
    **/
    const {errors} = validationResult(req)
    if (errors.length > 0) {
        throw createError(400, errors)
     }

     try {
        /*
            Check if user exists...
        **/
        const userEmail = req.params.email; 
        const userExists =  await UserService.getUserByEmail(userEmail)
        if (userExists.length === 0) {
           throw createError(400, 'User not registered!')
        }
        const { password } = req.body;
        /*
            Compare password against old password
        **/
        if(comparePassword(password, userExists.password)){
            throw createError(400, 'New password is the same as old password')
        }
        /*
            Create new hashed password
        **/
        const newHashedPassword = hashPassword(password)
        const updatedUserData = {
            password: newHashedPassword
        };
        /*
            Call service and update user
        **/
        await UserService.updateUser(userName, updatedUserData);
        return res.json({
            status: 'OK',
            payload: {
                message: 'User data updated successfully'
            }
        });
    } catch (error) {
        next(error)
    }
};
 

export const logIn = async(req,res,next) => {
    /*
        Input validation...
    **/
    const {errors} = validationResult(req)
    if (errors.length > 0) {
        throw createError(400, errors)
    }
    try {
        /*
            User and pass validation...
        **/     
        const data = await UserService.getUserByEmail(req.body.email)
        if(data.length === 0) {
            throw createError(400, 'Usuario no registrado!')
        }
        if(!comparePassword(req.body.password, data[0].password)) {
            throw createError(401, 'Contraseña incorrecta!')
        }
        const {password, ...other} = data[0]
        res.json({
            status: 'OK',
            payload: other
        })
    } catch (error) {
        next(error)
    }
    }
    
export const getAllUsers = async(req,res,next) => {
    try {
        const data = await UserService.getAllUsers()
        res.json({
            status: 'OK',
            payload: data[0]
        })     
    } catch (error) {
        next(error)
    }
}

export const getUserById=async(req,res,next)=>{
    try{
        const data = await UserService.getUserById(req.params.id)
        if (data.length === 0) {
            throw createError(400, 'Usuario no existe!')
        }
        res.json({
            status:'OK',
            payload:data[0]
        })
    }catch(error){
        next(error)
    }
}

export const getUserByEmail=async(req,res,next)=>{
    try{
        const data=await UserService.getUserByEmail(req.params.email)
        if (data.length === 0) {
            throw createError(400, 'Usuario no existe!')
        }
        res.json({
            status:'OK',
            payload:data[0]
        })
    }catch(error){
        next(error)
    }
}

export const deleteUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;

        const deleted = await UserService.deleteUserById(userId);

        if (!deleted) {
            return res.status(404).json({
                status: 'failed',
                payload: {
                    message: 'User not found'
                }
            });
        }

        return res.json({
            status: 'OK',
            payload: {
                message: 'the user is inactive'
            }
        });
    } catch(error){
        res.status(500).json({
            status:'failed',
            payload:{
                message:error.message,
                stack:error.stack
            }
        })
    }
};

