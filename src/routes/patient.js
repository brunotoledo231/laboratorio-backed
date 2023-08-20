const patientRouter = require('express').Router()
const { getNewAppointment } = require('../controllers/patient')

patientRouter.patch('/:patient_id/new-appointment', getNewAppointment)

module.exports = patientRouter
