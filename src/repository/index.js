
import AnalysisTypeRepository from './analysisType.repository.js'
import{analysis_type} from '../dao/sql/analysisType.sql.js'

import UserRepository from './users.repository.js'
import {user} from '../dao/sql/users.sql.js'

import PersonRepository from './persons.repository.js'
import {person} from '../dao/sql/persons.sql.js'

import MedicalCoverageRepository  from './medicalCoverage.repository.js'
import { medical_coverage } from '../dao/sql/medicalCoverages.sql.js'


export const UserService = new UserRepository(user)
export const PersonService = new PersonRepository(person)
export const AnalysisTypeService=new AnalysisTypeRepository(analysis_type)
export const MedicalCoverageService = new MedicalCoverageRepository(medical_coverage)
