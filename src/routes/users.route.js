import {Router} from 'express'
import {getAllUsers, createUser, logIn, getUserById, getUserByEmail, updateUser} from '../controllers/userController.js'

import { createUserValidator, logInValidator, updateUserValidator } from '../middlewares/reqValidation.js'


const router = Router()

router.get('/', getAllUsers);
router.get('/id/:id', getUserById);
router.get('/email/:email', getUserByEmail);
router.put('/email/:email',updateUserValidator,updateUser)
router.post('/', createUserValidator, createUser);
router.post('/login', logInValidator, logIn);


export default router