const patientRouter = require('express').Router()
const { getNewAppointment, getAppointments } = require('../controllers/patient')

patientRouter
  .patch('/:patient_id/new-appointment', getNewAppointment)
  .get('/:patient_id/appointments', getAppointments)

module.exports = patientRouter
