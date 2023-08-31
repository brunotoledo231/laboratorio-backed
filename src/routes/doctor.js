const doctorRouter = require('express').Router();

const { deleteAppointment } = require('../controllers/doctor');

doctorRouter.delete(
  '/:doctor_id/appointments/delete/:appointment_id',
  deleteAppointment
);

module.exports = doctorRouter;
