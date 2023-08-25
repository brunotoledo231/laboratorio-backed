import { validationResult } from 'express-validator';
import { AnalysisTypeService } from '../repository/index.js';

export const createAnalysisType = async (req, res, next) => {
    const { errors } = validationResult(req);
    if (errors.length > 0) {
        return res.status(400).json({
            status: 'failed',
            payload: errors
        });
    }

    const analysisTypeInfo = {
        analysis_type_name: req.body.analysis_type_name
    };

    try {
        const { insertId } = await AnalysisTypeService.createAnalysisType(analysisTypeInfo);
        return res.json({
            status: 'OK',
            payload: { analysis_type_id: insertId }
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            payload: {
                message: error.message,
                stack: error.stack
            }
        });
    }
};


    
export const getAllAnalysisType = async(req,res,next) => {
    console.log('controllers.getAllAnalysisType hitted');
    try {
        const data = await AnalysisTypeService.getAllAnalysisType()
        res.json({
            status: 'OK',
            payload: data[0]
        })
        
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            payload: {
                message:error.message,
                stack:error.stack
            }
        })
    }
}