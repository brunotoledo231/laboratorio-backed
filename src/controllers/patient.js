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

module.exports = { getNewAppointment }
