const analysisRouter = require('express').Router()
const { getAnalysisById, getAllAnalysis } = require('../controllers/analysis')

analysisRouter.get('/', getAllAnalysis).get('/{analysis_id}', getAnalysisById)

module.exports = analysisRouter
