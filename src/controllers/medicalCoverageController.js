
import { MedicalCoverageService } from '../repository/index.js';



export const getAllMedicalCoverage = async(req,res,next) => {
    console.log('controllers.getAllMedicalCoverage hitted');
    try {
        const data = await MedicalCoverageService.getAllMedicalCoverage()
        res.json({
            status: 'OK',
            payload: data[0]
        })
        
    } catch (error) {
        res.status(500).json({//sasas
            status: 'failed',
            payload: {
                message:error.message,
                stack:error.stack
            }
        })
    }
};


export const getMedicalCoverageById=async(req,res,next)=>{
    try{
        const data=await MedicalCoverageService.getOneMedicalCoverageById(req.params.id) 
        res.json({
            status:'OK',
            payload:data[0]
        })
    }catch(error){
        res.status(500).json({
            status:'failed',
            payload:{
                message:error.message,
                stack:error.stack
            }
        })
    }
};

export const getMedicalCoverageByName=async(req,res,next)=>{
    try{
        const data=await MedicalCoverageService.getOneMedicalCoverageByName(req.params.name) 
        res.json({
            status:'OK',
            payload:data[0]
        })
    }catch(error){
        res.status(500).json({
            status:'failed',
            payload:{
                message:error.message,
                stack:error.stack
            }
        })
    }
};
