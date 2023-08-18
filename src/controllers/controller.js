const connection = require('../db/db.js')

const getAnalysis = async (req, res, next) => {
  try {
    const { id } = req.query
    const sql = id
      ? 'SELECT * FROM Analysis WHERE analysis_id = ?'
      : 'SELECT * FROM Analysis'

    const [results] = await connection.promise().query(sql, [id])

    if (id && results.length === 0) {
      const response = {
        status: 'Success',
        message: 'Analysis not found',
      }
      return res.status(404).json(response)
    }
    const response = {
      status: 'Success',
      message: 'Completed successfully',
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
  getAnalysis,
}
