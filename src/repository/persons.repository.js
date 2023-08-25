import personDTO from '../dao/dto/PersonDTO.js'

export default class PersonRepository {
    constructor(person) {
        this.person = person
    }
    getAllPersons = async() => {
        return await this.person.getAll()
    }
    createPerson = async(person) => {
        const newPerson = new personDTO(person)
        return await this.person.create(newPerson)
    }
    getPersonByDNI = async(dni) => {
        return await this.person.getOneByDNI(dni)
    }
    getPersonById = async(id) => {
        return await this.person.getOneById(id)
    }
    updatePerson=async(updatedPerson)=>{
        return await this.person.update(updatedPerson)
    }
}