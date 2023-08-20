const connection = require('../db/db.js')


const getNewAppointment = async (req, res, next) => {
  const {patient_id} = req.params
  const {date, analysisName} = req.body
  console.log(patient_id, date, analysisName)
  try {
    const sql = 'SELECT * FROM Analysis WHERE patient_id = ? AND analysis_name = ?'

    const [result] = await connection.promise().query(sql, [patient_id, analysisName])
    

    const sql2 = 'UPDATE Analysis SET analysis_date = ? WHERE analysis_id = ?'

    const [result2] = await connection.promise().query(sql2, [date, result[0].analysis_id])

  return res.json({result2})
  }catch (e) {
    console.log(e)
  }
} 

module.exports = {getNewAppointment}