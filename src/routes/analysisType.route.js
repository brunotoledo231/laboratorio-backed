import {Router} from 'express'
import { getAllAnalysisType,updateAnalysisType } from '../controllers/analysisTypeController.js'
import{createAnalysisTypeValidator} from '../middlewares/analysisTypeValidation.js'


const router = Router()

router.get('/',getAllAnalysisType)
router.put('/:id',createAnalysisTypeValidator,updateAnalysisType)

export default router