import {Router} from 'express'
import { getAllAnalysisType } from '../controllers/analysisTypeController.js'

import{createAnalysisTypeValidator} from '../middlewares/reqValidation.js'


const router = Router()

router.get('/',getAllAnalysisType)

export default router