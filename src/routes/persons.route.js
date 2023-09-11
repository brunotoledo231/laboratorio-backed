import {Router} from 'express'
import { getAllPersons, getPersonByDNI, getPersonByID, updatePerson } from '../controllers/personController.js'
import { updatePersonValidator } from '../middlewares/reqValidation.js'
import { allowedKeysMiddleware } from '../middlewares/allowedFieldsValidator.js'



const router = Router()

router.put('/id/:id', allowedKeysMiddleware, updatePerson)
router.get('/id/:id', getPersonByID)
router.get('/dni/:dni', getPersonByDNI)
router.get('/',getAllPersons)

export default router