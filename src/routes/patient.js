const patientRouter = require('express').Router();
const {
  getNewAppointment,
  getAppointments,
  deleteAppointment,
} = require('../controllers/patient');

patientRouter
  .patch('/:patient_id/appointments/new', getNewAppointment)
  .get('/:patient_id/appointments', getAppointments)
  .delete(
    '/:patient_id/appointments/delete/:appointment_id',
    deleteAppointment
  );

module.exports = patientRouter;
