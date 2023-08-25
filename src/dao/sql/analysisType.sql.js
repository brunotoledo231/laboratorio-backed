import pool from "../../utils/db.js"

class AnalysisType {
    constructor(){}
    create = async(analysisType) => {
        const data = await pool.query('INSERT INTO Analysis_type (analysis_type_name) VALUES (?)', [analysisType.analysis_type_namee_number]) 
        return data[0]
    }
    getAll = async() => {
        const data = await pool.query('SELECT * FROM Analysis_type')
        return data
    }
    getOneById = async(id) => {
        const data = await pool.query('SELECT * FROM Analysis_type WHERE id =?', [id])
        return data[0]
    }
    getOneByName = async(analysis_type_name) => {
        const data = await pool.query('SELECT * FROM Analysis_type WHERE analysis_type_name =?', [analysis_type_name])
        return data[0]
    }
    update = async(analysis_type) => {
        const data = await pool.query('UPDATE Analysis_type SET analysis_type=? WHERE id =?', [analysis_type, analysis_type.analysis_type_id])
        return data[0]
    }
}

export const analysis_type = new AnalysisType()


