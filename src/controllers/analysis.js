const connection = require('../db/db.js')

const getAllAnalysis = async (req, res, next) => {
  try {
    const sql = 'SELECT analysis_id,analysis_name, analysis_type_id,analysis_material, price  FROM Analysis'

    const [results] = await connection.promise().query(sql)

    if (results.length === 0) {
      const response = {
        status: 'Failure',
        message: 'No information available',
        results: results.length
      }
      return res.status(404).json(response)
    }
    const response = {
      status: 'Success',
      message: 'Completed successfully',
      results: results.length,
      data: results,
    }

    return res.status(200).json(response)
  } catch (error) {
    const response = {
      status: 'Failure',
      message: 'There was an error processing the query',
      error: error.message,
    }

    return res.status(500).json(response)
  }
}

const getAnalysisById = async (req, res, next) => {
  try {
    const { analysis_id } = req.params
    const sql = 'SELECT analysis_id,analysis_name, analysis_type_id,analysis_material, price FROM Analysis WHERE analysis_id = ?'

    const [results] = await connection.promise().query(sql, [analysis_id])

    if (results.length === 0) {
      const response = {
        status: 'Failure',
        message: 'Analysis not found',
      }
      return res.status(404).json(response)
    }
    const response = {
      status: 'Success',
      message: 'Completed successfully',
      results: results.length,
      data: results,
    }

    return res.status(200).json(response)
  } catch (error) {
    const response = {
      status: 'Failure',
      message: 'There was an error processing the query',
      error: error.message,
    }

    return res.status(500).json(response)
  }
}

module.exports = {
  getAllAnalysis,
  getAnalysisById,
}
