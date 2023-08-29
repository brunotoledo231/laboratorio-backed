import {Router} from 'express'
import { updatePerson } from '../controllers/personController.js'
import { updatePersonValidator } from '../middlewares/reqValidation.js'



const router = Router()

router.put('/id/:id',updatePersonValidator, updatePerson)


export default router