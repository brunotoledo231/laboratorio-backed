import {Router} from 'express'
import {getAllUsers, createUser, logIn,updateUser} from '../controllers/userController.js'

import { createUserValidator, logInValidator, updateUserValidator } from '../middlewares/reqValidation.js'


const router = Router()

router.get('/',getAllUsers)
router.post('/', createUserValidator, createUser)
router.post('/login',logInValidator,  logIn)
router.put('/:id',updateUserValidator,updateUser)

export default router