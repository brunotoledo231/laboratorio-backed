import MedicalCoverageDTO from  '../dao/dto/MedicalCoverageDTO.js'

export default class MedicalCoverageRepository{
    constructor(medicalCoverage) {
        this.medicalCoverage = medicalCoverage;
    }
    
    getAllMedicalCoverage = async()=>{
        return await this.medicalCoverage.getAll()
    }
}

