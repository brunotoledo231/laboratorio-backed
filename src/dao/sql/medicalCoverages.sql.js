import pool from "../../utils/db.js"


class MedicalCoverage {
constructor(){}

getAll = async() => {
    // const data = await pool.query(`SELECT mc.medical_coverage_id,mc.medical_coverage_name,
    // mct.medical_coverage_types_name,mc.medical_coverage_address,
    // mc.medical_coverage_phone_number,mc.medical_coverage_logo 
    // FROM medical_coverages 
    // JOIN medical_coverage_types on mc.medical_coverage_type_id=mct.medical_coverage_type_id`
    const data=await pool.query('select * from Medical_coverages')
    
    return data;
    }   
}

export const medical_coverage = new MedicalCoverage()