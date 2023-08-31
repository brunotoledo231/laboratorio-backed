import {Router} from 'express'
import {getAllUsers, createUser, logIn, getUserById, getUserByEmail, updateUser, deleteUserById, inverseDeleteUserById} from '../controllers/userController.js'

import { createUserValidator, logInValidator, updateUserValidator } from '../middlewares/reqValidation.js'


const router = Router()

router.get('/', getAllUsers);
router.get('/id/:id', getUserById);
router.get('/email/:email', getUserByEmail);
router.patch('/email/:email',updateUserValidator,updateUser)
router.post('/', createUserValidator, createUser);
router.post('/login', logInValidator, logIn);
router.delete('/delete/id/:id',deleteUserById)
router.delete('/inverseDelete/id/:id',inverseDeleteUserById)

export default router