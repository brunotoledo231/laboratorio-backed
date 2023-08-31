const connection = require('../db/db.js');

const getAllAnalysis = async (req, res, next) => {
  try {
    const sql =
      'SELECT analysis_type_id, analysis_type_name analysis_type_price, analysis_type_previous_condition  FROM Analysis_type';

    const [results] = await connection.promise().query(sql);

    if (results.length === 0) {
      const response = {
        status: 'error',
        message: 'No information available',
        results: results.length,
      };
      return res.status(404).json(response);
    }
    const response = {
      status: 'ok',
      message: 'Completed successfully',
      results: results.length,
      data: results,
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

const getAnalysisById = async (req, res, next) => {
  try {
    const { analysis_id } = req.params;
    const sql =
      'SELECT analysis_type_id, analysis_type_name analysis_type_price, analysis_type_previous_condition  FROM Analysis_type WHERE analysis_type_id = ?';

    const [result] = await connection.promise().query(sql, [analysis_id]);

    if (result.length === 0) {
      const response = {
        status: 'error',
        message: 'Analysis not found',
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

module.exports = {
  getAllAnalysis,
  getAnalysisById,
};
