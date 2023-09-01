const connection = require('../db/db.js');

const getNewAppointment = async (req, res, next) => {
  const { patient_id } = req.params;
  const { newDate, analysisId } = req.body;
  try {
    const sql =
      'UPDATE Appointments SET appointment_date = ? WHERE patient_id = ? AND analysis_id = ?';

    const [result] = await connection
      .promise()
      .query(sql, [newDate, patient_id, analysisId]);

    if (result.affectedRows === 0) {
      const response = {
        status: 'error',
        message: 'wrong identifier',
      };
      return res.json(response);
    }
    const sql2 =
      'SELECT analysis_id, appointment_date, appointment_observation, patient_id FROM Appointments WHERE patient_id = ? AND analysis_id = ?';
    const [result2] = await connection
      .promise()
      .query(sql2, [patient_id, analysisId]);
    const response = {
      status: 'ok',
      message: 'updated successfully',
      affectedRows: result.affectedRows,
      data: result2[0],
    };
    return res.status(200).json(response);
  } catch (e) {
    const response = {
      status: 'error',
      code: e.code,
      message: e.sqlMessage,
    };

    return res.status(500).json(response);
  }
};
const getAppointments = async (req, res, next) => {
  const { patient_id } = req.params;
  try {
    const sql = 'SELECT * FROM Appointments WHERE patient_id = ? ';
    const [result] = await connection.promise().query(sql, [patient_id]);

    if (result.length === 0) {
      const response = {
        status: 'error',
        message: 'wrong identifier',
      };
      return res.status(404).json(response);
    }
    const response = {
      status: 'ok',
      message: 'Completed successfully',
      results: result.length,
      data: result,
    };
    return res.status(200).json(response);
  } catch (e) {
    const response = {
      status: 'error',
      code: e.code,
      message: e.sqlMessage,
    };

    return res.status(500).json(response);
  }
};
const deleteAppointment = async (req, res) => {
  const { patient_id, appointment_id } = req.params;
  try {
    const sql =
      'DELETE FROM Appointments WHERE appointment_id = ? AND patient_id = ? ';
    const [result] = await connection
      .promise()
      .query(sql, [appointment_id, patient_id]);

    if (result.length === 0) {
      const response = {
        status: 'error',
        message: 'wrong identifier',
        affectedRows: result.affectedRows,
      };
      return res.json(response);
    }
    const response = {
      status: 'ok',
      message: 'deleted successfully',
      affectedRows: result.affectedRows,
    };
    return res.status(200).json(response);
  } catch (e) {
    const response = {
      status: 'error',
      code: e.code,
      message: e.sqlMessage,
    };

    return res.status(500).json(response);
  }
};

module.exports = {
  getNewAppointment,
  getAppointments,
  deleteAppointment,
};
