const connection = require('../db/db.js')

const deleteAppointment = async (req, res, next) => {
  const { doctor_id, appointment_id } = req.params
  try {
    const sql = 'SELECT analysis_id FROM Appointments WHERE appointment_id = ?'
    const [result] = await connection.promise().query(sql, [appointment_id])
    if (result.length === 0) {
      const response = {
        status: 'failure',
        message: 'Appointment not found',
      }
      return res.json(response)
    }
    const analysis_id = result[0].analysis_id
    const sql2 = 'SELECT doctor_id FROM Analysis WHERE analysis_id = ?'
    const [result2] = await connection.promise().query(sql2, [analysis_id])
    if (result2.length === 0) {
      const response = {
        status: 'failure',
        message: 'Appointment not found',
      }
      return res.json(response)
    }
    const doc_id = result2[0].doctor_id
    if (doc_id != doctor_id) {
      const response = {
        status: 'failure',
        message: 'wrong identifier',
      }
      return res.json(response)
    }
    const sql3 = 'DELETE FROM Appointments WHERE appointment_id=?'
    const [result3] = await connection.promise().query(sql3, [appointment_id])
    const response = {
      status: 'ok',
      message: 'Appointment deleted successfully',
      affectedRows: result3.affectedRows,
    }
    return res.status(200).json(response)
  } catch (e) {
    console.log(e)
    return res.send('it doesnt works')
  }
}

module.exports = {
  deleteAppointment,
}
