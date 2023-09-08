export default class medicalCoverageDTO{
    constructor(medicalCoverage){
        this.medical_coverage_id = medicalCoverage.medical_coverage_id || null
        this.medical_coverage_name = medicalCoverage.medical_coverage_name
        this.medical_coverage_type_id = medicalCoverage.medical_coverage_type_id
        this.medical_coverage_address = medicalCoverage.medical_coverage_address
        this.medical_coverage_phone_number = medicalCoverage.medical_coverage_phone_number
        this.medical_coverage_logo = medicalCoverage.medical_coverage_logo
        
    }
}
 