export default class personDTO {
    constructor(person){
        this.person_id = person.person_id || null
        this.first_name = person.first_name
        this.last_name = person.last_name
        this.dni = person.dni
        this.phone_number = person.phone_number
        this.address = person.address
        this.birth_date = person.birth_date
        this.gender_id = person.gender_id
        this.dni_type_id = person.dni_type_id
        this.postal_code = person.postal_code
        this.affiliate_number = person.affiliate_number
        this.medical_coverage = person.medical_coverage
    }
   
}
 