const patientRouter = require('express').Router()
const {getNewAppointment} = require('../controllers/patient')

patientRouter
  .patch('/:patient_id/new', getNewAppointment)

  module.exports = patientRouter
