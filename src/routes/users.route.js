import {Router} from 'express'
import {getAllUsers, createUser, logIn} from '../controllers/users.controller.js'
import { createUserValidator, logInValidator } from '../middlewares/reqValidation.js'


const router = Router()

router.get('/',getAllUsers)
router.post('/', createUserValidator, createUser)
router.post('/login',logInValidator,  logIn)

export default router