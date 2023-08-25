
import AnalysisTypeRepository from './analysisType.repository.js'
import{analysis_type} from '../dao/sql/analysisType.sql.js'
import UserRepository from './users.repository.js'
import PersonRepository from './persons.repository.js'
import {user} from '../dao/sql/users.sql.js'
import {person} from '../dao/sql/persons.sql.js'

export const UserService = new UserRepository(user)
export const PersonService = new PersonRepository(person)
export const AnalysisTypeService=new AnalysisTypeRepository(analysis_type)

