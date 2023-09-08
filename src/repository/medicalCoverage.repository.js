import MedicalCoverageDTO from  '../dao/dto/MedicalCoverageDTO.js'

export default class MedicalCoverageRepository{
    constructor(medicalCoverage) {
        this.medicalCoverage = medicalCoverage;
    }
    
    getAllMedicalCoverage = async()=>{
        return await this.medicalCoverage.getAll()
    }

    getOneMedicalCoverageById =async(id)=>{
        return await this.medicalCoverage.getOneById(id)
    }

    getOneMedicalCoverageByName= async(name)=>{
        return await this.medicalCoverage.getOneByName(name)
    }
    
}

