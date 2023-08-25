import pool from "../../utils/db.js"

class AnalysisType {
    constructor(){}
    create = async(analysisType) => {
        const data = await pool.query('INSERT INTO Analysis_type (analysis_type_name,analysis_type_price,analysis_type_materials) VALUES (?,?,?)', [analysisType.analysis_type_name,analysisType.analysis_type_price,analysisType.analysisType_materials]) 
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
        const data = await pool.query('UPDATE Analysis_type SET analysis_type_name=?, analysis_type_price=?, analysis_type_materials=? WHERE analysis_type_id=?', [analysis_type.analysis_type_name, analysis_type.analysis_type_price, analysis_type.analysis_type_materials, analysis_type.analysis_type_id])
        return data[0]
    }
}

export const analysis_type = new AnalysisType()


