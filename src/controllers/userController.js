import { validationResult } from 'express-validator';
import { UserService } from '../repository/index.js'
import { PersonService } from '../repository/index.js';
import { comparePassword, hashPassword } from '../utils/hashedPass.js';
import { parse, format } from 'date-fns';


export const createUser = async(req,res,next) => { 
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
    const userInfo = {
        email: req.body.email,
        password: req.body.password,
        role_id: req.body.role_id,
        person_id: null
    }

    const parsedDate = parse(personInfo.birth_date, 'dd-MM-yyyy', new Date());
    const formattedBirthDate = format(parsedDate, 'yyyy-MM-dd');
    personInfo.birth_date = formattedBirthDate;

    try {
        const {insertId} = await PersonService.createPerson(personInfo)
        const hashedPass = hashPassword(userInfo.password)
        userInfo.person_id = insertId
        userInfo.password = hashedPass
        const data = await UserService.createUser(userInfo)
        return res.json({
            status: 'OK',
            payload: {user_id: data.insertId}
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


export const updateUser = async (req, res, next) => {
    const {errors} = validationResult(req)
    if (errors.length > 0) {
        return res.status(400).json({
            status: 'failed',
            payload: errors
        })
    }

    const userName = req.params.email;
   

    try {
        const { password } = req.body;

        // Hash the new password
        const hashedPassword = hashPassword(password);

        const updatedUserData = {
            password: hashedPassword
        };

        const updated = await UserService.updateUser(userName, updatedUserData);

        if (!updated) {
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
                message: 'User data updated successfully'
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
 

export const logIn = async(req,res,next) => {
    const {errors} = validationResult(req)
    if (errors.length > 0) {
        return res.status(400).json({
            status: 'failed',
            payload: errors
        })
    }
    try {    
        const data = await UserService.getUserByEmail(req.body.email)
        if(data.length === 0) {
            return res.status(400).json({
                status: 'failed',
                payload: {
                    message: 'User not registered'
                }
            })
        }
        if(!comparePassword(req.body.password, data[0].password)) {
            return res.status(401).json({
                status: 'failed',
                payload: {
                    message: 'Invalid password'
                }
            })
        }
        const {password, ...other} = data[0]
        res.json({
            status: 'OK',
            payload: other
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
    
export const getAllUsers = async(req,res,next) => {
    console.log('controllers.getAllUsers hitted');
    try {
        const data = await UserService.getAllUsers()
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

export const getUserById=async(req,res,next)=>{
    try{
        const data=await UserService.getUserById(req.params.id)
        res.json({
            status:'OK',
            payload:data[0]
        })
    }catch(error){
        res.status(500).json({
            status:'failed',
            payload:{
                message:error.message,
                stack:error.stack
            }
        })
    }
}

export const getUserByEmail=async(req,res,next)=>{
    try{
        const data=await UserService.getUserByEmail(req.params.email)
        res.json({
            status:'OK',
            payload:data[0]
        })
    }catch(error){
        res.status(500).json({
            status:'failed',
            payload:{
                message:error.message,
                stack:error.stack
            }
        })
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

export const inverseDeleteUserById = async (req, res, next) => {//para volver a estar activo el usuarioss
    try {
        const userId = req.params.id;

        const deleted = await UserService.inverseDeleteUserById(userId);

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
                message: 'the user is active'
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