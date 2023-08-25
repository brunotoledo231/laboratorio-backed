export default class analysisTypeDTO{
    constructor(analysisType){
        this.analysis_type_id = analysisType.analysis_type_id || null
        this.analysis_type_name=analysisType.analysis_type_name
        this.analysis_type_price=analysisType.analysis_type_price
        this.analysis_type_materials=analysisType.analysis_type_materials
    }
}
 