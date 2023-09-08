import {Router} from 'express'
import { getAllPersons, updatePerson } from '../controllers/personController.js'
import { updatePersonValidator } from '../middlewares/reqValidation.js'



const router = Router()

router.put('/id/:id',updatePersonValidator, updatePerson)
router.get('/',getAllPersons)

export default router