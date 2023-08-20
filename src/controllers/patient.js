const connection = require('../db/db.js')

const getNewAppointment = async (req, res, next) => {
  const { patient_id } = req.params
  const { date, analysisName } = req.body
  try {
    const sql =
      'SELECT * FROM Analysis WHERE patient_id = ? AND analysis_name = ?'

    const [result] = await connection
      .promise()
      .query(sql, [patient_id, analysisName])

    const sql2 = 'UPDATE Analysis SET analysis_date = ? WHERE analysis_id = ?'

    const [result2] = await connection
      .promise()
      .query(sql2, [date, result[0].analysis_id])

    result[0].analysis_date = new Date(date)
    const response = {
      status: 'ok',
      message: `${result2.affectedRows} rows affected`,
      result: result,
    }
    return res.status(200).json(response)
  } catch (e) {
    const response = {
      status: 'error',
      code: e.code,
      message: e.sqlMessage,
    }

    return res.status(500).json(response)
  }
}
const getAppointments = async (req, res, next) => {
  const { patient_id } = req.params
  try {
    const sql = 'SELECT * FROM Analysis WHERE patient_id = ? '
    const [result] = await connection.promise().query(sql, [patient_id])

    if (result.length === 0) {
      const response = {
        status: 'error',
        message: 'Patient not found',
      }
      return res.status(404).json(response)
    }
    const response = {
      status: 'ok',
      message: 'Completed successfully',
      results: result.length,
      data: result,
    }
    return res.status(200).json(response)
  } catch (e) {
    console.log(e)
    const response = {
      status: 'error',
      code: e.code,
      message: e.sqlMessage,
    }

    return res.status(500).json(response)
  }
}

module.exports = {
  getNewAppointment,
  getAppointments,
}
