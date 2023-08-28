import AnalysisTypeDTO from '../dao/dto/AnalysisTypeDTO.js'

export default class AnalysisTypeRepository {
    constructor(analysisType) {
        this.analysisType = analysisType
    }
    getAllAnalysisType = async() => {
        return await this.analysisType.getAll()
    }
    createAnalysisType = async(analysis_type) => {
        const newAnalysisType = new AnalysisTypeDTO(analysis_type)  // Corregido
        return await this.analysisType.create(newAnalysisType)
    }
    getAnalysisById = async(id) => {
        return await this.analysisType.getAnalysisById(id)
    }
    getAnalysisByName = async(name) => {
        return await this.analysisType.getAnalysisByName(name)
    }
    update=async(analysisTypeId,analysisTypeData)=>{
        return await this.analysisType.updateAnalysisType(analysisTypeId,analysisTypeData)
    }

}
