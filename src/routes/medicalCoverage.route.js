import {Router} from 'express'
import { getAllMedicalCoverage,getMedicalCoverageById,getMedicalCoverageByName } from '../controllers/medicalCoverageController.js'

const router = Router()

router.get('/',getAllMedicalCoverage)
router.get('/id/:id',getMedicalCoverageById)
router.get('/name/:name',getMedicalCoverageByName)

export default router