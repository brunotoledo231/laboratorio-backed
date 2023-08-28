import {Router} from 'express'
import { updatePerson } from '../controllers/personController.js'



const router = Router()

router.put('/:id',updatePerson)


export default router