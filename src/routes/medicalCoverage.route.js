import {Router} from 'express'
import { getAllMedicalCoverage } from '../controllers/medicalCoverageController.js'



const router = Router()

router.get('/',getAllMedicalCoverage)
// router.put('/:id',getMedicalCoverageById)

export default router