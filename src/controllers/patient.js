const connection = require('../db/db.js');

const getNewAppointment = async (req, res, next) => {
  const { patient_id } = req.params;
  const { date, analysisName } = req.body;
  console.log(patient_id, date, analysisName);
  try {
    const sql =
      'SELECT * FROM Analysis WHERE patient_id = ? AND analysis_name = ?';

    const [result] = await connection
      .promise()
      .query(sql, [patient_id, analysisName]);

    const sql2 = 'UPDATE Analysis SET analysis_date = ? WHERE analysis_id = ?';

    const [result2] = await connection
      .promise()
      .query(sql2, [date, result[0].analysis_id]);

    return res.json({ result2 });
  } catch (e) {
    const response = {
      status: 'error',
      code: e.code,
      message: e.sqlMessage,
    };
    return res.json(response);
  }
};

const deleteAppointment = async (req, res, next) => {
  const { patient_id, appointment_id } = req.params;

  try {
    const sql =
      'DELETE FROM Appointments WHERE patient_id = ? AND appointment_id = ?';

    const [result] = await connection
      .promise()
      .query(sql, [patient_id, appointment_id]);

    if (result.affectedRows === 0) {
      const response = {
        status: 'failure',
        message: 'Appointment not found',
        affectedRows: result.affectedRows,
      };
      return res.json(response);
    }
    const response = {
      status: 'succes',
      message: 'Appointment deleted successfully',
      affectedRows: result.affectedRows,
    };
    return res.status(200).json(response);
  } catch (e) {
    const response = {
      status: 'error',
      code: e.code,
      message: e.sqlMessage,
    };
    return res.json(response);
  }
};

module.exports = { getNewAppointment, deleteAppointment };
